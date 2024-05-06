import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";




import { AppWalletProvider, ContentWalletMultiButton } from "./components/providers/AppWalletProvider";

//https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>

      <AppWalletProvider>
  
      <ContentWalletMultiButton></ContentWalletMultiButton>
     
        
      </AppWalletProvider>
    </>
  );
}

export default App;
