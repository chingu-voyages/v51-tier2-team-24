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
import { EXPENSE_GROUP_CATEGORIES_MOCK } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

// TODO add default values prop (needed in case of edit action)
export function GroupDetailsForm({ onSubmit, actions, className }) {
  return (
    <form
      className={cn("flex flex-col gap-4 md:grid md:grid-cols-2", className)}
      onSubmit={onSubmit}
    >
      <Label className="col-span-full">
        <span className="sr-only">Group name</span>
        <Input type="text" name="groupName" placeholder="Name" />
      </Label>
      <Label className="col-span-full">
        <span className="sr-only">Group description</span>
        <Textarea type="text" name="groupDescription" placeholder="Description" />
      </Label>
      <Label>
        <span className="sr-only">Allotted budget</span>
        <Input type="number" name="groupAllottedBudget" placeholder="Allotted Budget" />
      </Label>
      <Label>
        <span className="sr-only">Select a group category</span>
        <Select name="groupCategory">
          <SelectTrigger>
            <SelectValue placeholder="Group Category" />
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
      {actions ? (
        actions
      ) : (
        <Button className="col-span-full" type="submit">
          Submit
        </Button>
      )}
    </form>
  )
}

GroupDetailsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  actions: PropTypes.node,
  className: PropTypes.string,
  // defaultValues: PropsTypes.
}
