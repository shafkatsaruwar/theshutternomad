import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';
import Stripe from 'npm:stripe@17.7.0';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { price_id, quantity } = await req.json();

    if (!price_id) {
      return Response.json({ error: 'A print size (price_id) is required' }, { status: 400 });
    }

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY'));
    const origin = req.headers.get('origin') || 'https://app.base44.com';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: price_id,
          quantity: quantity || 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/Prints?status=success`,
      cancel_url: `${origin}/Prints?status=cancel`,
      metadata: {
        base44_app_id: Deno.env.get('BASE44_APP_ID'),
      },
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Checkout creation error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});