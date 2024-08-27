import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './UserForm';
import UserData from './UserData';
import Navbar from './Navbar';
import EditUser from './EditUser';
import GenrateCertificate from './GenrateCertificate';

const App = () => {
  return (
    <>

      <Router>

        <Navbar />

        <Routes>
          {/* wrapper */}


          {/* Multiple Route */}

          <Route path='/' element={<UserForm />} />
          <Route path='/userdata' element={<UserData />} />

          {/* fallback routing */}
          <Route path='*' element={<UserForm />} />


          {/* Edit User */}

          <Route path='/edituser/:id' element={<EditUser />} />
          <Route path='/genratecertificate/:id' element={<GenrateCertificate />} />


        </Routes>


      </Router>



    </>
  )
}

export default App
