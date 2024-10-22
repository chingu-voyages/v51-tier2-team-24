import { useFirstGroupStepsContext } from "../hooks/useFirstGroupStepsContext"
import { StepsContentCommonTypes } from "./types"
import { StepActions } from "../FirstGroupPage"
import { BodyText } from "@/components/Typography"
import { ParticipantForm } from "@/components/forms/ParticipantForm"
import { useFirstGroupDataContext } from "../hooks/useFirstGroupDataContext"
import { v4 as uuidv4 } from "uuid"

export function AddParticipantsStep() {
  const { useStepper } = useFirstGroupStepsContext()
  const stepper = useStepper()

  const { participants, handleAddParticipant, handleAddFriend, handleDeleteParticipant } =
    useFirstGroupDataContext()

  const onAddParticipant = (formData) => {
    // TODO show a toast message
    if (!formData.firstName || !formData.lastName) return
    const friend = { ...formData, id: uuidv4(), avatarUrl: null, role: "friend" }
    const participantData = { ...friend, balance: 0 }
    handleAddParticipant(participantData)
    handleAddFriend(friend)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    stepper.next()
  }

  return (
    <>
      <BodyText variant="small" className="text-muted-foreground">
        {stepper.current.description}
      </BodyText>
      <ParticipantForm
        participants={participants}
        onAddParticipant={onAddParticipant}
        onDeleteParticipant={handleDeleteParticipant}
        onSubmit={handleSubmit}
        actions={<StepActions className="md:col-span-full" isWithinForm />}
        className="md:grid grid-cols-[repeat(3,1fr)_auto]"
      />
    </>
  )
}

AddParticipantsStep.propTypes = StepsContentCommonTypes
