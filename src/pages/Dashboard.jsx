import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { CircleDollarSign, Group, UsersRound } from 'lucide-react';

function Dashboard() {
    return (
        <div className="w-full px-4">
            <h1 className="text-2xl md:text-5xl">Dashboard</h1>
            <section className=" my-4 flex w-full justify-center flex-wrap">
                <Card className="w-full">
                    <CardHeader>
                        <Group />
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
                <Card>
                    
                </Card>
            </section>
        </div>
    )
}

export default Dashboard