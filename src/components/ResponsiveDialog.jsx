import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import PropTypes from "prop-types"

export function ResponsiveDialog({ trigger, dialogTitle, dialogDescription, children }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          {dialogDescription && <DialogDescription>{dialogDescription}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

ResponsiveDialog.propTypes = {
  trigger: PropTypes.node.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  dialogDescription: PropTypes.string,
  children: PropTypes.node.isRequired,
}
