/* eslint-disable react/prop-types */
import { GroupInfoWidget } from "@/components/GroupInfoWidget"
import { useParams } from "react-router-dom"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import PropTypes from "prop-types"
import { cn, formatCurrency } from "@/lib/utils"
import { forwardRef, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BodyText } from "@/components/Typography"

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
              <Action isResponsive>Actions</Action>
            </PopoverTrigger>
            <PopoverContent className="w-auto flex flex-col gap-2" align="end">
              <Action onClick={editAction} className="border-current">
                Edit
              </Action>
              <Action
                onClick={deleteAction}
                className="border-red-600 text-red-600 hover:bg-red-100"
              >
                Delete
              </Action>
              <Action
                onClick={exportAction}
                className="border-green-600 text-green-600 hover:bg-green-100"
              >
                Export
              </Action>
            </PopoverContent>
          </Popover>
        }
      />

      <Tabs defaultValue="balances" className="w-full">
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
        <TabsContent value="participants">Participants content</TabsContent>
        <TabsContent value="receipts">Receipts content </TabsContent>
      </Tabs>
    </>
  )
}

const Action = forwardRef(({ children, className, isResponsive, ...rest }, ref) => (
  <Button
    {...rest}
    ref={ref}
    className={cn(
      "leading-none rounded-full py-1 md:min-w-24 h-auto group md:gap-2 active:opacity-50",
      { "max-md:size-8": isResponsive },
      className
    )}
    variant="outline"
  >
    {isResponsive ? (
      <>
        <span className="hidden md:block">{children}</span>
        <ChevronDown className="size-4 transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180" />
      </>
    ) : (
      <span>{children}</span>
    )}
  </Button>
))

Action.displayName = "Action"

Action.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isResponsive: PropTypes.bool,
}

// TABS CONTENT

const PARTICIPANTS_MOCK_DATA = [
  { firstName: "John", lastName: "Smith", gets: 3000 },
  { firstName: "Jane", lastName: "Doe", owes: 2364 },
  { firstName: "Alice", lastName: "Johnson", owes: 433 },
  { firstName: "Bob", lastName: "Brown" },
]

const Balances = () => {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg: xl:grid-cols-3">
        {PARTICIPANTS_MOCK_DATA.map((particpant, index) => (
          <li className="w-full" key={index}>
            <ParticipantCard participant={particpant} />
          </li>
        ))}
      </ul>
    </>
  )
}

const ParticipantCard = ({ participant, className }) => {
  return (
    <Card className={cn("p-2 flex gap-4 items-center justify-between", className)}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <BodyText tag="span" className="font-semibold leading-none mb-0 leading-0 shrink-0">
            {participant.firstName}
          </BodyText>
          <div className="flex gap-2">
            {participant.gets ? (
              <BalanceBadge amount={3000} />
            ) : participant.owes ? (
              <BalanceBadge variant="owes" amount={3000} />
            ) : null}
          </div>
        </div>
        <Popover className="group">
          <PopoverTrigger className="text-sm lg:text-base flex gap-2 items-center group">
            In 4 payments
            <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </PopoverTrigger>
          <PopoverContent className="max-w-56" align="start">
            <ul className="text-sm lg:text-base list-disc pl-4">
              <li>from Parker: {formatCurrency(300)}</li>
              <li>from Rosendo: {formatCurrency(403)}</li>
              <li>from Emily: {formatCurrency(1000)}</li>
            </ul>
          </PopoverContent>
        </Popover>
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

const BalanceBadge = ({ variant = "gets", amount }) => {
  const shouldGet = variant === "gets"
  // TODO add balance 0 variant

  return (
    <Badge
      className={cn(
        "px-1",
        shouldGet
          ? "text-green-600 border-green-600 bg-green-50"
          : "text-red-600 border-red-600 bg-red-50"
      )}
      variant="outline"
    >
      <span className="hidden sm:block">{shouldGet ? "Gets" : "Owes"}</span>&nbsp;
      {formatCurrency(amount)}
    </Badge>
  )
}

Action.propTypes = {
  variant: PropTypes.oneOf(["owes, gets"]),
  amount: PropTypes.number.isRequired,
}
