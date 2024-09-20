import { AppTopnav } from "@/components/navigation/AppTopnav"
import { AppSidenav } from "@/components/navigation/AppSidenav"
import { Outlet } from "react-router-dom"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { useEffect, useRef, useState } from "react"
import { AppFooter } from "@/components/AppFooter"

export default function AppLayout() {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const navbarRef = useRef()
  const [navbarHeight, setNavbarHeight] = useState(0)
  const sidebarWidth = 80

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen lg:flex-row relative xl:container xl:mx-auto">
      {isDesktop ? (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto container mx-auto pointer-events-none">
          <AppSidenav
            className={`pointer-events-auto absolute top-0 left-0 h-screen border-r w-${sidebarWidth} overflow-y-auto`}
          />
        </div>
      ) : (
        <AppTopnav ref={navbarRef} />
      )}
      <div
        className={`flex flex-col flex-grow lg:ml-${sidebarWidth} lg:pt-0`}
        style={!isDesktop ? { paddingTop: `${navbarHeight}px` } : { paddingTop: 0 }}
      >
        <main className="flex-1 px-4 overflow-y-auto py-4">
          <Outlet />
        </main>
        <AppFooter />
      </div>
    </div>
  )
}
