import { useMediaQuery } from "@/hooks/useMediaQuery"
import { MobileNavigation } from "./components/MobileNavigation"
import { TabletNavigation } from "./components/TabletNavigation"
import PropTypes from "prop-types"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export const AppTopnav = forwardRef(({ className }, ref) => {
  const isTablet = useMediaQuery("(min-width: 768px)")

  return (
    <header
      ref={ref}
      className={cn(
        "min-h-16 p-4 md:flex md:items-center fixed inset-x-0 top-0 bg-white/60 backdrop-blur-lg transition-all border-b",
        className
      )}
    >
      {isTablet ? <TabletNavigation /> : <MobileNavigation />}
    </header>
  )
})

AppTopnav.displayName = "AppTopnav"

AppTopnav.propTypes = {
  className: PropTypes.string,
}
