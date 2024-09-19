import { Pencil } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { cn } from "@/lib/utils"
import PropTypes from "prop-types"

export function AdminCard({ className }) {
  return (
    <Card className={cn("p-4 border flex items-center gap-4", className)}>
      <Avatar>
        <AvatarImage src="#" />
        <AvatarFallback>AN</AvatarFallback>
      </Avatar>
      <p className="font-bold mr-auto">Admin Name</p>
      <Button size="icon" variant="ghost" className="rounded-full shrink-0">
        <Pencil className="size-4" />
      </Button>
    </Card>
  )
}

AdminCard.propTypes = {
  className: PropTypes.string.isRequired,
}
