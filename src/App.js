import './App.css';
import { BrowserRouter, Route,Router,Routes } from 'react-router-dom';
import About from './components/About/about'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<About/>}/>
        <Route path='Kyrgyzstan'/>
        <Route path='Contacts'/>
        <Route path='Services'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
