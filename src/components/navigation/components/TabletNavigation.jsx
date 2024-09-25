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
import { Button } from "../../ui/button"
import { UserRoundCog as UserSettingsIcon } from "lucide-react"
import { ThemeToggler } from "../../ThemeToggler"
import { LogoSmall } from "@/components/LogoSmall"

export function TabletNavigation() {
  return (
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
            {/* This will serve as an 'edit admin details trigger'. A corresponding modal has to be created */}
            <DropdownMenuItem className="flex items-center gap-2">
              <UserSettingsIcon className="size-5" />
              <span className="text-base font-bold">Admin Name</span>
            </DropdownMenuItem>

            {/* These components are currently hidden but will be displayed once the theme toggler is ready. */}
            <DropdownMenuSeparator className="hidden" />
            <ThemeToggler className="ml-auto hidden" />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
