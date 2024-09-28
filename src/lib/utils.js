import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { storage } from "@/FirebaseConfig"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getInitials(name) {
  const nameArray = name.split(" ")
  const initials = nameArray.map((word) => word.charAt(0).toUpperCase()).join("")
  return initials
}

export function totalExpenses(array) {
  let total = 0
  array.forEach((e) => {
    total += e.amount
  })
  return total
}

export function formatCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: number % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(number)
}


export const uploadReceipt = async (file) => {
  if(!file) return;

  const storageRef = ref(storage, `images/${file.name}`)
  try{
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.log('Error uploading file:', error);
  }
}

/* 
name possible types:
  * string
  * {firstName: string, lastName: string}
*/
export function getNameDetails(name) {
  let fullName = ""
  let initials = ""

  if (typeof name === "string") {
    fullName = name.trim()
    initials = name
      .trim()
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase()
  } else if (typeof name === "object" && name.firstName && name.lastName) {
    fullName = `${name.firstName} ${name.lastName}`.trim()
    initials = (name.firstName[0] + name.lastName[0]).toUpperCase()
  } else {
    throw new Error("Invalid name format")
  }

  return { fullName, initials }
}
