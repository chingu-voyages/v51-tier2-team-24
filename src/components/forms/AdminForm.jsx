/* eslint-disable react/prop-types */

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function AdminForm({
  defaultValues = {},
  customSubmitText = "Submit",
  onSubmit
}) {
  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={onSubmit}
    >
      <Label className="">
        <span className="sr-only">first name</span>
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          defaultValue={defaultValues?.firstName ?? ""}
          required
        />
      </Label>
      <Label className="">
        <span className="sr-only">last name</span>
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          defaultValue={defaultValues?.lastName ?? ""}
          required
        />
      </Label>
      <Label className="md:col-span-full">
        <span className="sr-only">email</span>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          defaultValue={defaultValues?.email ?? ""}
          required
        />
      </Label>
      <Button className="md:col-span-full" href="/app/first-group">
        {customSubmitText}
      </Button>
    </form>
  );
}
