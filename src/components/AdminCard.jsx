import { Pencil } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { cn, getInitials } from "@/lib/utils"
import PropTypes from "prop-types"

const MOCK_ADMIN_NAME = "Alex Norman"

export function AdminCard({ className }) {
  return (
    <Card className={cn("p-2 border flex items-center gap-4", className)}>
      <Avatar>
        <AvatarImage src="#" />
        <AvatarFallback>{getInitials(MOCK_ADMIN_NAME)}</AvatarFallback>
      </Avatar>
      <p className="font-bold mr-auto">{MOCK_ADMIN_NAME}</p>
      <Button size="icon" variant="ghost" className="rounded-full shrink-0">
        <Pencil className="size-4" />
      </Button>
    </Card>
  )
}

AdminCard.propTypes = {
  className: PropTypes.string,
}
