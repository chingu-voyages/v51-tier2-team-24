import GridCard from "@/components/GridCard";
import { PageGrid } from "@/components/PageGrid";
import { PageHeader } from "@/components/PageHeader";
import { BodyText } from "@/components/Typography";

export function ExpenseGroupsPage() {
  const MOCK_GROUP_INFO = [
    { name: "Bali Trip", avatar: "#", id: "random_id_1", budget: 500, expense: 300, members: 5 },
    { name: "Hawaii Trip", avatar: "#", id: "random_id_2", budget: 500, expense: 300, members: 5 },
    { name: "Mike's Birthday", avatar: "#", id: "random_id_3", budget: 500, expense: 300, members: 5 },
    { name: "John's Birthday", avatar: "#", id: "random_id_4", budget: 500, expense: 300, members: 5 },
    { name: "Escape Room", avatar: "#", id: "random_id_5", budget: 500, expense: 300, members: 5 },
  ]

  const groupList = MOCK_GROUP_INFO.map(group => {
    return (
      <GridCard
        key={group.id}
        name={group.name}
        avatarUrl="#"
        actions="Edit"
        content={
          <>
            <BodyText tag="p" variant="normal" className="mb-1">Alloted Budget: ${group.budget}</BodyText>
            <BodyText tag="p" variant="normal" className="mb-1">Expense Amount: ${group.expense}</BodyText>
            <BodyText tag="p" variant="normal" className="mb-1">Participants: {group.members}</BodyText>
          </>
        }
        footer="See More"
      />
    )
  })
  return (
    <>
      <PageGrid 
        children={
          <PageHeader 
            children="Groups"
            subheading="Detailed overview of all your groups"
            headerAction="New Group"
          />
        } 
      />
      <PageGrid>
      {groupList} 
      </PageGrid>
    </>
  )
}
