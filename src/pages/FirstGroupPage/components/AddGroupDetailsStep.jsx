import { useFirstGroupPageContext } from "../hooks/useFirstGroupPageContext"
import { StepsContentCommonTypes } from "./types"
import { StepActions } from "../FirstGroupPage"
import { BodyText } from "@/components/Typography"
import { GroupDetailsForm } from "@/components/forms/GroupDetailsForm"
import { useLocalStorage } from "@uidotdev/usehooks"
import {v4 as uuidv4} from 'uuid'

export function AddGroupDetailsStep({item}) {
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()
  const [groupsData, setGroupsData] = useLocalStorage("groupsData", null)
  const [currentGroupId, setCurrentGroupId] = useLocalStorage("currentGroup", null)

  // instructions for saving data in local storage here
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("group details form submit")

    const groupDetailsData = {
      id: uuidv4(),
      name: e.target.groupName.value,
      description: e.target.groupDescription.value,
      totalBudget: Number(e.target.groupAllottedBudget.value),
      totalSpent: Number(0),
      category: e.target.groupCategory.value,
      createdAt: new Date(),
      updatedAt: new Date(),
      participantIds: [],
      expenseIds: [],
      receiptIds: [],
    };

    const updatedGroupsData = groupsData ? [...groupsData, groupDetailsData] : [groupDetailsData];
    setGroupsData(updatedGroupsData);
    setCurrentGroupId(groupDetailsData.id);
    stepper.next();
    
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
