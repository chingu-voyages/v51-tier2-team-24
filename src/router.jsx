import { createBrowserRouter, Navigate } from "react-router-dom"
import AppLayout from "./pages/layouts/AppLayout"
import { ExpenseGroupPage } from "./pages/ExpenseGroupPage"
import { ExpenseGroupEditPage } from "./pages/ExpenseGroupEditPage"
import { ExpenseGroupsPage } from "./pages/ExpenseGroupsPage"
import { FriendsPage } from "./pages/FriendsPage"
import { ExpenseGroupsNewPage } from "./pages/ExpenseGroupsNewPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import RootErrorPage from "./pages/RootErrorPage"
import Dashboard from "./pages/Dashboard"
import { welcomePageRoute } from "./pages/WelcomePage"
import { firstGroupPageRoute } from "./pages/FirstGroupPage"

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RootErrorPage />,
    children: [
      { index: true, ...welcomePageRoute },
      {
        element: <AppLayout />,
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
                element: <Dashboard />,
              },
              {
                path: "groups",
                children: [
                  {
                    index: true,
                    element: <ExpenseGroupsPage />,
                  },
                  {
                    path: "new",
                    element: <ExpenseGroupsNewPage />,
                  },
                  {
                    path: ":groupId",
                    children: [
                      { index: true, element: <ExpenseGroupPage /> },
                      { path: "edit", element: <ExpenseGroupEditPage /> },
                    ],
                  },
                ],
              },
              {
                path: "friends",
                element: <FriendsPage />,
              },
              {
                path: "first-group",
                ...firstGroupPageRoute,
              },
            ],
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
])
