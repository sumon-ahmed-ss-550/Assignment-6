import "./App.css";
import Banner from "./components/banner/Banner";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Workflow from "./components/workflow/Workflow";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Workflow></Workflow>
    </>
  );
}

export default App;
