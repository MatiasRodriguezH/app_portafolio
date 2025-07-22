import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NotFound from "./NotFound";
import { Helmet } from "react-helmet";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ContextoProvider from "./contexto/Contexto";

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <title>Porfolio</title>
      </Helmet>
      <ContextoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<NotFound />} />{" "}
            {/* NotFound es un componente que debes crear */}
          </Routes>
        </Router>
      </ContextoProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
