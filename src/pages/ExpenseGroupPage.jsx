import { GroupInfoWidget } from "@/components/GroupInfoWidget"
import { useParams } from "react-router-dom"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ChevronDown, Plus, Minus } from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BodyText } from "@/components/Typography"
import GridCard from "@/components/GridCard"
import { PageGrid } from "@/components/PageGrid"
import { CardAction } from "@/components/CardAction"
import PropTypes from "prop-types"
import { PARTICIPANTS_MOCK_DATA, ParticipantType } from "@/lib/mock-data"

export function ExpenseGroupPage() {
  // TODO remove the bottom disablers after the getting data functionality is done
  // eslint-disable-next-line no-unused-vars
  const { groupId } = useParams()
  // eslint-disable-next-line no-unused-vars
  const [groupInfo, setGroupInfo] = useState({
    groupName: "Bali Trip",
    description: "Lorem ipsum dolor sit amet consectetur.",
    amount: 5000,
  })

  // get expense group data by groupId

  const editAction = () => {
    // to redirect to the app/groups/:groupId/edit page or to show a modal
    console.log("Edit")
  }
  const deleteAction = () => {
    // after deleting the user to be redirected to the dashbord page
    console.log("Delete")
  }
  const exportAction = () => {
    // export group data as a PDF or JSON
    console.log("Export")
  }

  return (
    <>
      <h1 className="sr-only">{groupInfo.groupName} Management</h1>

      <GroupInfoWidget
        className="mb-10 md:mb-12 relative"
        groupInfo={groupInfo}
        actions={
          <Popover>
            <PopoverTrigger asChild>
              <CardAction isResponsive>Actions</CardAction>
            </PopoverTrigger>
            <PopoverContent className="w-auto flex flex-col gap-2" align="end">
              <CardAction onClick={editAction} className="border-current">
                Edit
              </CardAction>
              <CardAction
                onClick={deleteAction}
                className="border-red-600 text-red-600 hover:bg-red-100"
              >
                Delete
              </CardAction>
              <CardAction
                onClick={exportAction}
                className="border-green-600 text-green-600 hover:bg-green-100"
              >
                Export
              </CardAction>
            </PopoverContent>
          </Popover>
        }
      />

      <Tabs defaultValue="participants" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="balances">
            Balances
          </TabsTrigger>
          <TabsTrigger className="w-full" value="statistics">
            Statistics
          </TabsTrigger>
          <TabsTrigger className="w-full" value="participants">
            Participants
          </TabsTrigger>
          <TabsTrigger className="w-full" value="receipts">
            Receipts
          </TabsTrigger>
        </TabsList>
        <TabsContent value="balances">
          <Balances />
        </TabsContent>
        <TabsContent value="statistics">Statistics content</TabsContent>
        <TabsContent value="participants">
          <Participants />
        </TabsContent>
        <TabsContent value="receipts">Receipts content </TabsContent>
      </Tabs>
    </>
  )
}

// TABS CONTENT

const Balances = () => {
  // Automatically calculate and display who owes what to whom within the group and taking into account the weighted contributions of a participant or the weighted contribution of a participant to an individual expense. It will depend on the data structure.
  return (
    <PageGrid tag="ul">
      {PARTICIPANTS_MOCK_DATA.map((particpant, index) => (
        <li className="w-full" key={index}>
          <BalanceCard participant={particpant} />
        </li>
      ))}
    </PageGrid>
  )
}

