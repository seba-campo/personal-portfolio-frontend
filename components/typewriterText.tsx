import { useEffect, useState } from "react";

export const TypewriterText = ({ text, speed = 50, className = "" }: { text: string; speed?: number; className?: string }) => {
    const [displayText, setDisplayText] = useState("")
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        setDisplayText("")
        setIsComplete(false)
        let i = 0
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.slice(0, i + 1))
                i++
            } else {
                setIsComplete(true)
                clearInterval(timer)
            }
        }, speed)

        return () => clearInterval(timer)
    }, [text, speed])

    return (
        <span className={className}>
            {displayText}
            {!isComplete && <span className="animate-pulse">|</span>}
        </span>
    )
}
