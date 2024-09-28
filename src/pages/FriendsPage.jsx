import { GridCard } from "@/components/GridCard"
import { PageGrid } from "@/components/PageGrid"
import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"

const FRIENDS_MOCK_DATA = [
  { firstName: "Name", lastName: "Last Name", avatarUrl: undefined },
  { firstName: "Name2", lastName: "Last Name2", avatarUrl: undefined },
]

export function FriendsPage() {
  return (
    <>
      <PageHeader
        headerAction={<Button>New Friend</Button>}
        subheading="Detailed overview of your friends"
      >
        Friends
      </PageHeader>
      <PageGrid tag="ul">
        {FRIENDS_MOCK_DATA.map((friend, index) => (
          <li key={index}>
            <GridCard
              name={{ firstName: friend.firstName, lastName: friend.lastName }}
              avatarUrl={friend.avatarUrl}
              actions={<>{/* Add and instances of CardAction component */}</>}
              content={<>{/* Add card content here */}</>}
            />
          </li>
        ))}
      </PageGrid>
    </>
  )
}
