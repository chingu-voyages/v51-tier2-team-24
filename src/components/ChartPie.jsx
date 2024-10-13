/* eslint-disable react/no-unescaped-entities */
import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Initial raw data with more than 4 categories
const rawChartData = [
  { category: "Food", amount: 400, fill: "var(--color-food)" },
  { category: "Rent", amount: 1200, fill: "var(--color-rent)" },
  { category: "Entertainment", amount: 200, fill: "var(--color-entertainment)" },
  { category: "Utilities", amount: 300, fill: "var(--color-utilities)" },
  { category: "Clothing", amount: 150, fill: "var(--color-clothing)" },
  { category: "Transportation", amount: 250, fill: "var(--color-transportation)" },
  { category: "Healthcare", amount: 100, fill: "var(--color-healthcare)" },
  { category: "Miscellaneous", amount: 50, fill: "var(--color-miscellaneous)" },
]

const chartConfig = {
  amount: {
    label: "Amount",
  },

  food: {
    label: "Food",
    color: "hsl(var(--chart-1))",
  },

  rent: {
    label: "Rent",
    color: "hsl(var(--chart-2))",
  },

  entertainment: {
    label: "Entertainment",
    color: "hsl(var(--chart-3))",
  },

  utilities: {
    label: "Utilities",
    color: "hsl(var(--chart-4))",
  },

  others: {
    label: "Others",
    color: "hsl(var(--chart-5))",
  },
}

// Function to get the top 4 categories and group the rest as "Others"
function processChartData(data) {
  // Sort the data by the amount in descending order
  const sortedData = [...data].sort((a, b) => b.amount - a.amount)

  // Take the top 4 categories
  const topCategories = sortedData.slice(0, 4)

  // Sum up the rest of the categories into an "Others" category
  const others = sortedData.slice(4).reduce(
    (acc, curr) => {
      acc.amount += curr.amount
      return acc
    },
    { category: "Others", amount: 0, fill: "var(--color-others)" }
  )

  // Return the processed data with top 4 categories and "Others"
  return others.amount > 0 ? [...topCategories, others] : topCategories
}

const chartData = processChartData(rawChartData)

export function ChartPie() {
  return (
    <Card className="w-full flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Expense Categories</CardTitle>
        <CardDescription>Total Expenses Breakdown</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="amount" hideLabel />} />
            <Pie data={chartData} dataKey="amount">
              <LabelList
                dataKey="category"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value) => chartConfig[value.toLowerCase()]?.label || value}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Total expenses calculated across all time <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing the distribution of total expenses, with smaller categories grouped as "Others"
        </div>
      </CardFooter>
    </Card>
  )
}
