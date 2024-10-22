import { useFirstGroupStepsContext } from "../hooks/useFirstGroupStepsContext"
import { StepsContentCommonTypes } from "./types"
import { StepActions } from "../FirstGroupPage"
import { BodyText } from "@/components/Typography"
import { GroupDetailsForm } from "@/components/forms/GroupDetailsForm"
import { useFirstGroupDataContext } from "../hooks/useFirstGroupDataContext"

export function AddGroupDetailsStep() {
  const { useStepper } = useFirstGroupStepsContext()
  const { handleGroupDetailsStep } = useFirstGroupDataContext()
  const stepper = useStepper()

  const handleSubmit = (e) => {
    e.preventDefault()

    const groupDetailsData = {
      name: e.target.groupName.value,
      description: e.target.groupDescription.value,
      totalBudget: Number(e.target.groupAllottedBudget.value),
      category: e.target.groupCategory.value,
    }

    handleGroupDetailsStep(groupDetailsData)

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
