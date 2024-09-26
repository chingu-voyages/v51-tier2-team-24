import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BodyText } from "./Typography"
import { formatCurrency } from "@/lib/utils"
import PropTypes from "prop-types"
import { AspectRatio } from "./ui/aspect-ratio"
import { Button } from "./ui/button"
import { ImageOff, ZoomIn } from "lucide-react"
import { Input } from "./ui/input"

export function ExpensesList({ expenses }) {
  return (
    <Accordion type="single" collapsible>
      {expenses.map((expense) => (
        <AccordionItem
          key={expense.id}
          className="bg-slate-100 dark:bg-secondary border-b"
          value={expense.id}
        >
          <AccordionTrigger className="px-4 py-2 text-lg hover:no-underline flex">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <div className="category-icon-placeholder size-4 bg-black rounded-full shrink-0"></div>
                <BodyText className="hover:text-primary transition delay-100 text-start mb-0">
                  {expense.name}
                </BodyText>
              </div>
              <BodyText
                variant="small"
                className="pointer-events-none font-normal text-muted-foreground mb-0"
                tag="span"
                aria-hidden
              >
                {expense.date.getFullYear()}
              </BodyText>
            </div>
            <BodyText
              variant="small"
              tag="span"
              className="ml-auto self-start px-4 text-accent-foreground"
              aria-hidden
            >
              {formatCurrency(expense.amount)}
            </BodyText>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-6 flex flex-col gap-4 border-t md:flex-row">
            <ExpenseDetails expense={expense} />
            <ExpenseReceipt receiptUrl={expense.receiptUrl} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const ExpenseDetails = ({ expense }) => (
  <div className="description-list">
    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 [&>dt]:font-bold md:text-base">
      <dt>Description</dt>
      <dd>{expense.description}</dd>
      <dt>Category</dt>
      <dd>{expense.category}</dd>
      <dt>Amount</dt>
      <dd>{formatCurrency(expense.amount)}</dd>
      <dt>Purchaser</dt>
      <dd>{expense.purchaser}</dd>
      <dt>Contribution Weight</dt>
      <dd>{expense.contributionWeight}%</dd>
      <dt>Purchase date</dt>
      <dd>23 Jan 2024 {/* The actual date will be formated with date-fns */}</dd>
    </dl>
  </div>
)

const ExpenseReceipt = ({ receiptUrl }) => (
  <div className="receipt-container w-full h-full max-w-[22.5rem] sm:w-3/4 bg-slate-200 p-2 self-center md:self-auto md:-order-1 relative">
    <AspectRatio className="flex items-center justify-center" ratio={4 / 3}>
      {receiptUrl ? (
        <>
          <img
            className="h-full w-full object-contain flex"
            src={receiptUrl}
            alt="Expense receipt"
          />
          <Button
            className="rounded-full absolute bottom-0 right-4"
            variant="outline"
            size="icon"
            disabled
          >
            <span className="sr-only">Open image</span>
            <ZoomIn className="size-6" />
          </Button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full bg-slate-300 rounded">
          <div className="size-16 mb-4 bg-slate-400 rounded-full flex items-center justify-center">
            <ImageOff className="size-6" />
          </div>
          <p className="text-slate-600 font-medium mb-1">No Receipt Uploaded</p>
          <p className="text-slate-500 text-sm mb-4">Upload an image to view the receipt</p>
          <form
            className="max-w-[80%] flex gap-2 items-center"
            onSubmit={(event) => event.preventDefault()}
          >
            <Input disabled type="file" placeholder="test" />
            <Button disabled size="sm" variant="secondary" type="submit">
              Upload
            </Button>
          </form>
        </div>
      )}
    </AspectRatio>
  </div>
)

ExpenseDetails.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    purchaser: PropTypes.string.isRequired,
    contributionWeight: PropTypes.number.isRequired,
  }).isRequired,
}

ExpenseReceipt.propTypes = {
  receiptUrl: PropTypes.string,
}

ExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      purchaser: PropTypes.string.isRequired,
      contributionWeight: PropTypes.number.isRequired,
      receiptUrl: PropTypes.string,
    })
  ).isRequired,
}
