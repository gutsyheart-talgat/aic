import './App.css';
import { Route,Routes } from 'react-router-dom';
import About from './components/About/about'
import Kyrgyzstan from './components/Kyrgyzstan/kyrgyzstan';
import Contacts from './components/Contacts/contacts'
import Layout from './components/Layout/layout';
import Service1 from './components/Services/service1';
import Service2 from './components/Services/Service2';
import Service3 from './components/Services/service3';
import Service4 from './components/Services/service4';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<About/>}></Route>
        <Route path='Kyrgyzstan' element={<Kyrgyzstan/>}/>
        <Route path='Contacts' element={<Contacts/>}/>
        <Route path='Services/Service-1' element={<Service1/>}/>
        <Route path='Services/Service-2' element={<Service2/>}/>
        <Route path='Services/Service-3' element={<Service3/>}/>
        <Route path='Services/Service-4' element={<Service4/>}/>
      </Route>
    </Routes>
  );
}

export default App;
