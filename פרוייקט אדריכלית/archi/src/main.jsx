import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import './index.css'


import { Services } from './componenta/meeting/services.jsx'
import { Service } from './componenta/meeting/serivce.jsx';
import { SighnIn } from './componenta/login/usersighin.jsx';
import { UpdateUser } from './componenta/actionsonuser/UpdateUser'
import { Business } from './componenta/business/Business'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {MeetingForm} from "./componenta/meeting/meetingInfo.jsx"
// import {SighnIn} from './componenta/login/usersighin.jsx'
import {Nav} from "./componenta/nav.component"
import { Admin } from './admin/admin.jsx'
import {Connect} from './admin/connectAdmin.jsx'
import { SignUp } from './componenta/login/sighnup'
import {ManagerContext} from './context/managerContext'
import { UserPage } from './context/Userpage'
import { UserContext} from './context/usercontext'



const user =[""]
const manager= [false]
const router = createBrowserRouter([
  {
    path: "",
    Component: Nav,
    children: [{
      path: "/",
    Component: App,

    },
      {
      path: 'serivces',
      Component: Services,
      children: [{
        // חלק שמשתנה. כל פעם יהיה מזהה אחר
        path: ':service',
        Component: Service,
      }]
    }, {
      path: 'services/:service',
      Component: Service,
    }, 
    {
      path: 'meetingInfo',
      Component: MeetingForm,
    },
{
  path: 'userpage',
  Component: UserPage,
}
   ,
     {
      path: 'sighnUp',
      Component: SignUp
    }, {
      path: 'updateUser',
      Component: UpdateUser
    }, {
      path: 'create',
      Component: Business
    },
    ],

  
    errorElement: <p> oops :( not exists... </p>,
  },
  {
    path: 'connectAdmin',
    Component: Connect,
  },  
  {
    path: 'admin',
    Component: Admin,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 < ManagerContext.Provider value= {manager}>
 < UserContext.Provider value= {user}>
    <RouterProvider router={router} />
    </UserContext.Provider>
    </ManagerContext.Provider>
  </React.StrictMode>
)
