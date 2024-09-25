import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { defineStepper } from "@stepperize/react"
import { Check, Percent, Plus } from "lucide-react"
import React from "react"
import PropTypes from "prop-types"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"

const { useStepper, Scoped, steps } = defineStepper(
  {
    id: "first",
    title: "Add Group Details",
    description: "Enter the basic information for your group, such as the group name and purpose.",
  },
  {
    id: "second",
    title: "Add Participants",
    description:
      "These participants will automatically be added to your friends list, making it easier to select them for future group expenses.",
  },
  {
    id: "third",
    title: "Add Expenses",
    description:
      "Start adding the expenses for the group. You can assign amounts and categorize the expenses for easy tracking.",
  },
  {
    id: "last",
    title: "Final step! Let's summarize",
    description:
      "Review the details and finalize the group setup. You'll be able to track and manage the group's expenses from the dashboard.",
  }
)

const EXPENSE_GROUP_CATEGORIES = [
  "Food & Drinks",
  "Travel",
  "Entertainment",
  "Utilities & Bills",
  "Shopping",
  "Health & Fitness",
  "Gifts & Donations",
  "Recreation & Leisure",
  "Miscellaneous",
  "Parties & Celebrations",
]

const EXPENSE_CATEGORIES = [
  "Rent & Housing",
  "Transportation",
  "Groceries",
  "Dining & Takeout",
  "Entertainment",
  "Health & Fitness",
  "Shopping",
  "Travel",
  "Subscriptions",
  "Insurance",
  "Education",
  "Loans & Debts",
  "Miscellaneous",
]

const CONTRIBUTION_WEIGHTS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export function FirstGroupPage() {
  return (
    <Scoped>
      <div className="px-4">
        <h1 className="font-bold text-2xl mb-6">
          Let&apos;s create your first expense group together!
        </h1>
        <Steps />
        <StepActions className="hidden lg:flex" />
        <LastStep />
      </div>
    </Scoped>
  )
}

const Steps = () => {
  const stepper = useStepper()

  return (
    <>
      <div className="lg:flex lg:w-full lg:items-center lg:mb-4">
        {steps.map((step, index, array) => {
          const isCurrentStep = stepper.current.id === step.id
          const isPassedStep = index < steps.findIndex((s) => s.id === stepper.current.id)
          const isStepBeforeLast = index === array.length - 2
          const isLastStep = index === array.length - 1

          return (
            <React.Fragment key={step.id}>
              {isLastStep ? null : (
                <div className="step-label-container flex items-center gap-2">
                  <div
                    className={cn(
                      "step-icon shrink-0 size-8 rounded-full border-2 flex items-center justify-center",
                      {
                        "border-primary bg-primary text-primary-foreground":
                          isCurrentStep || isPassedStep,
                      }
                    )}
                  >
                    {isPassedStep ? <Check /> : index + 1}
                  </div>

                  <h2
                    className={cn("step-label font-bold text-muted-foreground", {
                      "text-foreground": isCurrentStep || isPassedStep,
                    })}
                  >
                    {step.title}
                  </h2>
                </div>
              )}

              {isStepBeforeLast || isLastStep ? null : (
                <div className="step-connector hidden lg:block step-connector flex-1 border-t-2 ml-2"></div>
              )}

              <StepsContent
                className="pt-2"
                isCurrentStep={isCurrentStep}
                isStepBeforeLast={isStepBeforeLast}
                variant="vertical"
              />
            </React.Fragment>
          )
        })}
      </div>

      <StepsContent />
    </>
  )
}

const StepsContent = ({ className, isCurrentStep, isStepBeforeLast, variant = "default" }) => {
  const stepper = useStepper()

  return variant === "vertical" ? (
    <div className={cn("lg:hidden", className)}>
      {isCurrentStep && (
        <div
          className={cn("border-l-[.125rem] ml-4 pl-4 mb-4", {
            "border-l-0": isStepBeforeLast,
          })}
        >
          {stepper.when("first", () => (
            <AddGroupDetailsStep includeActions />
          ))}
          {stepper.when("second", () => (
            <AddParticipantsStep includeActions />
          ))}
          {stepper.when("third", () => (
            <AddExpensesStep includeActions />
          ))}
        </div>
      )}
      {isCurrentStep && stepper.when("last", () => <LastStep includeActions />)}
    </div>
  ) : (
    <div className="hidden lg:block lg:mb-4">
      {stepper.when("first", () => (
        <AddGroupDetailsStep />
      ))}

      {stepper.when("second", () => (
        <AddParticipantsStep />
      ))}

      {stepper.when("third", () => (
        <AddExpensesStep />
      ))}

      {stepper.when("last", () => (
        <LastStep />
      ))}
    </div>
  )
}

