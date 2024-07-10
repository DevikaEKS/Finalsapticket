import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login';
import { Clientdashboard, Clientstatus, Clientstatuscheck } from './Component/Login/Dashboard';
import { Studentprofile } from './Component/Login/Dashboard';
import { Admindashboard } from './Component/Admindashboard/Admindashboard';
import { Amdashboard, AmdTicketCount, AmdTicketShow} from './Component/Amdashboard/Amdashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TicketSummary from './Component/Summary/Summary';
import AdminSidebar from './Component/Adminsidebar/Adminsidebar';
import ClientRegister from './Component/Clientregistration/Clientregistration';
import Services from './Component/Clientregistration/Service';
import Sidebarnew from './Component/Sidebar/Sidebarnew';
import Showtickets from './Component/Showtickets/Showtickets';

function App() {
  return (
    <div>
      {/* <Login/>
    <Clientdashboard/>
   <ClientRegister/> 
    <Services/> 
 <Clientdashboard/> 
 <Admindashboard/>
 <Amdashboard/>  */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<Admindashboard />} />
         
          <Route path="/adminsidebar" element={<AdminSidebar />} />

          <Route path='/manager/:id' element={<Amdashboard />} />
          <Route path='/manager/tickets/:id' Component={AmdTicketCount} />
          <Route path='/manager/showtickets/:id' Component={AmdTicketShow} />

          <Route path='/client/:id/:com/:cshort' element={<Clientdashboard />} />
          {/* <Route path='/ticketsummary/:id' Component={ClientTicketSummary} /> */}
          <Route path='/ticketview' element={[<Showtickets/>]} />
          <Route path='/clientreg' element={[<ClientRegister/>]}/>
          <Route path="/clientservices" element={[<Services/>]}/>
         
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
