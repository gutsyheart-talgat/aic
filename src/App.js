import './App.css';
import { Route,Routes } from 'react-router-dom';
import About from './components/About/about'
import Kyrgyzstan from './components/Kyrgyzstan/kyrgyzstan';
import Contacts from './components/Contacts/contacts'
import Services from './components/Services/service'
import Layout from './components/Layout/layout';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<About/>}/>
        <Route path='Kyrgyzstan' element={<Kyrgyzstan/>}/>
        <Route path='Contacts' element={<Contacts/>}/>
        <Route path='Services' element={<Services/>}/>
      </Route>
    </Routes>
  );
}

export default App;
