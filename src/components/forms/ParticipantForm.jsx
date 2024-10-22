/* eslint-disable react/prop-types */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import PropTypes from "prop-types"
import { cn } from "@/lib/utils"
import { SelectedParticipantsList } from "../SelectedParticipantsList"
import { useState } from "react"

const DEFAULT_FORM_VALUES = {
  firstName: "",
  lastName: "",
}

// TODO rename to AddParticipantForm
export function ParticipantForm({
  participants,
  onAddParticipant,
  onDeleteParticipant,
  onSubmit,
  actions,
  showParticipantsPreview = true,
  className,
}) {
  const [formData, setFormData] = useState(DEFAULT_FORM_VALUES)
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form className={cn("flex flex-col gap-4", className)} onSubmit={onSubmit}>
      <Label>
        <span className="sr-only">Participant first name</span>
        <Input
          onChange={handleInputChange}
          value={formData.firstName}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
      </Label>
      <Label>
        <span className="sr-only">Participant last name</span>
        <Input
          onChange={handleInputChange}
          value={formData.lastName}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
      </Label>
      {/* TODO add a select to choose participants from friends list in the parts of the app other than first steps */}
      {showParticipantsPreview && (
        <>
          <Button
            onClick={() => {
              onAddParticipant(formData)
              setFormData(DEFAULT_FORM_VALUES)
            }}
            className="gap-2"
            type="button"
            variant="secondary"
          >
            Add<span className="md:hidden">&nbsp;participant</span>
            <Plus className="hidden md:block size-4" />
          </Button>
          <div className="md:col-span-full">
            <SelectedParticipantsList participants={participants} onDelete={onDeleteParticipant} />
          </div>
        </>
      )}
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

ParticipantForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  actions: PropTypes.node,
  className: PropTypes.string,
  showParticipantsPreview: PropTypes.bool,
}
