import { useState } from "react"
import { NAV_LINKS } from "@/lib/nav-links"
import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Pencil, UserRoundCog as UserSettingsIcon } from "lucide-react"
import { ThemeToggler } from "../../ThemeToggler"
import { LogoSmall } from "@/components/LogoSmall"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import AdminForm from "@/components/forms/AdminForm"
import { ADMIN_MOCK_DATA } from "@/lib/mock-data"

export function TabletNavigation() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openDialog = () => {
    setIsDialogOpen(true)
  }

  return (
    <>
      <div className="flex w-full justify-between">
        <div className="basis-1/4">
          <LogoSmall className="size-12" />
        </div>
        <nav className="flex items-center">
          <ul className="flex justify-center gap-6 flex-wrap">
            {NAV_LINKS.map((NavItem) => (
              <li className="flex items-center" key={NavItem.path}>
                <NavLink
                  className={({ isActive }) =>
                    cn("flex items-center gap-2 capitalize active:opacity-50", {
                      "text-primary": isActive,
                    })
                  }
                  to={NavItem.path}
                >
                  <NavItem.Icon className="size-5 text-current shrink-0" />
                  {NavItem.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="basis-1/4 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" variant="ghost" size="icon">
                <Avatar>
                  <AvatarImage src="#" />
                  <AvatarFallback className="bg-slate-300">AN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col" align="end">
              <DropdownMenuItem className="flex items-center gap-2" onSelect={openDialog}>
                <div className="flex items-center gap-1">
                  <UserSettingsIcon className="size-5" />
                  <span className="text-base font-bold">Admin Name</span>
                  <Pencil className="size-4" />
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="hidden" />
              <ThemeToggler className="ml-auto hidden" />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Admin Details</DialogTitle>
            <DialogDescription>
              Make changes to your admin profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <AdminForm defaultValues={ADMIN_MOCK_DATA} />
        </DialogContent>
      </Dialog>
    </>
  )
}
