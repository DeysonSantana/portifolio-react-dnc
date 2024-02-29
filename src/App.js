import './App.css';
import Navbar from './componentes/sections/Navbar';
import Presentation from './componentes/sections/Presentation';
import Skils from './componentes/sections/Skils';
import Projects from './componentes/sections/Projects';
import Footer from './componentes/sections/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Skils></Skils>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
