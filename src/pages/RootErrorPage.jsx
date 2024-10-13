import { Link } from "react-router-dom"

export default function RootErrorPage() {
  return (
    <>
      <h1>Root Error Page</h1>
      <p>Oops! Something went wrong</p>
      <Link to="/app/dashboard">Go to Dashboard</Link>
    </>
  )
}
