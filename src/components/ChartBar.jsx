"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

export const description = "A horizontal bar chart comparing budget and expenses with inner labels"

const chartData = [{ category: "Financial Overview", budget: 5000, expenses: 10000 }]

const chartConfig = {
  budget: {
    label: "Allotted Budget",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Sum of Expenses",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
}

const formatCurrency = (value) => `$${value.toLocaleString()}`

export function ChartBar() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Budget vs Expenses</CardTitle>
        <CardDescription>Financial Year 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              top: 20,
              right: 16,
              left: 16,
              bottom: 5,
            }}
            barSize={100}
          >
            <CartesianGrid horizontal={false} />
            <YAxis dataKey="category" type="category" hide />
            <XAxis type="number" tickFormatter={formatCurrency} tickLine={false} axisLine={false} />
            <Bar dataKey="budget" fill="var(--color-budget)" radius={4}>
              <LabelList
                dataKey="budget"
                position="insideRight"
                formatter={formatCurrency}
                className="fill-primary-foreground"
                fontSize={16}
              />
              <LabelList
                content={({ x, y, height }) => (
                  <text
                    x={x + 10}
                    y={y + height / 2}
                    fill="var(--color-label)"
                    textAnchor="start"
                    dominantBaseline="middle"
                    fontSize={16}
                  >
                    Allotted Budget
                  </text>
                )}
              />
            </Bar>
            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4}>
              <LabelList
                dataKey="expenses"
                position="insideRight"
                formatter={formatCurrency}
                className="fill-primary-foreground"
                fontSize={16}
              />
              <LabelList
                content={({ x, y, height }) => (
                  <text
                    x={x + 10}
                    y={y + height / 2}
                    fill="var(--color-label)"
                    textAnchor="start"
                    dominantBaseline="middle"
                    fontSize={16}
                  >
                    Sum of Expenses
                  </text>
                )}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Expenses are 16% under budget <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total budget and expenses for the current financial year
        </div>
      </CardFooter>
    </Card>
  )
}
