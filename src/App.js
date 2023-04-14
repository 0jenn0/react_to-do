import "./App.css";
import Footer from "./components/Footer";
import ListBox from "./components/ListBox";
import Navbar from "./components/Navbar";
import StateProvider from "./context/StateProvider";

function App() {
  return (
    <StateProvider>
      <Navbar />
      <ListBox />
      <Footer />
    </StateProvider>
  );
}

export default App;
