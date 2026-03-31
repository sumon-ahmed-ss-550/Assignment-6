import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Step from "./components/step/Step";
import Tool from "./components/tool/Tool";
import Workflow from "./components/workflow/Workflow";
import { ToastContainer } from "react-toastify";

const makeRequest = fetch("/pricing.json").then((res) => res.json());
const cardInformationData = fetch("/tools.json").then((res) => res.json());

function App() {
  const [count, setCount] = useState([]);
  return (
    <>
      <Navbar count={count}></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Suspense callback="Hello">
        <Tool
          cardInformationData={cardInformationData}
          count={count}
          setCount={setCount}
        ></Tool>
      </Suspense>
      <Step></Step>
      <Pricing pricingCardInfo={makeRequest}></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
