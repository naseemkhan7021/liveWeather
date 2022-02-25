
import HourlyData from "./components/Container/HourlyData";
import Main from "./components/Container/Main";
import Navbar from "./layout/Navbar";
import './App.css'

function App() {

  return (
    <div >
      <div className="dark:bg-slate-600">
        <Navbar />
        <Main>
          <HourlyData />
        </Main>
      </div>
    </div>
  );
}

export default App;
