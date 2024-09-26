import { Label } from "@/components/ui/label"
import { useFirstGroupPageContext } from "../hooks/useFirstGroupPageContext"
import { StepsContentCommonTypes } from "./types"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { StepActions } from "../FirstGroupPage"
import { Percent, Plus } from "lucide-react"
import { CONTRIBUTION_WEIGHTS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { BodyText } from "@/components/Typography"

export function AddParticipantsStep({ includeActions = false }) {
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
      <form
        className="flex flex-col gap-4 md:grid grid-cols-[repeat(3,1fr)_auto]"
        onSubmit={handleSubmit}
      >
        <Label>
          <span className="sr-only">Participant first name</span>
          <Input name="firstName" type="text" placeholder="First Name" />
        </Label>
        <Label>
          <span className="sr-only">Participant last name</span>
          <Input name="lastName" type="text" placeholder="Last Name" />
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

        <Button className="gap-2" type="button" variant="secondary">
          Add<span className="md:hidden">&nbsp;participant</span>
          <Plus className="hidden md:block size-4" />
        </Button>
        {includeActions && <StepActions className="md:col-span-full" isWithinForm />}
      </form>
    </>
  )
}

AddParticipantsStep.propTypes = StepsContentCommonTypes
