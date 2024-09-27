import { cn } from "@/lib/utils"
import PropTypes from "prop-types"
import { Card, CardContent, CardHeader } from "./ui/card"
import { BodyText } from "./Typography"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Pencil } from "lucide-react"

export function FriendCard({ firstName, lastName, avatarUrl, actions, content, className }) {
  return (
    <Card className={cn("p-4 flex flex-col gap-4 justify-between h-full", className)}>
      <CardHeader className="p-0">
        <div className="flex justify-between">
          <div className="flex flex-row-reverse items-center gap-2">
            <BodyText
              tag="h2"
              className="mb-0 md:mb-0 text-lg md:text-xl font-semibold"
            >{`${firstName} ${lastName}`}</BodyText>
            <Avatar className="size-12 shrink-0">
              <AvatarImage src={avatarUrl} />
              <AvatarFallback className="bg-slate-300 text-foreground dark:text-secondary">
                {`${firstName[0]}${lastName[0]}`}
              </AvatarFallback>
            </Avatar>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="rounded-full" variant="ghost" size="icon">
                <span className="sr-only">Edit</span> <Pencil className="size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto flex flex-col gap-2" align="end">
              {actions}
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <CardContent className="p-0">{content}</CardContent>
    </Card>
  )
}

FriendCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  actions: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  className: PropTypes.string,
}
