import { createBrowserRouter, Navigate } from "react-router-dom"
import AppLayout from "./pages/layouts/AppLayout"
import WelcomePage from "./pages/Welcome-Page"
import { ExpenseGroupPage } from "./pages/ExpenseGroupPage"
import { ExpenseGroupEditPage } from "./pages/ExpenseGroupEditPage"
import { ExpenseGroupsPage } from "./pages/ExpenseGroupsPage"
import { FriendsPage } from "./pages/FriendsPage"
import { ExpenseGroupsNewPage } from "./pages/ExpenseGroupsNewPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import RootErrorPage from "./pages/RootErrorPage"
import Dashboard from "./pages/Dashboard"
import { FirstGroupPage } from "./pages/FirstGroupPage/FirstGroupPage"
import { FirstGroupPageContextProvider } from "./pages/FirstGroupPage/context/FirstGroupPageContext"

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RootErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
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
                element: (
                  <FirstGroupPageContextProvider>
                    <FirstGroupPage />
                  </FirstGroupPageContextProvider>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
])
