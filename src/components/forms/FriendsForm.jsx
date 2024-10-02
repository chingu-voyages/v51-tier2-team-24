import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";

export function FriendForm({ friendDefaultData = {} }) {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <Input
        type="text"
        placeholder="First Name"
        defaultValue={friendDefaultData?.firstName ?? ""}
      />
      <Input
        type="text"
        placeholder="Last Name"
        defaultValue={friendDefaultData?.lastName ?? ""}
      />
      <Label className="space-y-1 flex items-center gap-4 text-muted-foreground">
        <span className="shrink-0">Upload avatar</span>
        <Input disabled type="file" placeholder="test" />
      </Label>
      <Button className="w-full" type="submit">
        Submit
      </Button>
    </form>
  );
}

FriendForm.propTypes = {
  friendDefaultData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
};
