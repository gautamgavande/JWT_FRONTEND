import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './componentes/Login';
import Hr from './componentes/Hrrr';
import Registration from './componentes/Registration';
import Student from './componentes/Student';
import Teacher from './componentes/Teacher';
import Dashbord from './componentes/Dashbord';


function App() {
  return (
   <>
   
        <Routes>
           <Route path='/' element={<Login></Login>} />
           <Route path='/registration' element={<Registration></Registration>} />
           <Route path='/hr' element={<Hr></Hr>} />
           <Route path='/student' element={<Student></Student>} />
           <Route path='/teacher' element={<Teacher></Teacher>} />
           <Route path='/admin' element={<Dashbord></Dashbord>} />
        </Routes>
     

   </>
  );
}

export default App;
