import { useParams } from "react-router-dom"

export function ExpenseGroupPage() {
  const { groupId } = useParams()
  return <div>Expense Group - {groupId}</div>
}
