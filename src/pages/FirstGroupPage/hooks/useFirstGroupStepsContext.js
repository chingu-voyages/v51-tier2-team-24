import { useContext } from "react"
import { FirstGroupStepsContext } from "../context/FirstGroupStepsContext"

export const useFirstGroupStepsContext = () => {
  const context = useContext(FirstGroupStepsContext)

  if (!context) {
    throw new Error(
      "useFirstGroupStepsContext must be used within a FirstGroupStepsContextProvider"
    )
  }

  return context
}
