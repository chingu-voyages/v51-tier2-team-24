import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { CircleDollarSign, Group, UsersRound } from 'lucide-react';
import { cn, getInitials } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NavLink } from 'react-router-dom';

const MOCK_GROUP_INFO = [
    { name: "Bali Trip", avatar: "#", id: "random_id_1", budget: 500, expense: 300, members: 5 },
    { name: "Hawaii Trip", avatar: "#", id: "random_id_2", budget: 500, expense: 300, members: 5 },
    { name: "Mike's Birthday", avatar: "#", id: "random_id_3", budget: 500, expense: 300, members: 5 },
    { name: "John's Birthday", avatar: "#", id: "random_id_4", budget: 500, expense: 300, members: 5 },
    { name: "Escape Room", avatar: "#", id: "random_id_5", budget: 500, expense: 300, members: 5 },
]

const LAST_THREE_GROUPS = MOCK_GROUP_INFO.slice(-3);


const MOCK_EXPENSES = [
    {expenseName: "Plane tickets to Hawaii", group: "Hawaii Trip", amount: 150, id: "expense_id_1"},
    {expenseName: "Hotel for Bali", group: "Bali Trip", amount: 150, id: "expense_id_2"},
    {expenseName: "Beer for John's Birthday", group: "John's Birthday", amount: 150, id: "expense_id_3"},
    {expenseName: "BBQ for Mike's Birthday", group: "Mike's Birthday", amount: 150, id: "expense_id_4"},
    {expenseName: "Escape Room Entry fee", group: "Escape Room", amount: 150, id: "expense_id_5"},
]



function Dashboard() {
    return (
        <div className="w-full px-4">
            <h1 className="text-2xl md:text-5xl">Dashboard</h1>
            <section className=" my-4 flex w-full justify-center flex-wrap">
                <Card className="w-full">
                    <CardHeader className="flex flex-row">
                        <Group />
                        <h1 className="flex flex-col">
                            <span>Total Groups</span>
                            <span>{MOCK_GROUP_INFO.length}</span>
                        </h1>
                    </CardHeader>
                </Card>
                <Card className="w-full mt-4">
                    <CardHeader>
                        <UsersRound />
                    </CardHeader>
                </Card>
                <Card className="w-full mt-4">
                    <CardHeader>
                        <CircleDollarSign />
                    </CardHeader>
                </Card>
            </section>
            <section>
                <h1 className="text-2xl md:text-5xl">Group Expense Overview</h1>
                {
                    LAST_THREE_GROUPS.map((group) => {
                        return (
                            <Card key={group.id}>
                                <CardHeader className="flex flex-row">
                                    <Avatar className="size-8">
                                        <AvatarImage src={group.avatar} />
                                        <AvatarFallback className="bg-slate-300 text-foreground">
                                            {getInitials(group.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <h2>{group.name}</h2>
                                </CardHeader>
                                <CardContent>
                                    <p>Alloted Budget: ${group.budget}</p>
                                    <p>Expense Amount: ${group.expense}</p>
                                    <p>Participants: ${group.members}</p>
                                </CardContent>
                                <NavLink to={`/app/groups/${group.id}`}>
                                    See more
                                </NavLink>
                            </Card>
                        )
                    })
                }
            </section>
            <section>
                <h1 className="text-2xl md:text-5xl">Latest Expenses</h1>

            </section>
        </div>
    )
}

export default Dashboard