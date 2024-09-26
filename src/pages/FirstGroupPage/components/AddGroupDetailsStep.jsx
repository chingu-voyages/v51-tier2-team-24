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
import { EXPENSE_GROUP_CATEGORIES_MOCK } from "../mock-data"
import { StepActions } from "../FirstGroupPage"
import { BodyText } from "@/components/Typography"

export function AddGroupDetailsStep({ includeActions = false }) {
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
        <Label className="col-span-full">
          <span className="sr-only">Group name</span>
          <Input type="text" name="groupName" placeholder="Name" />
        </Label>
        <Label className="col-span-full">
          <span className="sr-only">Group description</span>
          <Textarea name="groupDescription" placeholder="Description" />
        </Label>
        <Label>
          <span className="sr-only">Allotted budget</span>
          <Input type="number" name="groupAllottedBudget" placeholder="Allotted Budget" />
        </Label>
        <Label>
          <span className="sr-only">Select an expense category</span>
          <Select name="groupCategory">
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {EXPENSE_GROUP_CATEGORIES_MOCK.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
        <Label className="hidden">
          <span className="inline-block mb-2">Group avatar</span>
          <Input name="groupAvatar" type="file" disabled />
        </Label>
        {includeActions && <StepActions className="col-span-full" isWithinForm />}
      </form>
    </>
  )
}

AddGroupDetailsStep.propTypes = StepsContentCommonTypes
