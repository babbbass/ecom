import React from "react"
import { Button } from "./ui/button"
import clsx from "clsx"

type CustomButtonProps = {
  ariaLabel?: string
  onClick?: () => void
  textButton: string
  verticalMargin?: number
  width?: number | string
  className?: string
  type?: "button" | "submit" | "reset"
}

export function CustomButton({
  type = "button",
  textButton,
  verticalMargin = 10,
  width = "auto",
  className = "",
  onClick,
}: CustomButtonProps) {
  const marginYClasses: { [key: number]: string } = {
    4: "my-4",
    5: "my-5",
    8: "my-8",
    10: "my-10",
    20: "my-20",
  }

  const widthClasses: { [key: number | string]: string } = {
    25: "w-1/4",
    33: "w-1/3",
    50: "w-1/2",
    100: "w-full",
  }

  const marginY = marginYClasses[verticalMargin] || "my-10"
  const widthButton = widthClasses[width] || "w-auto"
  return (
    <Button
      type={type}
      className={clsx(
        `bg-blue-600 border border-blue-600 text-white font-bold ${marginY} ${widthButton} mx-auto rounded-full ${className} hover:bg-blue-600/10 hover:text-blue-600 p-3`
      )}
      onClick={onClick}
    >
      {textButton}
    </Button>
  )
}
