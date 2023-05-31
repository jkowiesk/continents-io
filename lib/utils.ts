import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const CONTINENTS_CODES = new Map(
  Object.entries({
    europe: "EU",
    asia: "AS",
    africa: "AF",
    "north america": "NA",
    "south america": "SA",
    oceania: "OC",
    antarctica: "AN",
  })
)

const options = {
  style: "decimal",
  useGrouping: true,
  maximumFractionDigits: 2,
}

export function formatNumber(number: number) {
  return number.toLocaleString("en-US", options)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
