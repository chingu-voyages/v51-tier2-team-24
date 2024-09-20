import { cn } from "@/lib/utils"
import PropTypes from "prop-types"

export function AppFooter({ className }) {
  return (
    <footer className={cn("min-h-16 flex items-center justify-center p-4 border-t", className)}>
      &copy; {new Date().getFullYear()}, All rights reserved
    </footer>
  )
}

AppFooter.propTypes = {
  className: PropTypes.string,
}
