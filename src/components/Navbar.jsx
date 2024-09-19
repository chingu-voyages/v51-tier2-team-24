import { useMediaQuery } from "@/hooks/useMediaQuery"
import { MobileMenu } from "./MobileMenu"

export function Navbar() {
  const isTablet = useMediaQuery("(min-width: 768px)")

  return (
    <header className="min-h-16 p-4 border-b">
      {isTablet ? (
        <div>Tablet</div>
      ) : (
        <div className="flex items-center justify-between">
          <MobileMenu />
          <div className="size-8 bg-black rounded-full">
            <span className="sr-only">icon placeholder</span>
          </div>
        </div>
      )}
    </header>
  )
}
