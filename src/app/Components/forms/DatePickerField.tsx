'use client'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar, AlertCircle } from 'lucide-react'
import { getMinBookingDate, isWeekend } from '@/lib/utils'

interface DatePickerFieldProps {
  label: string
  value: Date | null
  onChange: (date: Date | null) => void
  error?: string
  required?: boolean
}

export default function DatePickerField({
  label,
  value,
  onChange,
  error,
  required,
}: DatePickerFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="form-label">
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none z-10">
          <Calendar size={15} />
        </div>
        <DatePicker
          selected={value}
          onChange={onChange}
          minDate={getMinBookingDate()}
          filterDate={(date) => !isWeekend(date)}
          placeholderText="Select a date"
          dateFormat="dd MMMM yyyy"
          className={`form-input pl-9 cursor-pointer w-full ${
            error ? 'border-red-400/60' : ''
          }`}
          wrapperClassName="w-full"
          calendarClassName="!font-body"
          showPopperArrow={false}
          autoComplete="off"
        />
      </div>
      {error && (
        <div className="flex items-center gap-1.5 text-red-400/90 text-xs font-body">
          <AlertCircle size={12} />
          {error}
        </div>
      )}
      <p className="text-white/30 text-xs font-body">
        Monday – Saturday only. We are closed on Sundays.
      </p>
    </div>
  )
}