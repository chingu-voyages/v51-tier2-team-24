import GridCard from "@/components/GridCard"
import { PageGrid } from "@/components/PageGrid"
import { PageHeader } from "@/components/PageHeader"
import { BodyText } from "@/components/Typography"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"
import { Link } from "react-router-dom"

const MOCK_GROUP_INFO = [
  { name: "Bali Trip", avatar: "#", id: "random_id_1", budget: 500, expense: 300, members: 5 },
  { name: "Hawaii Trip", avatar: "#", id: "random_id_2", budget: 500, expense: 300, members: 5 },
  {
    name: "Mike's Birthday",
    avatar: "#",
    id: "random_id_3",
    budget: 500,
    expense: 300,
    members: 5,
  },
  {
    name: "John's Birthday",
    avatar: "#",
    id: "random_id_4",
    budget: 500,
    expense: 300,
    members: 5,
  },
  { name: "Escape Room", avatar: "#", id: "random_id_5", budget: 500, expense: 300, members: 5 },
]

export function ExpenseGroupsPage() {
  const groupList = MOCK_GROUP_INFO.map((group) => {
    return (
      <GridCard
        key={group.id}
        name={group.name}
        avatarUrl="#"
        content={
          <>
            <BodyText
              tag="dl"
              className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 [&>dt]:font-medium mb-2"
            >
              <dt>Alloted Budget: </dt>
              <dd>{formatCurrency(group.budget)}</dd>
              <dt>Expense Amount: </dt>
              <dd>{formatCurrency(group.expense)}</dd>
              <dt>Participants: </dt>
              <dd>{group.members}</dd>
            </BodyText>
          </>
        }
        footer={
          <div className="w-full flex justify-end">
            <Button asChild variant="link" to={`/app/groups/${group.id}`}>
              <Link>See more</Link>
            </Button>
          </div>
        }
      />
    )
  })
  return (
    <>
      <PageHeader
        subheading="Detailed overview of all your groups"
        headerAction={<Button>New Group</Button>}
      >
        Groups
      </PageHeader>
      <PageGrid>{groupList}</PageGrid>
    </>
  )
}
