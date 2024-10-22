import { LOCAL_STORAGE_KEYS } from "@/lib/constants"
import { redirect } from "react-router-dom"
import { FirstGroupPage } from "./FirstGroupPage"
import { FirstGroupStepsContextProvider } from "./context/FirstGroupStepsContext"
import { FirstGroupDataContextProvider } from "./context/FirstGroupDataContext"

export const firstGroupPageRoute = {
  loader: () => {
    const groups = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.GROUPS))

    if (groups) {
      return redirect("/app/dashboard")
    }

    return null
  },
  element: (
    <FirstGroupStepsContextProvider>
      <FirstGroupDataContextProvider>
        <FirstGroupPage />,
      </FirstGroupDataContextProvider>
    </FirstGroupStepsContextProvider>
  ),
}
