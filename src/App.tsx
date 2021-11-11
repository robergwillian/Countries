import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./services/apollo";
import Header from "./components/header";
import List from "./components/list";
import SingleCountry from "./components/singleCountry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
        <div className="container">
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<List/>}/>
            <Route path="/country" element={<SingleCountry/>}>
              <Route path=":country_code" element={<SingleCountry/>}/>
            </Route>
          </Routes>
      </Router>
        </div>
    </ApolloProvider>
  );
}

export default App;