const StepActions = ({ className, isWithinForm = false }) => {
  const stepper = useStepper()

  return (
    <div className={cn("flex items-center gap-4 justify-between", className)}>
      <Button
        onClick={stepper.prev}
        disabled={stepper.isFirst}
        variant="secondary"
        className={cn("disabled:opacity-50 w-full md:w-auto", { "w-auto": stepper.isLast })}
        type="button"
      >
        Back
      </Button>

      {isWithinForm ? (
        <Button className={cn("block w-full md:w-auto", { hidden: stepper.isLast })} type="submit">
          Next
        </Button>
      ) : (
        <Button
          className={cn("block w-full md:w-auto", { hidden: stepper.isLast })}
          onClick={stepper.next}
          type="button"
        >
          Next
        </Button>
      )}

      <div className={cn("hidden", { "flex gap-4": stepper.isLast })}>
        <Button onClick={stepper.reset} type="button">
          Reset
        </Button>
        <Button type="button">Finish</Button>
      </div>
    </div>
  )
}

// === CONTENT COMPONENTS FOR EACH STEP ===

const AddGroupDetailsStep = ({ includeActions = false }) => {
  const stepper = useStepper()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something
    stepper.next()
  }

  return (
    <>
      <p className="text-muted-foreground text-sm mb-4">{stepper.current.description}</p>
      <form className="flex flex-col gap-4 md:grid md:grid-cols-2" onSubmit={handleSubmit}>
        <Label className="col-span-full">
          <span className="sr-only">Group name</span>
          <Input type="text" name="groupName" placeholder="Name" />
        </Label>
        <Label className="col-span-full">
          <span className="sr-only">Group description</span>
          <Textarea name="groupDescription" placeholder="Description" />
        </Label>
        <Label>
          <span className="sr-only">Allotted budget</span>
          <Input type="number" name="groupAllottedBudget" placeholder="Allotted Budget" />
        </Label>
        <Label>
          <span className="sr-only">Select an expense category</span>
          <Select name="groupCategory">
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {EXPENSE_GROUP_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
        <Label className="hidden">
          <span className="inline-block mb-2">Group avatar</span>
          <Input name="groupAvatar" type="file" disabled />
        </Label>
        {includeActions && <StepActions className="col-span-full" isWithinForm />}
      </form>
    </>
  )
}

