import { useParams } from "react-router-dom"

export function ExpenseGroupEditPage() {
  const { groupId } = useParams()
  return <div>Expense Group Edit Page - {groupId}</div>
}
