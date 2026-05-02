import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Input from "./Components/Auth/Input";
import ForgetPage from "./Pages/ForgetPage";
import OtpPage from "./Pages/OtpPage";

const App = () => {
  const Route = createBrowserRouter([
    {
      path:'/',
      element:<Input/>
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
     {
      path: "/forgot-password",
      element: <ForgetPage />,
    },
    {
      path:'/Otp-Verification',
      element:<OtpPage/>
    }
  ]);

  return <RouterProvider router={Route} />;
};

export default App;
