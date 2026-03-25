'use client'

import { forwardRef } from 'react'
import { AlertCircle } from 'lucide-react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  icon?: React.ReactNode
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="form-label">
          {label}
          {props.required && <span className="text-orange ml-1">*</span>}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`form-input ${icon ? 'pl-9' : ''} ${
              error ? 'border-red-400/60 focus:border-red-400 focus:ring-red-400/30' : ''
            } ${className}`}
            {...props}
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

FormInput.displayName = 'FormInput'
export default FormInput