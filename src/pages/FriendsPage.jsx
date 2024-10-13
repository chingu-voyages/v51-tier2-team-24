import { Alert } from "@/components/Alert"
import { CardAction } from "@/components/CardAction"
import { FriendForm } from "@/components/forms/FriendsForm"
import { GridCard } from "@/components/GridCard"
import { PageGrid } from "@/components/PageGrid"
import { PageHeader } from "@/components/PageHeader"
import { ResponsiveDialog } from "@/components/ResponsiveDialog"
import { BodyText } from "@/components/Typography"
import { Button } from "@/components/ui/button"
import { PARTICIPANTS_MOCK_DATA } from "@/lib/mock-data"
import { formatCurrency } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"

export function FriendsPage() {
  const deleteAction = () => {
    console.log("Delete")
  }
  return (
    <>
      <PageHeader
        headerAction={
          <ResponsiveDialog dialogTitle="Add a new friend" trigger={<Button>New Friend</Button>}>
            <FriendForm />
          </ResponsiveDialog>
        }
        subheading="Detailed overview of your friends"
      >
        Friends
      </PageHeader>
      <PageGrid tag="ul">
        {PARTICIPANTS_MOCK_DATA.map((friend, index) => (
          <li key={index}>
            <GridCard
              name={{ firstName: friend.firstName, lastName: friend.lastName }}
              avatarUrl={friend.avatarUrl}
              actions={
                <>
                  <ResponsiveDialog
                    dialogTitle="Edit Friend Details"
                    trigger={<CardAction className="border-current">Edit</CardAction>}
                  >
                    <FriendForm friendDefaultData={friend} className="md:flex" />
                  </ResponsiveDialog>
                  <Alert
                    trigger={
                      <CardAction
                        onClick={deleteAction}
                        className="border-red-600 text-red-600 hover:bg-red-100"
                      >
                        Delete
                      </CardAction>
                    }
                    onSubmit={deleteAction}
                    dialogTitle="Are you sure you want to delete this group?"
                  />
                </>
              }
              content={
                <>
                  <BodyText
                    tag="dl"
                    className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 [&>dt]:font-medium mb-2"
                  >
                    <dt>Spent</dt>
                    <dd>{formatCurrency(0)}</dd>
                    <dt>Gets</dt>
                    <dd>{formatCurrency(0)}</dd>
                    <dt>Owes</dt>
                    <dd>{formatCurrency(1000)}</dd>
                  </BodyText>
                  <Popover className="group">
                    <PopoverTrigger className="flex gap-2 items-center group">
                      <BodyText className="m-0">Expense groups</BodyText>
                      <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </PopoverTrigger>
                    <PopoverContent className="max-w-44" align="start">
                      <BodyText tag="ul" className="mb-0">
                        {/*TODO Render a list of groups which this friend is a participant in*/}
                        <li>
                          <Button className="p-0 h-auto" variant="link" asChild>
                            <Link to="/app/groups/group-id">Group name</Link>
                          </Button>
                        </li>
                      </BodyText>
                    </PopoverContent>
                  </Popover>
                </>
              }
            />
          </li>
        ))}
      </PageGrid>
    </>
  )
}
