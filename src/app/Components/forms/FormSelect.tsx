'use client'

import { forwardRef } from 'react'
import { AlertCircle, ChevronDown } from 'lucide-react'

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, options, placeholder, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="form-label">
          {label}
          {props.required && <span className="text-orange ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            className={`form-input appearance-none pr-9 ${
              error ? 'border-red-400/60 focus:border-red-400' : ''
            } ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-navy text-white/50">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-navy text-white">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
          />
        </div>
        {error && (
          <div className="flex items-center gap-1.5 text-red-400/90 text-xs font-body">
            <AlertCircle size={12} />
            {error}
          </div>
        )}
      </div>
    )
  }
)

FormSelect.displayName = 'FormSelect'
export default FormSelect