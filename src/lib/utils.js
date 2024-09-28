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

export function totalExpenses(array){
  let total = 0;
  array.forEach((e) => {
    total += e.amount;
  });
  return total;
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