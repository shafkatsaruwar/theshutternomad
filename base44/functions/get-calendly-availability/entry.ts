import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("calendly");

    const headers = {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    // Get current user URI
    const meRes = await fetch("https://api.calendly.com/users/me", { headers });
    if (!meRes.ok) {
      const txt = await meRes.text();
      return Response.json({ error: `Calendly /users/me failed: ${txt}` }, { status: 502 });
    }
    const meData = await meRes.json();
    const userUri = meData.resource.uri;

    // List event types for this user
    const etRes = await fetch(`https://api.calendly.com/event_types?user=${encodeURIComponent(userUri)}`, { headers });
    if (!etRes.ok) {
      const txt = await etRes.text();
      return Response.json({ error: `Calendly /event_types failed: ${txt}` }, { status: 502 });
    }
    const etData = await etRes.json();

    // Build the next-7-day window (max range allowed by Calendly)
    const now = new Date();
    now.setMinutes(now.getMinutes() + 5); // 5-minute buffer into the future
    const startTime = now.toISOString();
    const endTime = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();

    const eventTypes = [];
    for (const et of (etData.collection || [])) {
      const entry = {
        name: et.name,
        duration: et.duration,
        description: et.description_plain || et.description_html || "",
        scheduling_url: et.scheduling_url,
        active: et.active,
        slots: [],
      };

      if (!et.active) {
        eventTypes.push(entry);
        continue;
      }

      const timesRes = await fetch(
        `https://api.calendly.com/event_type_available_times?event_type=${encodeURIComponent(et.uri)}&start_time=${encodeURIComponent(startTime)}&end_time=${encodeURIComponent(endTime)}`,
        { headers }
      );
      if (timesRes.ok) {
        const timesData = await timesRes.json();
        entry.slots = (timesData.collection || []).map((s) => ({
          start_time: s.start_time,
          end_time: s.end_time,
        }));
      } else {
        console.error("Available times fetch failed for", et.uri, await timesRes.text());
      }

      eventTypes.push(entry);
    }

    return Response.json({ eventTypes });
  } catch (error) {
    console.error("Calendly availability error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});