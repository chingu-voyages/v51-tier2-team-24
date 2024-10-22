import { Button } from "@/components/ui/button"
import { X as Delete } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BodyText } from "@/components/Typography"
import PropTypes from "prop-types"
import { ParticipantType } from "@/lib/mock-data"

// eslint-disable-next-line react/prop-types
export function SelectedParticipantsList({ participants, onDelete }) {
  return (
    <ul className="flex gap-4 flex-wrap items-center">
      {participants.map((participant) => (
        <li key={participant.id} className="flex gap-2 items-center capitalize">
          <Card className="p-2 flex gap-2 items-center">
            <Avatar className="size-8">
              <AvatarImage src="#" />
              <AvatarFallback className="bg-slate-300 text-foreground dark:text-secondary">
                {`${participant.firstName[0]}${participant.lastName[0]}`}
              </AvatarFallback>
            </Avatar>
            <BodyText
              variant="small"
              tag="span"
              className="font-semibold leading-none mb-0"
            >{`${participant.firstName} ${participant.lastName}`}</BodyText>
            <Button
              // TODO Toast message: you cannot delete yourself
              disabled={participant.role === "admin"}
              onClick={() => onDelete(participant.id)}
              size="icon"
              variant="ghost"
              className="rounded-full group"
            >
              <span className="sr-only">delete</span>
              <Delete className="size-4 group-hover:text-red-600" />
            </Button>
          </Card>
        </li>
      ))}
    </ul>
  )
}

SelectedParticipantsList.propTypes = {
  participants: PropTypes.arrayOf(ParticipantType).isRequired,
}
