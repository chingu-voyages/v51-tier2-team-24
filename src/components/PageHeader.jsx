import { cn } from "@/lib/utils"
import { BodyText, Heading } from "./Typography"
import PropTypes from "prop-types"

export function PageHeader({ children, subheading, headerAction, className }) {
  return (
    <div className={cn("mb-4 md:mb-6 flex justify-between gap-4", className)}>
      <div className="gap-1 md:gap-2">
        <Heading className="mb-0 md:mb-0" tag="h1">
          {children}
        </Heading>
        <BodyText variant="small" className="text-muted-foreground mb-0">
          {subheading}
        </BodyText>
      </div>
      {headerAction}
    </div>
  )
}

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  subheading: PropTypes.string,
  headerAction: PropTypes.node,
  className: PropTypes.string,
}
