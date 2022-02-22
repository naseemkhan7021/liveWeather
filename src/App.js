
import HourlyData from "./components/Container/HourlyData";
import Main from "./components/Container/Main";
import Navbar from "./layout/Navbar";
import './App.css'

function App() {

  return (
    <div className="">
      <Navbar />
      <Main>
        <HourlyData />
      </Main>
    </div>
  );
}

export default App;
