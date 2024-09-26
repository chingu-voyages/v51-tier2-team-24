import { useContext } from "react"
import { FirstGroupPageContext } from "../context/FirstGroupPageContext"

export const useFirstGroupPageContext = () => {
  const context = useContext(FirstGroupPageContext)

  if (!context) {
    throw new Error("useFirstGroupPageContext must be used within a FirstGroupPageContextProvider")
  }

  return context
}
