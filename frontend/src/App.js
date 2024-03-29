
import { Route,Routes } from 'react-router-dom';
import './App.css';
import MainDashboard from './components/MainDashboard';
import { useState } from 'react';
import Login from './components/Login';
import Annoucements from './Routes/Annoucements.pop.up.';
import Attendance from './Routes/Attendance';
import Result from './Routes/Result';
import Syllabus from './Routes/Syllabus';
import Teacher from './Routes/Teacher';
import Fee from './Routes/Fee';
import Student from './Routes/Student';
import Publish from './Routes/Publish';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className='w-screen h-screen relative overflow-hidden '>

     <Routes>

            <Route path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
           
            <Route path="dashboard" element={ 
              <PrivateRoute isLoggedIn={isLoggedIn}>
                  <MainDashboard></MainDashboard>
              </PrivateRoute>}>
            </Route>
            <Route path="/attendance" element={<Attendance></Attendance>}></Route>
            <Route path="/result" element={<Result></Result>}></Route>
            <Route path="/annoucements" element={<Annoucements></Annoucements>}></Route>
            <Route path="/syllabus" element={<Syllabus></Syllabus>}></Route>
            <Route path="/teacher" element={<Teacher></Teacher>}></Route>
            <Route path="/fee" element={<Fee></Fee>}></Route>
            <Route path="/student" element={<Student></Student>}></Route>
            <Route path="/publish" element={<Publish></Publish>}></Route>
     </Routes>
    
    </div>
  
      
   
  );
}

export default App;
