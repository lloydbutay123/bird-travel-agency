"use client";

import Container from "@/components/ui/Container";
import { blogs } from "@/data/blogs";
import { FormEvent, useState } from "react";

export default function TravelInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: String(formData.get("fullName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      inquiry: String(formData.get("inquiry") || "").trim(),
    };

    console.log("Submitting travel inquiry:", data);

    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured.");
      }

      const response = await fetch(`${apiUrl}/api/v1/travel-inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Travel inquiry response:", result);

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit inquiry");
      }

      form.reset();

      alert(
        "Your inquiry has been sent successfully! Please check your email for the PDF.",
      );
    } catch (error) {
      console.error("Travel inquiry error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#E8F6FC] px-4 py-12 sm:px-6 lg:px-8">
      <Container className="mx-auto max-w-5xl px-4 sm:px-6 py-20">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#E88127]">
            Travel Inquiry
          </p>

          <h1 className="font-tradegothic text-3xl font-bold text-[#1F2937] sm:text-4xl lg:text-5xl">
            Plan Your Trip
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Tell us about your travel plans and our team will help you create
            the perfect trip.
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_40px_rgba(58,169,220,0.12)]">
          {/* Top accent */}
          <div className="h-2 bg-[#3AA9DC]" />

          <form onSubmit={handleSubmit} className="p-5 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Full Name */}
              <FormField
                label="Full Name"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                required
              />

              {/* Email */}
              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              {/* Phone */}
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+63 9XX XXX XXXX"
                required
              />

              {/* Address */}
              <FormField
                label="Address"
                name="address"
                type="text"
                placeholder="Enter your address"
                required
              />

              {/* Destination */}
              <div>
                <label
                  htmlFor="inquiry"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Inquiry
                </label>

                <select
                  id="inquiry"
                  name="inquiry"
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-[#3AA9DC] focus:ring-2 focus:ring-[#3AA9DC]/20"
                >
                  <option value="">Select a inquiry</option>

                  {blogs.map((blog) => (
                    <option key={blog.id} value={blog.title}>
                      {blog.title}
                    </option>
                  ))}

                  <option value="Travel Insurance">Travel Insurance</option>
                  <option value="Passport Processing">
                    Passport Processing
                  </option>
                  <option value="M.I.C.E">M.I.C.E</option>
                  <option value="Van Rental">Van Rental</option>
                  <option value="Tour Guiding Services">
                    Tour Guiding Services
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Travel Date */}
              {/* <FormField
                label="Preferred Travel Date"
                name="travelDate"
                type="date"
                required
              /> */}

              {/* Travelers */}
              {/* <FormField
                label="Number of Travelers"
                name="travelers"
                type="number"
                placeholder="e.g. 4"
                min="1"
                required
              /> */}

              {/* Inquiry */}
              {/* <div className="md:col-span-2">
                <label
                  htmlFor="inquiry"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Tell Us About Your Trip
                </label>

                <textarea
                  id="inquiry"
                  name="inquiry"
                  rows={5}
                  placeholder="Tell us where you'd like to go, your preferred activities, budget, special requests, etc."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#3AA9DC] focus:ring-2 focus:ring-[#3AA9DC]/20"
                />
              </div> */}
            </div>

            {/* Footer */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
              <p className="text-xs leading-5 text-gray-500">
                By submitting this form, you agree to be contacted regarding
                your travel inquiry.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-[#E88127] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#d9701d] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
};

function FormField({
  label,
  name,
  type,
  placeholder,
  required,
  min,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#3AA9DC] focus:ring-2 focus:ring-[#3AA9DC]/20"
      />
    </div>
  );
}
