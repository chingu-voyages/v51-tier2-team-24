import { useFirstGroupPageContext } from "../hooks/useFirstGroupPageContext"
import { StepsContentCommonTypes } from "./types"
import { StepActions } from "../FirstGroupPage"
import { BodyText } from "@/components/Typography"
import { ExpenseForm } from "@/components/forms/ExpenseForm"
import { useLocalStorage } from "@uidotdev/usehooks"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

export function AddExpensesStep() {
  const { useStepper } = useFirstGroupPageContext()
  const [expensesData, setExpensesData] = useLocalStorage("expensesData", null);
  const stepper = useStepper()
  const [date, setDate] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("expense form submit")
  
      const expenseDetailsData = {
        id: uuidv4(),
        name: e.target.expenseName.value,
        description: e.target.expenseDescription.value,
        amount: Number(e.target.expenseAmount.value),
        category: e.target.expenseCategory.value,
        date: date,
        purchaser: e.target.expensePurchaser.value,
        contributionWeight: Number(e.target.contribution.value),
        // receiptUrl: ""
      };
  
      const updatedExpensesData = expensesData ? [...expensesData, expenseDetailsData] : [expenseDetailsData];
      setExpensesData(updatedExpensesData);
      
      const currentGroupId = JSON.parse(localStorage.getItem("currentGroup"))
      const groupsData = JSON.parse(localStorage.getItem("groupsData"))

      for(let i=0; i<groupsData.length; i++){
        if(currentGroupId == groupsData[i].id){
          const updatedExpenseIds = groupsData[i].expenseIds ? [...groupsData[i].expenseIds, expenseDetailsData.id] : [expenseDetailsData.id]
          groupsData[i].expenseIds = updatedExpenseIds;
        }
      }
      localStorage.setItem("groupsData", JSON.stringify(groupsData))
      stepper.next();
  }

  return (
    <>
      <BodyText variant="small" className="text-muted-foreground">
        {stepper.current.description}
      </BodyText>
      <ExpenseForm
        onSubmit={handleSubmit}
        date={date}
        setDate={setDate}
        actions={<StepActions className="md:col-span-full" isWithinForm />}
      />
    </>
  )
}

AddExpensesStep.propTypes = StepsContentCommonTypes
