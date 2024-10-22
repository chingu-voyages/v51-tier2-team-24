import { LOCAL_STORAGE_KEYS } from "@/lib/constants"
import WelcomePage from "./WelcomePage"
import { redirect } from "react-router-dom"

export const welcomePageRoute = {
  loader: () => {
    const admin = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.ADMIN))
    const groups = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.GROUPS))

    if (admin && !groups) {
      return redirect("/app/first-group")
    }

    if (groups) {
      return redirect("/app/dashboard")
    }

    return null
  },
  element: <WelcomePage />,
}
