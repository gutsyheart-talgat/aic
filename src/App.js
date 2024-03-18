import './App.css';
import { BrowserRouter, Route,Router,Routes } from 'react-router-dom';
import About from './components/About/about'
import Kyrgyzstan from './components/Kyrgyzstan/kyrgyzstan';
import Contacts from './components/Contacts/contacts'
import Services from './components/Services/service'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='Kyrgyzstan' element={<Kyrgyzstan/>}/>
        <Route path='Contacts' element={<Contacts/>}/>
        <Route path='Services' element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
