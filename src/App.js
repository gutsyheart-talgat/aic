import './App.css';
import { Route,Routes } from 'react-router-dom';
import About from './components/About/about'
import Kyrgyzstan from './components/Kyrgyzstan/kyrgyzstan';
import Contacts from './components/Contacts/contacts'
import Services from './components/Services/service'
import Layout from './components/Layout/layout';
import Service1 from './components/Service1/service1'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<About/>}>
          
        </Route>

        <Route path='Kyrgyzstan' element={<Kyrgyzstan/>}/>
        <Route path='Contacts' element={<Contacts/>}/>
        <Route path='Services/*' element={<Services/>}/>
        <Route path='Service-1' element={<Service1/>}/>
        <Route path='Service-2' element={<Service1/>}/>
        <Route path='Service-3' element={<Service1/>}/>
        <Route path='Service-4' element={<Service1/>}/>
      </Route>
    </Routes>
  );
}

export default App;
