import { createBrowserRouter } from "react-router-dom";

import { authRouter } from '../modules/auth-service/routes';

import Login from '../modules/auth-service/pages/login'

const staticRoute = [
  {
    path: "/",
    element: <Login />
  }
]

const routes = [
  ...staticRoute,
  ...authRouter
]

export const router = createBrowserRouter(routes);
