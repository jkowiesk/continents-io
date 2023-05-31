import { AlertCircle, FileWarning, Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ContinentError() {
  return (
    <Alert
      variant="destructive"
      className="fixed inset-x-0 top-24 mx-auto w-64"
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Countries for chosen continent not found
      </AlertDescription>
    </Alert>
  )
}
