"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import FormInput from "../forms/FormInput"
import DatePickerField from "../forms/DatePickerField";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  vehicleMake: z.string().min(2),
  vehicleModel: z.string().min(2),
  year: z.string(),
  issue: z.string().min(10),
  date: z.date(),
});

type BookingFormData = z.infer<typeof schema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          vehicle: `${data.vehicleMake} ${data.vehicleModel} (${data.year})`,
          issue: data.issue,
          date: data.date.toLocaleDateString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-8 md:p-10 space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <FormInput label="Full Name" name="name" register={register} error={errors.name} />
        <FormInput label="Phone Number" name="phone" register={register} error={errors.phone} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <FormInput label="Email" name="email" type="email" register={register} error={errors.email} />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <FormInput label="Make" name="vehicleMake" register={register} error={errors.vehicleMake} />
        <FormInput label="Model" name="vehicleModel" register={register} error={errors.vehicleModel} />
        <FormInput label="Year" name="year" register={register} error={errors.year} />
      </div>

      <DatePickerField control={control} name="date" label="Preferred Date &amp; Time" />

      <FormInput
        label="Describe the issue (e.g. no start, dashboard lights, AC not cooling)"
        name="issue"
        register={register}
        error={errors.issue}
        textarea
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary hover:bg-orange-600 transition-colors text-white font-medium py-6 rounded-3xl text-lg flex items-center justify-center gap-3 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={24} />
            SENDING...
          </>
        ) : (
          "CONFIRM APPOINTMENT"
        )}
      </button>

      {success && (
        <div className="bg-green-100 text-green-800 p-4 rounded-2xl text-center font-medium">
          Appointment request sent! We’ll confirm within 10 minutes.
        </div>
      )}
    </form>
  );
}