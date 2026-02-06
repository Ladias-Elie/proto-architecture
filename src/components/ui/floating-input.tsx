'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

interface FloatingInputProps extends React.ComponentProps<"input"> {
  label: string
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      setHasValue(e.target.value.length > 0)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
      props.onChange?.(e)
    }

    const isFloating = isFocused || hasValue

    return (
      <div className="relative">
        <input
          type={type}
          id={id}
          className={cn(
            "peer w-full h-14 px-4 pt-5 pb-2 border-2 bg-background text-foreground font-sans",
            "border-border transition-all duration-200",
            "focus:border-accent focus:outline-none",
            "placeholder:text-transparent",
            className
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 transition-all duration-200 pointer-events-none",
            "text-muted-foreground font-sans",
            isFloating
              ? "top-2 text-[0.65rem] font-mono uppercase tracking-[0.1em] text-accent"
              : "top-1/2 -translate-y-1/2 text-sm"
          )}
        >
          {label}
        </label>
        {/* Focus indicator line */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ease-out",
            isFocused ? "w-full" : "w-0"
          )}
        />
      </div>
    )
  }
)
FloatingInput.displayName = "FloatingInput"

interface FloatingTextareaProps extends React.ComponentProps<"textarea"> {
  label: string
}

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false)
      setHasValue(e.target.value.length > 0)
    }
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(e.target.value.length > 0)
      props.onChange?.(e)
    }

    const isFloating = isFocused || hasValue

    return (
      <div className="relative">
        <textarea
          id={id}
          className={cn(
            "peer w-full min-h-[160px] px-4 pt-8 pb-4 border-2 bg-background text-foreground font-sans resize-none",
            "border-border transition-all duration-200",
            "focus:border-accent focus:outline-none",
            "placeholder:text-transparent",
            className
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 transition-all duration-200 pointer-events-none",
            "text-muted-foreground font-sans",
            isFloating
              ? "top-3 text-[0.65rem] font-mono uppercase tracking-[0.1em] text-accent"
              : "top-6 text-sm"
          )}
        >
          {label}
        </label>
        {/* Focus indicator line */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ease-out",
            isFocused ? "w-full" : "w-0"
          )}
        />
      </div>
    )
  }
)
FloatingTextarea.displayName = "FloatingTextarea"

export { FloatingInput, FloatingTextarea }
