import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"
import PropTypes from "prop-types"

export function GroupInfoWidget({ groupName, description, amount }) {
  return (
    <Card className="group-details-card flex">
      <CardHeader className="flex flex-row gap-4 space-y-0">
        <div className="relative self-start">
          <Avatar className="h-20 w-20">
            <AvatarImage src="#" />
            <AvatarFallback className="text-4xl bg-slate-300 dark:text-secondary">
              {groupName.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <Badge className="justify-center absolute inset-x-0 bottom-0" variant="secondary">
            Travel
          </Badge>
        </div>

        <div className="space-y-1.5 flex flex-col justify-between flex-1">
          <CardTitle className="text-2xl font-b">{groupName}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <p className="text-green-600 leading-none">Allotted: {formatCurrency(amount)}</p>
        </div>
      </CardHeader>
    </Card>
  )
}

GroupInfoWidget.propTypes = {
  groupName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}
