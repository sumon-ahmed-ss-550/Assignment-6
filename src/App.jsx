import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Step from "./components/step/Step";
import Workflow from "./components/workflow/Workflow";

const makeRequest = fetch("/pricing.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Step></Step>
      <Pricing pricingCardInfo={makeRequest}></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App;
