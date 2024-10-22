import { BodyText, Heading } from "@/components/Typography"
import { useFirstGroupStepsContext } from "../hooks/useFirstGroupStepsContext"
import { StepActions } from "../FirstGroupPage"
import { ExpensesList } from "@/components/ExpensesList"
import { GroupInfoWidget } from "@/components/GroupInfoWidget"
import { SelectedParticipantsList } from "@/components/SelectedParticipantsList"
import { useFirstGroupDataContext } from "../hooks/useFirstGroupDataContext"

export function LastStep() {
  const { useStepper } = useFirstGroupStepsContext()
  const stepper = useStepper()
  const { groupDetails, participants, expenses } = useFirstGroupDataContext()

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

      {groupDetails && (
        <GroupInfoWidget
          groupInfo={{
            name: groupDetails.name,
            description: groupDetails.description,
            totalBudget: groupDetails.totalBudget,
            category: groupDetails.category,
          }}
        />
      )}

      <section>
        <Heading tag="h3">Participants</Heading>
        <SelectedParticipantsList participants={participants} />
      </section>

      {expenses.length > 0 && (
        <section>
          <Heading tag="h3">Expenses</Heading>
          <ExpensesList expenses={expenses} />
        </section>
      )}

      <StepActions />
    </div>
  )
}
