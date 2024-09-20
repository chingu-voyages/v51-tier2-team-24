import { Sun } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import PropTypes from "prop-types"

export function ThemeToggler({ className }) {
  return (
    <Button disabled className={cn("rounded-full", className)} size="icon" variant="ghost">
      <span className="sr-only">Theme toggler placeholder</span> <Sun />
    </Button>
  )
}

ThemeToggler.propTypes = {
  className: PropTypes.string,
}
