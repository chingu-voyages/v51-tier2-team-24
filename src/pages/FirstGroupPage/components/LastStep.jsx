import { BodyText, Heading } from "@/components/Typography"
import { useFirstGroupPageContext } from "../hooks/useFirstGroupPageContext"
import { StepActions } from "../FirstGroupPage"
import { EXPENSES_MOCK_DATA, PARTICIPANTS_MOCK_DATA } from "@/lib/mock-data"
import { ExpensesList } from "@/components/ExpensesList"
import { GroupInfoWidget } from "@/components/GroupInfoWidget"
import { SelectedParticipantsList } from "@/components/SelectedParticipantsList"
import { useEffect, useState } from "react"

export function LastStep() {
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()

  const [group, setGroup] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [expenses, setExpenses] = useState([]);

  function getGroup() {
    const groupsData = JSON.parse(localStorage.getItem("groupsData"));
    const currentGroupId = JSON.parse(localStorage.getItem("currentGroup"));

    const currentGroup = groupsData.find((group) => group.id === currentGroupId);

    setGroup(currentGroup)
  }

  function getParticipants(){
    if(!group) return;

    const participantsData = JSON.parse(localStorage.getItem("participantsData")) || [];
    const participantIds = group.participantIds || [];
   
    const matchedParticipants = participantsData.filter((participant) => {
      return participantIds.includes(participant.id)
    })

    setParticipants(matchedParticipants);
  }

  function getExpenses(){
    
  }

  useEffect(() => {
    getGroup();

  }, [])

  useEffect(() => {
    if (group) {
      getParticipants();
    }
  }, [group]);

  return (
    <div className="space-y-10 md:space-y-12">
      <div>
        <Heading tag="h3" className="md:mb-4">
          {stepper.current.title}
        </Heading>
        <BodyText variant="small" className="text-muted-foreground mb-0">
          {stepper.current.description}
        </BodyText>
      </div>

      {group ? (
        <GroupInfoWidget
          groupInfo={{
            groupName: group.name,
            description: group.description,
            amount: group.totalBudget,
          }}
        />

      ) : (
        <p>Loading data....</p>
      )}


      <section>
        <Heading tag="h3">Participants</Heading>
        <SelectedParticipantsList participants={participants} />
      </section>

      {EXPENSES_MOCK_DATA ? (
        <section>
          <Heading tag="h3">Expenses</Heading>
          <ExpensesList expenses={EXPENSES_MOCK_DATA} />
        </section>
      ) : null}

      <StepActions />
    </div>
  )
}
