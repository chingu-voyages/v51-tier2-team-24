import { useFirstGroupPageContext } from "../hooks/useFirstGroupPageContext"
import { StepsContentCommonTypes } from "./types"
import { StepActions } from "../FirstGroupPage"
import { BodyText } from "@/components/Typography"
import { GroupDetailsForm } from "@/components/forms/GroupDetailsForm"

export function AddGroupDetailsStep() {
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("group details form submit")
    // Do something
    stepper.next()
  }

  return (
    <>
      <BodyText variant="small" className="text-muted-foreground">
        {stepper.current.description}
      </BodyText>
      <GroupDetailsForm
        onSubmit={handleSubmit}
        actions={<StepActions className="md:col-span-full" isWithinForm />}
      />
    </>
  )
}

AddGroupDetailsStep.propTypes = StepsContentCommonTypes
