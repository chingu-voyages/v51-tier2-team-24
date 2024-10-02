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
import { PARTICIPANTS_MOCK_DATA } from "@/lib/mock-data";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "@uidotdev/usehooks";

// TODO add default values prop (needed in case of edit
export function ParticipantForm({
  onSubmit,
  actions,
  showParticipantsPreview = true,
  className,
}) {

  const [participantsData, setParticipantsData] = useLocalStorage("participantsData", null);
  const [formData, setFormData] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    // weight: Number("")
  })


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  
  const currentGroupId = JSON.parse(localStorage.getItem("currentGroup"));
  const groupsData = JSON.parse(localStorage.getItem("groupsData"))
  const currentGroup = groupsData.filter((group) => {
    return currentGroupId === group.id;
  })


  const participantIds = currentGroup[0].participantIds;
  if(!participantIds.includes(formData.id)){
    participantIds.push(formData.id)
  }
  localStorage.setItem("groupsData", JSON.stringify(groupsData))




  return (
    <form className={cn("flex flex-col gap-4", className)} onSubmit={onSubmit}>
      <Label>
        <span className="sr-only">Participant first name</span>
        <Input onChange={handleInputChange} value={formData.firstName} name="firstName" type="text" placeholder="First Name" required />
      </Label>
      <Label>
        <span className="sr-only">Participant last name</span>
        <Input onChange={handleInputChange} value={formData.lastName} name="lastName" type="text" placeholder="Last Name" required />
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

      {showParticipantsPreview && (
        <>
          <Button className="gap-2" type="button" variant="secondary">
            Add<span className="md:hidden">&nbsp;participant</span>
            <Plus className="hidden md:block size-4" />
          </Button>
          <div className="md:col-span-full">
            <SelectedParticipantsList participants={PARTICIPANTS_MOCK_DATA} />
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
