import { createContext } from "react"
import { defineStepper } from "@stepperize/react"
import PropTypes from "prop-types"
import { FIRST_GROUP_STEPS } from "@/lib/constants"

export const FirstGroupPageContext = createContext()

export const FirstGroupPageContextProvider = ({ children }) => {
  const { useStepper, Scoped, steps } = defineStepper(...FIRST_GROUP_STEPS)

  const values = { useStepper, Scoped, steps }

  return <FirstGroupPageContext.Provider value={values}>{children}</FirstGroupPageContext.Provider>
}

FirstGroupPageContextProvider.propTypes = { children: PropTypes.node.isRequired }
