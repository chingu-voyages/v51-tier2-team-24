import { NAV_LINKS } from "@/lib/nav-links"
import { NavLink } from "react-router-dom"
import { cn, getInitials } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const MOCK_GROUP_LIST = [
  { name: "Bali Trip", avatar: "#", id: "random_id_1" },
  { name: "Hawaii Trip", avatar: "#", id: "random_id_2" },
  { name: "Mike's Birthday", avatar: "#", id: "random_id_3" },
  { name: "John's Birthday", avatar: "#", id: "random_id_4" },
  { name: "Escape Room", avatar: "#", id: "random_id_5" },
]

export function SidenavLists() {
  return (
    <>
      <nav className="pl-4">
        <ul className="space-y-3">
          {NAV_LINKS.map((NavItem) => (
            <li className="flex items-center" key={NavItem.path}>
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 capitalize active:opacity-50 hover:text-primary transition-all duration-300",
                    {
                      "text-primary": isActive,
                    }
                  )
                }
                to={NavItem.path}
                end
              >
                <NavItem.Icon className="size-5 text-current shrink-0" />
                {NavItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <section className="pl-4">
        <h2 className="font-bold mb-4">Your recent groups</h2>
        <ul className="space-y-2">
          {MOCK_GROUP_LIST.map((group) => (
            <li key={group.id}>
              <NavLink
                to={`/app/groups/${group.id}`}
                className={({ isActive }) =>
                  cn(
                    "flex gap-4 items-center capitalize active:opacity-50 hover:text-primary transition-all duration-300",
                    {
                      "text-primary": isActive,
                    }
                  )
                }
              >
                <Avatar className="size-8">
                  <AvatarImage src={group.avatar} />
                  <AvatarFallback className="bg-slate-300 text-foreground">
                    {getInitials(group.name)}
                  </AvatarFallback>
                </Avatar>
                {group.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
