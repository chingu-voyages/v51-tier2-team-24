import PropTypes from "prop-types"
import { cn } from "@/lib/utils"
import { Logo } from "../Logo"
import { Link } from "react-router-dom"
import { AdminCard } from "../AdminCard"
import { SidenavLists } from "./components/SidenavLists"

export function AppSidenav({ className }) {
  return (
    <header className={cn("bg-blue-50 p-4 space-y-7", className)}>
      <Link to="/app">
        <Logo className="w-[11.25rem] h-[3rem]" />
        <span className="sr-only">Dashboard</span>
      </Link>
      <AdminCard />
      <SidenavLists />
    </header>
  )
}

AppSidenav.propTypes = {
  className: PropTypes.string,
}
