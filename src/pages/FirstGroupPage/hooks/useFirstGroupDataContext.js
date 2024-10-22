import { useContext } from "react"
import { FirstGroupDataContext } from "../context/FirstGroupDataContext"

export const useFirstGroupDataContext = () => {
  const context = useContext(FirstGroupDataContext)

  if (!context) {
    throw new Error("useFirstGroupDataContext must be used within a FirstGroupDataContextProvider")
  }

  return context
}
