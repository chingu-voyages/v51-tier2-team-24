import { useFirstGroupStepsContext } from "../hooks/useFirstGroupStepsContext"
import { StepsContentCommonTypes } from "./types"
import { StepActions } from "../FirstGroupPage"
import { BodyText } from "@/components/Typography"
import { ExpenseForm } from "@/components/forms/ExpenseForm"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import { useFirstGroupDataContext } from "../hooks/useFirstGroupDataContext"

export function AddExpenseStep() {
  const { useStepper } = useFirstGroupStepsContext()
  const { participants, handleAddExpense } = useFirstGroupDataContext()
  const stepper = useStepper()
  const [date, setDate] = useState(new Date())
  // eslint-disable-next-line no-unused-vars
  const [receiptUrl, setReceiptUrl] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const expenseDetailsData = {
      id: uuidv4(),
      name: e.target.expenseName.value,
      description: e.target.expenseDescription.value,
      amount: Number(e.target.expenseAmount.value),
      category: e.target.expenseCategory.value,
      date: date,
      purchaser: e.target.expensePurchaser.value,
      contributionWeight: Number(e.target.contribution.value),
      receiptUrl: receiptUrl,
    }

    handleAddExpense(expenseDetailsData)
    stepper.next()
  }

  return (
    <>
      <BodyText variant="small" className="text-muted-foreground">
        {stepper.current.description}
      </BodyText>
      <ExpenseForm
        onSubmit={handleSubmit}
        participants={participants}
        date={date}
        setDate={setDate}
        actions={<StepActions className="md:col-span-full" isWithinForm />}
      />
    </>
  )
}

AddExpenseStep.propTypes = StepsContentCommonTypes
