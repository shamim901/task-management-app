import Login from '../pages/login'
import Register from '../pages/signup'

export const authRouter = [
  {
    path: "/auth/login",
    element: <Login />
  },
  {
    path: "/auth/signup",
    element: <Register />
  },
];