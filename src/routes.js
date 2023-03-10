import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../src/layouts/AdminLayout';
import EmployeeLayout from '../src/layouts/EmployeeLayout';

import MainLayout from '../src/layouts/MainLayout';
// import LoginView from '../src/views/auth/LoginView';
import NotFoundView from '../src/views/errors/NotFoundView';
// import Test from '../src/views/test/test';
// import Reg from '../src/views/registration';
import Stepper from '../src/views/registration';


//document type
import DocumentType from '../src/views/admin/maintenances/documentType';
import CreateDocumentType from '../src/views/admin/maintenances/documentType/create';

//region assignment
import RegionAssignment from '../src/views/admin/maintenances/regionAssignment';
import CreateRegionAssignment from '../src/views/admin/maintenances/regionAssignment/create';

//Religion
import CreateReligion from '../src/views/admin/maintenances/religion/create';
import Religion from '../src/views/admin/maintenances/religion';

//exams
import Exam from '../src/views/admin/maintenances/exam';

import Signup from '../src/views/signup';

//ranks
import CreateRank from '../src/views/admin/maintenances/rank/create';
import Rank from '../src/views/admin/maintenances/rank';
import Login from '../src/views/auth/Login';


import AccountSettings from '../src/views/admin/AccountSettings';
import AccountEmployeeSettings from '../src/views/employee/AccountSettings';


import DashboardView from '../src/views/admin/DashboardView';


// import AccountSettings from '../src/views/employee';







import PrivateAdminRoute from "./middleware/PrivateAdminRoute";
import PrivateEmployeeRoute from "./middleware/PrivateEmployeeRoute";
import Profile from "../src/views/employee/Profile"
import Employee from "../src/views/admin/Employee"
import User from "../src/views/admin/maintenances/user"











const routes = [
  {
    path: 'admin',
    element:<AdminLayout />,
    children: [

      {
         path: 'dashboard', 
         element: <PrivateAdminRoute component= {DashboardView} />
      },
      {
        path: 'myprofile', 
        element: <PrivateAdminRoute component= {Profile} />
      },
      {
        path: 'employee', 
        element: <PrivateAdminRoute component= {Employee} />
      },
      {
        path: 'account/settings', 
        element: <PrivateAdminRoute component= {AccountSettings} />
      },
      {
        path: 'maintenance/createrank', 
        element: <PrivateAdminRoute component= {CreateRank} />
      },
      {
        path: 'maintenance/rank', 
        element: <PrivateAdminRoute component= {Rank} />
      },
      {
        path: 'maintenance/users', 
        element: <PrivateAdminRoute component= {User} />
      },
      {
        path: 'maintenance/createdocumenttype', 
        element: <PrivateAdminRoute component= {CreateDocumentType} />
      },
      {
        path: 'maintenance/documenttype', 
        element: <PrivateAdminRoute component= {DocumentType} />
      },
      {
        path: 'maintenance/createregionAssignment', 
        element: <PrivateAdminRoute component= {CreateRegionAssignment} />
      },
      {
        path: 'maintenance/regionAssignment', 
        element: <PrivateAdminRoute component= {RegionAssignment} />
      },
      {
        path: 'maintenance/createreligion', 
        element: <PrivateAdminRoute component= {CreateReligion} />
      },
      {
        path: 'maintenance/religion', 
        element: <PrivateAdminRoute component= {Religion} />
      },
      {
        path: 'maintenance/exams', 
        element: <PrivateAdminRoute component= {Exam} />
      },
      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/admin/404" /> }
    ]
  },
  {
    path: 'employee',
    element: <EmployeeLayout />,
    children: [
      // {
      //    path: 'dashboard', 
      //    element: <PrivateEmployeeRoute component= {Rank} />
      // },
      {
        path: 'dashboard', 
        element: <PrivateEmployeeRoute component= {Profile} />
      },
      {
        path: 'account/settings', 
        element: <PrivateEmployeeRoute component= {AccountEmployeeSettings} />
      },

      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/employee/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [

      { path: 'register', element: <Stepper /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: '404', element: <NotFoundView /> },
      { 
        path: "login", 
        // element: <PublicEmployeeRoute component={Login} /> 
        element: <Login />
      },
    ]
  }
];

export default routes;
