import { Label } from "@/components/ui/label"
import { useFirstGroupPageContext } from "../hooks/useFirstGroupPageContext"
import { StepsContentCommonTypes } from "./types"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { StepActions } from "../FirstGroupPage"
import { EXPENSE_CATEGORIES_MOCK } from "@/lib/mock-data"
import { BodyText } from "@/components/Typography"

export function AddExpensesStep({ includeActions = false }) {
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something
    stepper.next()
  }

  return (
    <>
      <BodyText variant="small" className="text-muted-foreground">
        {stepper.current.description}
      </BodyText>
      <form className="flex flex-col gap-4 md:grid md:grid-cols-2" onSubmit={handleSubmit}>
        <Label className="md:col-span-full">
          <span className="sr-only">Expense name</span>
          <Input name="expenseName" type="text" placeholder="Name" />
        </Label>
        <Label className="col-span-full">
          <span className="sr-only">Expense description</span>
          <Textarea name="expenseDescription" placeholder="Description" />
        </Label>
        <Label>
          <span className="sr-only">Expense amount</span>
          <Input name="expenseAmount" type="number" placeholder="Amount" />
        </Label>
        <Label>
          <span className="sr-only">Expense category</span>
          <Select name="expenseCategory">
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {EXPENSE_CATEGORIES_MOCK.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
        <Label>
          <span className="inline-block mb-2">Receipt proof (can be uploaded later)</span>
          <Input name="expenseReceipt" type="file" />
        </Label>
        {includeActions && <StepActions className="md:col-span-full" isWithinForm />}
      </form>
    </>
  )
}

AddExpensesStep.propTypes = StepsContentCommonTypes
