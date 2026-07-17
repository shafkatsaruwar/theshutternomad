import { Toaster } from "@/components/ui/toaster"
import { pagesConfig } from './pages.config'
import Contact from './pages/Contact';
import Journal from './pages/Journal';
import Prints from './pages/Prints';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <LayoutWrapper currentPageName={mainPageKey}>
            <MainPage />
          </LayoutWrapper>
        } />
        {Object.entries(Pages).map(([path, Page]) => (
          <Route
            key={path}
            path={`/${path}`}
            element={
              <LayoutWrapper currentPageName={path}>
                <Page />
              </LayoutWrapper>
            }
          />
        ))}
        <Route path="/Prints" element={
          <LayoutWrapper currentPageName="Prints">
            <Prints />
          </LayoutWrapper>
        } />
        <Route path="/Contact" element={
          <LayoutWrapper currentPageName="Contact">
            <Contact />
          </LayoutWrapper>
        } />
        <Route path="/Journal" element={
          <LayoutWrapper currentPageName="Journal">
            <Journal />
          </LayoutWrapper>
        } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
