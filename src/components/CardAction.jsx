import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { forwardRef } from "react"
import PropTypes from "prop-types"
import { cn } from "@/lib/utils"

export const CardAction = forwardRef(function (
  { children, className, isResponsive, ...rest },
  ref
) {
  return (
    <Button
      {...rest}
      ref={ref}
      className={cn(
        "leading-none rounded-full py-1 md:min-w-24 h-auto group md:gap-2 active:opacity-50",
        { "max-md:size-8": isResponsive },
        className
      )}
      variant="outline"
    >
      {isResponsive ? (
        <>
          <span className="hidden md:block">{children}</span>
          <ChevronDown className="size-4 transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180" />
        </>
      ) : (
        <span>{children}</span>
      )}
    </Button>
  )
})

CardAction.displayName = "CardAction"

CardAction.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isResponsive: PropTypes.bool,
}
