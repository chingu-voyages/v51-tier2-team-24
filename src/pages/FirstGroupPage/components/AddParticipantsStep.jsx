import { useFirstGroupPageContext } from "../hooks/useFirstGroupPageContext"
import { StepsContentCommonTypes } from "./types"
import { StepActions } from "../FirstGroupPage"
import { BodyText } from "@/components/Typography"
import { ParticipantForm } from "@/components/forms/ParticipantForm"

export function AddParticipantsStep() {
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("participant form submit")
    // Do something
    stepper.next()
  }

  return (
    <>
      <BodyText variant="small" className="text-muted-foreground">
        {stepper.current.description}
      </BodyText>
      <ParticipantForm
        onSubmit={handleSubmit}
        actions={<StepActions className="md:col-span-full" isWithinForm />}
      />
    </>
  )
}

AddParticipantsStep.propTypes = StepsContentCommonTypes
