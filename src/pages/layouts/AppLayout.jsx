import { Outlet } from "react-router-dom"
import { Navbar } from "@/components/NavBar"

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container px-4">
        <Outlet />
      </main>
      <footer className="px-4">footer</footer>
    </div>
  )
}