const BalanceCard = ({ participant, className }) => {
  return (
    <Card className={cn("p-4 flex gap-4 justify-between h-full", className)}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <BodyText tag="span" className="font-semibold leading-none mb-0 leading-0 shrink-0">
            {participant.firstName}
          </BodyText>
          <div className="flex gap-2">
            <BalanceBadge amount={participant.balance} />
          </div>
        </div>
        {participant.balance !== 0 && (
          <Popover className="group">
            <PopoverTrigger className="text-sm lg:text-base flex gap-2 items-center group">
              In 4 payments
              <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </PopoverTrigger>
            <PopoverContent className="max-w-56" align="start">
              <ul className="text-sm lg:text-base">
                <li className="flex items-center gap-2 leading-o text-red-600">
                  <Minus className="size-4" /> {formatCurrency(Math.abs(300))} to Parker
                </li>
                <li className="flex items-center gap-2 leading-o text-green-600">
                  <Plus className="size-4" />
                  {formatCurrency(Math.abs(403))} from Rosendo
                </li>
                <li className="flex items-center gap-2 leading-o text-green-600">
                  <Plus className="size-4" /> {formatCurrency(Math.abs(1000))} from Emily
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <Avatar className="size-12 shrink-0">
        <AvatarImage src="#" />
        <AvatarFallback className="bg-slate-300 text-foreground dark:text-secondary">
          {`${participant.firstName[0]}${participant.lastName[0]}`}
        </AvatarFallback>
      </Avatar>
    </Card>
  )
}

BalanceCard.propTypes = {
  participant: ParticipantType,
  className: PropTypes.string,
}

const BalanceBadge = ({ amount }) => {
  const isBalancePositive = amount > 0
  const isBalanceNegative = amount < 0
  const isBalanceZero = amount === 0

  return (
    <Badge
      className={cn(
        "px-1",
        isBalancePositive && "text-green-600 border-green-600 bg-green-50",
        isBalanceNegative && "text-red-600 border-red-600 bg-red-50",
        isBalanceZero && "border-current"
      )}
      variant="outline"
    >
      <span className={cn("hidden sm:block", { block: isBalanceZero })}>
        {isBalancePositive && "Gets"}
        {isBalanceNegative && "Owes"}
        {isBalanceZero && "Balance"}
      </span>
      &nbsp;
      {isBalanceZero ? amount : formatCurrency(Math.abs(amount))}
    </Badge>
  )
}

BalanceBadge.propTypes = {
  amount: PropTypes.number.isRequired,
}

const Participants = () => {
  return (
    <div className="pt-4 flex flex-col">
      <Button className="mb-6 self-end">Add Participant</Button>
      <PageGrid tag="ul">
        {PARTICIPANTS_MOCK_DATA.map((participant) => (
          <li key={participant.id}>
            <GridCard
              name={{ firstName: participant.firstName, lastName: participant.lastName }}
              avatarUrl={participant.avatarUrl}
              actions={
                <>
                  <CardAction onClick={() => console.log("add expense")} className="border-current">
                    Add Expense
                  </CardAction>
                  <CardAction
                    onClick={() => console.log("remove from group")}
                    className="border-red-600 text-red-600 hover:bg-red-100"
                  >
                    Remove <span className="sr-only">from group</span>
                  </CardAction>
                </>
              }
              content={
                <>
                  <BodyText
                    tag="dl"
                    className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 [&>dt]:font-medium mb-2"
                  >
                    <dt>Spent</dt>
                    <dd>{formatCurrency(3000)}</dd>
                    <dt>Contribution Weight</dt>
                    <dd>10%</dd>
                  </BodyText>
                  <Popover className="group">
                    <PopoverTrigger className="flex gap-2 items-center group">
                      <BodyText className="m-0">Balance data</BodyText>
                      <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </PopoverTrigger>
                    <PopoverContent className="max-w-44" align="start">
                      <BodyText
                        tag="dl"
                        className="grid items-center grid-cols-[auto_1fr] gap-2 [&>dt]:font-medium m-0"
                      >
                        <dt>Balance</dt>
                        <dd>{formatCurrency(400)}</dd>
                        <dd className="text-green-600 justify-self-end">
                          <span className="sr-only">Gets</span>
                          <Plus className="size-4" />
                        </dd>
                        <dd className="text-green-600">{formatCurrency(500)}</dd>
                        <dt className="text-red-600 justify-self-end">
                          <span className="sr-only">Owes</span>
                          <Minus className="size-4" />
                        </dt>
                        <dd className="text-red-600">{formatCurrency(100)}</dd>
                      </BodyText>
                    </PopoverContent>
                  </Popover>
                </>
              }
            />
          </li>
        ))}
      </PageGrid>
    </div>
  )
}
