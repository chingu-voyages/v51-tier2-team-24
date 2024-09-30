import { Label } from "@/components/ui/label"
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
import PropTypes from "prop-types"
import { Button } from "../ui/button"
import { EXPENSE_CATEGORIES_MOCK, PARTICIPANTS_MOCK_DATA } from "@/lib/mock-data"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, Percent } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "../ui/calendar"
import { CONTRIBUTION_WEIGHTS } from "@/lib/constants"

// TODO add default values prop (needed in case of edit
export function ExpenseForm({ onSubmit, actions }) {
  const [date, setDate] = useState()

  return (
    <form className="flex flex-col gap-4 md:grid md:grid-cols-2" onSubmit={onSubmit}>
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
        <span className="sr-only">Select Purchaser</span>
        <Select name="expensePurchaser">
          <SelectTrigger>
            <SelectValue placeholder="Purchaser" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {PARTICIPANTS_MOCK_DATA.map((participant) => (
                <SelectItem
                  key={participant.id}
                  value={participant.firstName + " " + participant.lastName}
                >
                  {participant.firstName + " " + participant.lastName}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Label>
      <Label>
        <span className="sr-only">Select the contribution weight</span>
        <Select name="contribution">
          <SelectTrigger>
            <div className="flex items-center gap-4">
              <Percent className="size-4" />
              <SelectValue placeholder="Contribution Weight" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {CONTRIBUTION_WEIGHTS.map((weight) => (
                <SelectItem key={weight} value={weight}>
                  {`${weight}%`}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Label>
      <Popover className="date-picker">
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn("justify-start md:self-end", !date && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Purchase date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
      <Label>
        <span className="inline-block mb-2">Receipt proof (can be uploaded later)</span>
        <Input name="expenseReceipt" type="file" />
      </Label>
      {actions ? actions : <Button type="submit">Submit</Button>}
    </form>
  )
}

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  actions: PropTypes.node,
  // defaultValues: PropsTypes.
}
