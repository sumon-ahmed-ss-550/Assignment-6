import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Step from "./components/step/Step";
import Workflow from "./components/workflow/Workflow";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Step></Step>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App;
