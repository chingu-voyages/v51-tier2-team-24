import { GroupInfoWidget } from "@/components/GroupInfoWidget"
import { useParams } from "react-router-dom"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import PropTypes from "prop-types"
import { cn } from "@/lib/utils"
import { forwardRef, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        <TabsContent value="balances">Balances content</TabsContent>
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
