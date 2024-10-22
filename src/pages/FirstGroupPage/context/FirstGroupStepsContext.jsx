import { createContext } from "react"
import { defineStepper } from "@stepperize/react"
import PropTypes from "prop-types"
import { FIRST_GROUP_STEPS } from "@/lib/constants"

export const FirstGroupStepsContext = createContext()

export const FirstGroupStepsContextProvider = ({ children }) => {
  const { useStepper, Scoped, steps } = defineStepper(...FIRST_GROUP_STEPS)

  const values = { useStepper, Scoped, steps }

  return (
    <FirstGroupStepsContext.Provider value={values}>{children}</FirstGroupStepsContext.Provider>
  )
}

FirstGroupStepsContextProvider.propTypes = { children: PropTypes.node.isRequired }
