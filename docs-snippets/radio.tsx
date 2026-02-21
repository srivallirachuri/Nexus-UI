"use client"

import React from "react"

/**
 * Utility: cn
 */
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

/**
 * Type Definitions
 */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  /** Optional visual scale on hover */
  hoverScale?: number
  /** Optional visual scale on active/tap */
  tapScale?: number
  /** Enable default hover/tap effects */
  interactive?: boolean
  /** Custom color for hover border */
  hoverColor?: string
}

/**
 * Component Implementation
 */
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      className = "",
      disabled = false,
      id,
      checked,
      defaultChecked,
      onChange,
      hoverScale = 1.05,
      tapScale = 0.95,
      interactive = false,
      hoverColor,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId()
    const [isChecked, setIsChecked] = React.useState(checked || defaultChecked || false)

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked)
      }
    }, [checked])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // For radio buttons, we only update if it becomes checked.
      // Unlike checkboxes, radios can't be unchecked by clicking them again.
      if (checked === undefined && e.target.checked) {
        setIsChecked(true)
      }
      onChange?.(e)
    }

    return (
      <div className={cn(
        "flex items-center space-x-2.5 group",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )}>
        <div className="relative flex items-center justify-center h-5 w-5">
          <input
            ref={ref}
            type="radio"
            id={inputId}
            disabled={disabled}
            checked={isChecked}
            onChange={handleChange}
            className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer disabled:cursor-not-allowed"
            {...props}
          />
          
          <div
            className={cn(
              "w-full h-full rounded-full border-2 transition-all duration-200 flex items-center justify-center",
              isChecked 
                ? "border-indigo-600 ring-4 ring-indigo-500/10" 
                : "bg-transparent border-slate-300 dark:border-slate-700",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500/20 peer-focus-visible:border-indigo-500",
              !disabled && (interactive || hoverScale) && "group-hover:scale-[1.05]",
              !disabled && "group-hover:border-indigo-500",
              !disabled && (interactive || tapScale) && "group-active:scale-[0.95]",
              className
            )}
            style={{
              borderColor: (!disabled && hoverColor && isChecked) ? hoverColor : undefined,
              transitionDelay: isChecked ? "0s" : "0.05s"
            }}
          >
            <div
              className={cn(
                "w-2.5 h-2.5 rounded-full bg-indigo-600 transition-all duration-300 transform",
                isChecked ? "scale-100 opacity-100" : "scale-0 opacity-0"
              )}
            />
          </div>
        </div>
        
        {label && (
          <label 
            htmlFor={inputId} 
            className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer select-none group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Radio.displayName = "Radio"

export { Radio }

/**
 * Example Usage:
 * 
 * <Radio name="plan" label="Basic" defaultChecked />
 * 
 * <Radio name="plan" label="Premium" />
 */
