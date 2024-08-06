import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import SignIn from "../Component/SignIn/SignIn";
import Ragister from "../Component/Ragister/Ragister";
import FriendRequest from "../Component/FriendRequest/FriendRequest";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {path:'/',
          element:<Home></Home> ,
        },
        {
          path:'/signIn',
          element:<SignIn></SignIn>
        },
        {
          path:'/register',
          element:<Ragister></Ragister>
        },
        {
          path:'/FriendRequest',
          element:<FriendRequest></FriendRequest>
        }
      ]
    },
  ]);