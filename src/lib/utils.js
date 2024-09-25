import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getInitials(name) {
  const nameArray = name.split(" ")
  const initials = nameArray.map((word) => word.charAt(0).toUpperCase()).join("")
  return initials
}
