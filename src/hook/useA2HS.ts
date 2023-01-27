import { useEffect, useState } from "react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

const useA2HS = () => {
  const [
    promtEvent,
    setPromptEvent,
  ] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault()
      setPromptEvent(e)
    }

    ;(window as any).addEventListener("beforeinstallprompt", handler)

    return () => {
      ;(window as any).removeEventListener("beforeinstallprompt", handler)
    }
  }, [])

  const clearPromtEvent = () => {
    setPromptEvent(null)
  }

  const install = () => {
    promtEvent?.prompt()
    // Wait for the user to respond to the prompt
    promtEvent?.userChoice.then(choiceResult => {
      clearPromtEvent()
    })
  }

  return { promtEvent, install, clearPromtEvent }
}

export default useA2HS
