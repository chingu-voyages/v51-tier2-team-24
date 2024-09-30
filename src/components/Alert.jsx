import PropTypes from "prop-types"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function Alert({ trigger, dialogTitle, dialogDescription, onSubmit }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{dialogTitle || "Are you absolutely sure?"}</AlertDialogTitle>
          <AlertDialogDescription>
            {dialogDescription || "This action cannot be undone."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-600 hover:bg-red-600/90" onClick={onSubmit}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

Alert.propTypes = {
  trigger: PropTypes.node.isRequired,
  dialogTitle: PropTypes.string,
  dialogDescription: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}
