import { Card, CardHeader } from "../components/ui/card";
import { CircleDollarSign, Group, UsersRound } from "lucide-react";
import { totalExpenses } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { ExpensesList } from "@/components/ExpensesList";
import { Heading, BodyText } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import GridCard from "@/components/GridCard";
import { PageGrid } from "@/components/PageGrid";

const MOCK_GROUP_INFO = [
  {
    name: "Bali Trip",
    avatar: "#",
    id: "random_id_1",
    budget: 500,
    expense: 300,
    members: 5,
  },
  {
    name: "Hawaii Trip",
    avatar: "#",
    id: "random_id_2",
    budget: 500,
    expense: 300,
    members: 5,
  },
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
  {
    name: "Escape Room",
    avatar: "#",
    id: "random_id_5",
    budget: 500,
    expense: 300,
    members: 5,
  },
];

const LAST_THREE_GROUPS = MOCK_GROUP_INFO.slice(-3);

const MOCK_EXPENSES = [
  {
    name: "Plane tickets to Hawaii",
    group: "Hawaii Trip",
    amount: 150,
    id: "expense_id_1",
    date: new Date("2024-01-02"),
    description: "",
    category: "",
    purchaser: "",
    contributionWeight: 10,
  },
  {
    name: "Hotel for Bali",
    group: "Bali Trip",
    amount: 150,
    id: "expense_id_2",
    date: new Date("2024-08-23"),
    description: "",
    category: "",
    purchaser: "",
    contributionWeight: 10,
  },
  {
    name: "Beer for John's Birthday",
    group: "John's Birthday",
    amount: 150,
    id: "expense_id_3",
    date: new Date("2024-05-18"),
    description: "",
    category: "",
    purchaser: "",
    contributionWeight: 10,
  },
  {
    name: "BBQ for Mike's Birthday",
    group: "Mike's Birthday",
    amount: 150,
    id: "expense_id_4",
    date: new Date("2024-06-30"),
    description: "",
    category: "",
    purchaser: "",
    contributionWeight: 10,
  },
  {
    name: "Escape Room Entry fee",
    group: "Escape Room",
    amount: 150,
    id: "expense_id_5",
    date: new Date("2024-02-24"),
    description: "",
    category: "",
    purchaser: "",
    contributionWeight: 10,
  },
];

//Sorting expenses by date
const SORTED_MOCK_EXPENSES = MOCK_EXPENSES.sort((a, b) => b.date - a.date);

//Last 3 expenses
const LAST_THREE_EXPENSES = SORTED_MOCK_EXPENSES.slice(-3);

function Dashboard() {
  const groupList = LAST_THREE_GROUPS.map((group) => {
    return (
      <GridCard
        key={group.id}
        name={group.name}
        avatarUrl="#"
        actions="Edit"
        content={
          <>
            <BodyText tag="p" variant="normal" className="mb-1">
              Alloted Budget: ${group.budget}
            </BodyText>
            <BodyText tag="p" variant="normal" className="mb-1">
              Expense Amount: ${group.expense}
            </BodyText>
            <BodyText tag="p" variant="normal" className="mb-1">
              Participants: {group.members}
            </BodyText>
          </>
        }
        footer={
          <>
            <Button>
              <NavLink to={`/app/groups/${group.id}`}>See More</NavLink>
            </Button>
          </>
        }
      />
    );
  });

  return (
    <div className="w-full px-4">
      <Heading tag="h1" className="">
        Dashboard
      </Heading>
      <section className=" my-4 flex w-full justify-center flex-wrap md:flex-nowrap gap-2">
        <Card className="w-full">
          <CardHeader className="flex flex-row my-auto">
            <Group className="pr-3 border-r-2 shrink-0 size-14 stroke-1" />
            <div className="flex flex-col ml-4">
              <BodyText
                tag="p"
                variant="normal"
                className="mb-0 md:mb-0 font-bold"
              >
                Total Groups
              </BodyText>
              <BodyText tag="p" variant="normal" className="mb-0 lg:text-lg">
                {MOCK_GROUP_INFO.length}
              </BodyText>
            </div>
          </CardHeader>
        </Card>
        <Card className="w-full mt-4 md:m-0">
          <CardHeader className="flex flex-row my-auto">
            <UsersRound className="pr-3 border-r-2 shrink-0 size-14 stroke-1" />
            <div className="flex flex-col ml-4">
              <BodyText
                tag="p"
                variant="normal"
                className="mb-0 md:mb-0 font-bold"
              >
                Total Friends
              </BodyText>
              <BodyText tag="p" variant="normal" className="mb-0 lg:text-lg">
                2999
              </BodyText>
            </div>
          </CardHeader>
        </Card>
        <Card className="w-full mt-4 md:m-0">
          <CardHeader className="flex flex-row my-auto">
            <CircleDollarSign className="pr-3 border-r-2 shrink-0 size-14 stroke-1" />
            <div className="flex flex-col ml-4">
              <BodyText
                tag="p"
                variant="normal"
                className="mb-0 md:mb-0 font-bold"
              >
                Total Expenses
              </BodyText>
              <BodyText tag="p" variant="normal" className="mb-0 lg:text-lg">
                {totalExpenses(SORTED_MOCK_EXPENSES)}
              </BodyText>
            </div>
          </CardHeader>
        </Card>
      </section>
      <section className="w-full">
        <Heading tag="h2" className="mt-10 mb-5">
          Group Expense Overview
        </Heading>
        <PageGrid>{groupList}</PageGrid>
      </section>
      <section>
        <Heading tag="h2" className="mt-10 mb-5">
          Latest Expenses
        </Heading>
        {<ExpensesList expenses={LAST_THREE_EXPENSES} />}
      </section>
    </div>
  );
}

export default Dashboard;
