import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Percent, Plus } from "lucide-react";
import { CONTRIBUTION_WEIGHTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import { SelectedParticipantsList } from "../SelectedParticipantsList";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "@uidotdev/usehooks";

// TODO add default values prop (needed in case of edit
export function ParticipantForm({
  onSubmit,
  actions,
  showParticipantsPreview = true,
  className,
}) {
  const [participants, setParticipants] = useState([])
  

  const [formData, setFormData] = useState({
      id: uuidv4(),
      firstName: "",
      lastName: "",
      avatarUrl: "#",
      balance: Number(0),
      weight: Number(""),
    })

  const handleInputChange = (e) => {
      const {name, value} = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
    
    const handleClick = () => {
      const updatedParticipants = participants ? [...participants, formData] : [formData]
      setParticipants(updatedParticipants);
      setFormData({
        id: uuidv4(),
        firstName: "",
        lastName: "",
        avatarUrl:"#",
        balance: Number(0),
        weight: Number("")
      })


      localStorage.setItem("participantsData", JSON.stringify(updatedParticipants))
      const currentGroupId = JSON.parse(localStorage.getItem("currentGroup"));
      const groupsData = JSON.parse(localStorage.getItem("groupsData"))
      
      for(let i=0; i<groupsData.length; i++){
        if(currentGroupId == groupsData[i].id){
          const updatedParticipantIds = groupsData[i].participantIds ? [...groupsData[i].participantIds, formData.id] : [formData.id]
          groupsData[i].participantIds = updatedParticipantIds;
        }
      }
      localStorage.setItem("groupsData", JSON.stringify(groupsData));
    }

  return (
    <form className={cn("flex flex-col gap-4", className)} onSubmit={onSubmit}>
      <Label>
        <span className="sr-only">Participant first name</span>
        <Input onChange={handleInputChange} value={formData.firstName} name="firstName" type="text" placeholder="First Name"/>
      </Label>
      <Label>
        <span className="sr-only">Participant last name</span>
        <Input onChange={handleInputChange} value={formData.lastName} name="lastName" type="text" placeholder="Last Name" />
      </Label>
      <Label>
        <span className="sr-only">Select the contribution weight</span>
        <Select name="contribution" onChange={handleInputChange} value={Number(formData.weight)}>
          <SelectTrigger>
            <div className="flex items-center gap-4">
              <Percent className="size-4" />
              <SelectValue placeholder="Contribution Weight" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {CONTRIBUTION_WEIGHTS.map((weight) => (
                <SelectItem key={weight} value={weight.toString()}>
                  {`${weight}%`}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Label>

      {showParticipantsPreview && (
        <>
          <Button onClick={handleClick} className="gap-2" type="button" variant="secondary">
            Add<span className="md:hidden">&nbsp;participant</span>
            <Plus className="hidden md:block size-4" />
          </Button>
          <div className="md:col-span-full">
            <SelectedParticipantsList participants={participants} />
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
  );
}

ParticipantForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  actions: PropTypes.node,
  className: PropTypes.string,
  showParticipantsPreview: PropTypes.bool,
  // defaultValues: PropsTypes.
};
