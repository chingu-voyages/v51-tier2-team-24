import { useFirstGroupPageContext } from "../hooks/useFirstGroupPageContext"
import { StepsContentCommonTypes } from "./types"
import { StepActions } from "../FirstGroupPage"
import { BodyText } from "@/components/Typography"
import { ExpenseForm } from "@/components/forms/ExpenseForm"

export function AddExpensesStep() {
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("expense form submit")
    // Do something
    stepper.next()
  }

  return (
    <>
      <BodyText variant="small" className="text-muted-foreground">
        {stepper.current.description}
      </BodyText>
      <ExpenseForm
        onSubmit={handleSubmit}
        actions={<StepActions className="md:col-span-full" isWithinForm />}
      />
    </>
  )
}

AddExpensesStep.propTypes = StepsContentCommonTypes
