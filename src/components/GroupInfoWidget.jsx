import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn, formatCurrency } from "@/lib/utils"
import PropTypes from "prop-types"
import { BodyText } from "./Typography"

export function GroupInfoWidget({ groupInfo, actions, className }) {
  return (
    <Card className={cn("group-details-card flex", className)}>
      <CardHeader className="flex flex-row gap-4 space-y-0 w-full">
        <div className="relative self-start">
          <Avatar className="h-20 w-20">
            <AvatarImage src="#" />
            <AvatarFallback className="text-4xl bg-slate-300 dark:text-secondary">
              {groupInfo.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <Badge
            className="justify-center absolute inset-x-0 bottom-0 pointer-events-none"
            variant="secondary"
          >
            Travel
          </Badge>
        </div>

        <div className="space-y-1.5 flex flex-col justify-between flex-1">
          <CardTitle className="text-2xl font-b">{groupInfo.name}</CardTitle>
          <CardDescription>{groupInfo.description}</CardDescription>
          <BodyText variant="small" tag="p" className="text-green-600 leading-none">
            Allotted: {formatCurrency(+groupInfo.totalBudget)}
          </BodyText>
        </div>
        <div className="ml-auto">{actions}</div>
      </CardHeader>
    </Card>
  )
}

GroupInfoWidget.propTypes = {
  groupInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    totalBudget: PropTypes.number.isRequired,
  }),
  actions: PropTypes.node,
  className: PropTypes.string,
}
