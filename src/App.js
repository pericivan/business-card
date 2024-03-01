import './App.css';
import Main from "../src/components/Main"
import About from "../src/components/About"
import Footer from "../src/components/Footer"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
        <About />
        <Footer />
      </header>
    </div>
  );
}

export default App;
