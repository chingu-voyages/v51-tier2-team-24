/* eslint-disable react/prop-types */
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function AdminForm({ defaultValues = {}, customSubmitText = "Submit" }) {
  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault()
        // update admin details
      }}
    >
      <Label className="">
        <span className="sr-only">first name</span>
        <Input type="text" placeholder="firstName" defaultValue={defaultValues?.firstName ?? ""} />
      </Label>
      <Label className="">
        <span className="sr-only">last name</span>
        <Input type="text" placeholder="lastName" defaultValue={defaultValues?.lastName ?? ""} />
      </Label>
      <Label className="md:col-span-full">
        <span className="sr-only">email</span>
        <Input type="email" placeholder="Email" defaultValue={defaultValues?.email ?? ""} />
      </Label>
      <Button className="md:col-span-full">{customSubmitText}</Button>
    </form>
  )
}
