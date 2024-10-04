import { useFirstGroupPageContext } from "../hooks/useFirstGroupPageContext"
import { StepsContentCommonTypes } from "./types"
import { StepActions } from "../FirstGroupPage"
import { BodyText } from "@/components/Typography"
import { ParticipantForm } from "@/components/forms/ParticipantForm"
import { useLocalStorage } from "@uidotdev/usehooks"
import {v4 as uuidv4} from 'uuid'
import { Avatar } from "@/components/ui/avatar"
import { useState } from "react"


export function AddParticipantsStep() {
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("participant form submit")
    
    


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
        className="md:grid grid-cols-[repeat(3,1fr)_auto]"
      />
    </>
  )
}

AddParticipantsStep.propTypes = StepsContentCommonTypes
