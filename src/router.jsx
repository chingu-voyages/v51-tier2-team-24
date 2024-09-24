import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import WelcomePage from "./pages/Welcome-Page"
import { FirstGroupPage } from "./pages/FirstGroupPage"

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Error Page</h1>,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        element: <Outlet />,
        children: [
          {
            path: "/app",
            children: [
              {
                index: true,
                element: <Navigate to="dashboard" replace />,
              },
              {
                path: "dashboard",
                element: <h1>Dashboard Page</h1>,
              },
              {
                path: "groups",
                children: [
                  {
                    index: true,
                    element: <h1>Groups List Page</h1>,
                  },
                  {
                    path: "new",
                    element: <h1>New Expense Group Page</h1>,
                  },
                  {
                    path: ":groupId",
                    children: [
                      {
                        index: true,
                        element: <h1>Dynamic Expense Group Page</h1>,
                      },
                      {
                        path: "edit",
                        element: <h1>Dynamic Page for Editing an Expense Group</h1>,
                      },
                    ],
                  },
                ],
              },
              {
                path: "friends",
                element: <h1>Friends List Page</h1>,
              },
              {
                path: "first-group",
                element: <FirstGroupPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  { path: "*", element: <h1>404 Page</h1> },
])
