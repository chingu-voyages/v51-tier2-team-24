import { Pencil } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { cn, getNameDetails } from "@/lib/utils"
import PropTypes from "prop-types"
import { ResponsiveDialog } from "./ResponsiveDialog"
import AdminForm from "./forms/AdminForm"
import { useLocalStorage } from "@uidotdev/usehooks"
import { LOCAL_STORAGE_KEYS } from "@/lib/constants"

export function AdminCard({ className }) {
  const [admin] = useLocalStorage(LOCAL_STORAGE_KEYS.ADMIN)
  const { fullName, initials } = getNameDetails({
    firstName: admin.firstName,
    lastName: admin.lastName,
  })
  return (
    <Card className={cn("p-2 border flex items-center gap-4", className)}>
      <Avatar>
        <AvatarImage src="#" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <p className="font-bold mr-auto">{fullName}</p>
      <ResponsiveDialog
        dialogTitle="Edit Admin Details"
        dialogDescription="Make changes to your admin profile here. Click save when you're done."
        trigger={
          <Button size="icon" variant="ghost" className="rounded-full shrink-0">
            <Pencil className="size-4" />
          </Button>
        }
      >
        <AdminForm defaultValues={admin} />
      </ResponsiveDialog>
    </Card>
  )
}

AdminCard.propTypes = {
  className: PropTypes.string,
}
