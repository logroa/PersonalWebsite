import Slideshow from './components/Page'
import Header from './components/Header'
import Mainbar from './components/Mainbar'
import Opener from './components/Opener'
import './App.css'

function App() {
  return (
    <div className="App">
        <Opener id="slider"/>
        <Header className="rest" />
        <Slideshow className="rest" />
        <Mainbar className="rest" />
    </div>
  );
}

export default App;