const AddParticipantsStep = ({ includeActions = false }) => {
  const stepper = useStepper()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something
    stepper.next()
  }

  return (
    <>
      <p className="text-muted-foreground text-sm mb-4">{stepper.current.description}</p>
      <form
        className="flex flex-col gap-4 md:grid grid-cols-[repeat(3,1fr)_auto]"
        onSubmit={handleSubmit}
      >
        <Label>
          <span className="sr-only">Participant first name</span>
          <Input name="firstName" type="text" placeholder="First Name" />
        </Label>
        <Label>
          <span className="sr-only">Participant last name</span>
          <Input name="lastName" type="text" placeholder="Last Name" />
        </Label>
        <Label>
          <span className="sr-only">Select the contribution weight</span>
          <Select name="contribution">
            <SelectTrigger>
              <div className="flex items-center gap-4">
                <Percent className="size-4" />
                <SelectValue placeholder="Contribution Weight" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {CONTRIBUTION_WEIGHTS.map((weight) => (
                  <SelectItem key={weight} value={weight}>
                    {`${weight}%`}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>

        <Button className="gap-2" type="button" variant="secondary">
          Add<span className="md:hidden">&nbsp;participant</span>
          <Plus className="hidden md:block size-4" />
        </Button>
        {includeActions && <StepActions className="md:col-span-full" isWithinForm />}
      </form>
    </>
  )
}

const AddExpensesStep = ({ includeActions = false }) => {
  const stepper = useStepper()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something
    stepper.next()
  }

  return (
    <>
      <p className="text-muted-foreground text-sm mb-4">{stepper.current.description}</p>
      <form className="flex flex-col gap-4 md:grid md:grid-cols-2" onSubmit={handleSubmit}>
        <Label className="md:col-span-full">
          <span className="sr-only">Expense name</span>
          <Input name="expenseName" type="text" placeholder="Name" />
        </Label>
        <Label className="col-span-full">
          <span className="sr-only">Expense description</span>
          <Textarea name="expenseDescription" placeholder="Description" />
        </Label>
        <Label>
          <span className="sr-only">Expense amount</span>
          <Input name="expenseAmount" type="number" placeholder="Amount" />
        </Label>
        <Label>
          <span className="sr-only">Expense category</span>
          <Select name="expenseCategory">
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {EXPENSE_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
        <Label>
          <span className="inline-block mb-2">Receipt proof (can be uploaded later)</span>
          <Input name="expenseReceipt" type="file" />
        </Label>
        {includeActions && <StepActions className="md:col-span-full" isWithinForm />}
      </form>
    </>
  )
}

const PARTICIPANTS_MOCK_DATA = [
  { firstName: "John", lastName: "Smith", avatarUrl: "#", id: "some_random-id_1" },
  { firstName: "Thomas", lastName: "Edison", avatarUrl: "#", id: "some_random-id_2" },
  { firstName: "Mickael", lastName: "Jackson", avatarUrl: "#", id: "some_random-id_3" },
  { firstName: "Darren", lastName: "McGregor", avatarUrl: "#", id: "some_random-id_3" },
]

const EXPENSES_MOCK_DATA = [
  {
    name: "Expense 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, architecto.",
    category: "category name",
    amount: 2000,
    purchaser: "Name1 Surname1",
    contributionWeight: 10,
    date: new Date(),
    receiptUrl: "https://picsum.photos/seed/picsum/1080/1350",
    id: "some_unique_id_1",
  },
]

const LastStep = ({ includeActions = false }) => {
  const stepper = useStepper()
  // TODO should be moved to individual balance card
  // const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <div className="mt-4 space-y-10">
      <div>
        <h2 className="font-bold text-xl mb-2">{stepper.current.title}</h2>
        <p className="text-muted-foreground text-sm mb-6">{stepper.current.description}</p>
      </div>

      <Card className="group-details-card flex">
        <CardHeader className="flex flex-row gap-4 space-y-0">
          <div className="relative self-start">
            <Avatar className="h-20 w-20">
              <AvatarImage src="#" />
              <AvatarFallback className="text-4xl bg-slate-300 dark:text-secondary">
                BT
              </AvatarFallback>
            </Avatar>
            <Badge className="justify-center absolute inset-x-0 bottom-0" variant="secondary">
              Travel
            </Badge>
          </div>

          <div className="space-y-1.5 flex flex-col justify-between flex-1">
            <CardTitle className="text-2xl font-b">Bali Trip</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur.</CardDescription>
            <p className="text-green-600 leading-none">Allotted: {formatCurrency(5000)}</p>
          </div>
        </CardHeader>
      </Card>

      <section>
        <h2 className="mb-6 font-bold text-xl">Particpants</h2>
        <ul className="space-y-2">
          {PARTICIPANTS_MOCK_DATA.map((participant) => (
            <li
              key={participant.id}
              className="flex gap-2 items-center capitalize active:opacity-50"
            >
              <Avatar className="size-8">
                <AvatarImage src="#" />
                {/* To use getInitials utility function ofter the Layout PR is merged */}
                <AvatarFallback className="bg-slate-300 text-foreground dark:text-secondary">
                  CN
                </AvatarFallback>
              </Avatar>
              <span className="font-bold">{`${participant.firstName} ${participant.lastName}`}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-xl mb-6">Expenses</h2>

        <div>
          {EXPENSES_MOCK_DATA ? (
            <Accordion type="single" collapsible>
              {EXPENSES_MOCK_DATA.map((expense) => (
                <AccordionItem
                  key={expense.id}
                  className="bg-slate-100 dark:bg-secondary border-b"
                  value={expense.id}
                >
                  <AccordionTrigger className="px-4 py-2 text-lg hover:no-underline flex">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2">
                        <div className="category-icon-placeholder size-4 bg-black rounded-full"></div>
                        <p className="hover:text-primary transition delay-100">{expense.name}</p>
                      </div>
                      <span className="pointer-events-none font-normal text-sm" aria-hidden>
                        Jan 16th {/* TODO to install date-fns for formatting dates */}
                      </span>
                    </div>
                    <span className="font-normal ml-auto self-start px-4 text-sm" aria-hidden>
                      {formatCurrency(expense.amount)}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-6 flex flex-col gap-4 border-t">
                    <div className="description-list">
                      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                        <dt>Description</dt>
                        <dd>{expense.description}</dd>
                        <dt>Category</dt>
                        <dd>{expense.category}</dd>
                        <dt>Amount</dt>
                        <dd>{formatCurrency(expense.amount)}</dd>
                        <dt>Purchaser</dt>
                        <dd>{expense.purchaser}</dd>
                        <dt>Contribution Weight</dt>
                        <dd>{expense.contributionWeight}</dd>
                        <dt>Purchase date</dt>
                        <dd>23 Jan 2024 {/* The actual date will be formated with date-fns */}</dd>
                      </dl>
                    </div>
                    <div className="receipt-container w-full sm:w-3/4 md:max-w-[30%] h-full bg-slate-200 p-2 self-center">
                      <AspectRatio className="flex items-center justify-center" ratio={4 / 3}>
                        {expense.receiptUrl ? (
                          <img
                            className="h-full object-contain w-full flex"
                            src={expense.receiptUrl}
                            alt="lorem ipsum"
                          />
                        ) : (
                          // TODO to add image icon
                          <p>No receipt was uploaded</p>
                        )}
                      </AspectRatio>
                      {/* TODO to add loup icon  on click open a modal/ drawer*/}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div>No expenses added yet</div>
          )}
        </div>
      </section>

      {includeActions && <StepActions />}
    </div>
  )
}

// === PROP TYPES ===

const StepsTypes = {
  includeActions: PropTypes.bool,
}

AddGroupDetailsStep.propTypes = StepsTypes
AddParticipantsStep.propTypes = StepsTypes
AddExpensesStep.propTypes = StepsTypes
LastStep.propTypes = StepsTypes

StepActions.propTypes = {
  className: PropTypes.string,
  isWithinForm: PropTypes.bool,
}

StepsContent.propTypes = {
  className: PropTypes.string,
  isCurrentStep: PropTypes.bool,
  isStepBeforeLast: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "vertical"]),
}

// UTILS

function formatCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: number % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(number)
}
