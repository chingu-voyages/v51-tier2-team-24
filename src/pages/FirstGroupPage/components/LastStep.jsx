import { BodyText, Heading } from "@/components/Typography"
import { useFirstGroupPageContext } from "../hooks/useFirstGroupPageContext"
import { StepActions } from "../FirstGroupPage"
import { StepsContentCommonTypes } from "./types"
import { EXPENSES_MOCK_DATA, PARTICIPANTS_MOCK_DATA } from "@/lib/mock-data"
import { ExpensesList } from "@/components/ExpensesList"
import { GroupInfoWidget } from "@/components/GroupInfoWidget"
import { SelectedParticipantsList } from "@/components/SelectedParticipantsList"

export function LastStep({ includeActions = false }) {
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()

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

      <GroupInfoWidget
        groupInfo={{
          groupName: "Bali Trip",
          description: "Lorem ipsum dolor sit amet consectetur.",
          amount: 5000,
        }}
      />

      <section>
        <Heading tag="h3">Participants</Heading>
        <SelectedParticipantsList participants={PARTICIPANTS_MOCK_DATA} />
      </section>

      {EXPENSES_MOCK_DATA ? (
        <section>
          <Heading tag="h3">Expenses</Heading>
          <ExpensesList expenses={EXPENSES_MOCK_DATA} />
        </section>
      ) : null}

      {includeActions && <StepActions />}
    </div>
  )
}

LastStep.propTypes = StepsContentCommonTypes
