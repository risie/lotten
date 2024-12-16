"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactSchema } from "../lib/schemas";
import { useRouter } from "next/navigation";

type ContactFormInputs = z.infer<typeof contactSchema>;

// Define a type for the validation errors
type ValidationError = {
  path: (string | number)[];
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle validation errors
        if (result.errors) {
          (result.errors as ValidationError[]).forEach((error) => {
            setError(error.path[0] as keyof ContactFormInputs, {
              type: "manual",
              message: error.message,
            });
          });
        } else {
          console.error(result.message);
        }
      } else {
        console.log("Email sent successfully:", result.message);
        router.push("/");
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <label className="input flex items-center gap-2">Namn</label>
      <input
        {...register("name")}
        type="text"
        className={`input w-full input-bordered  ${errors.name ? "input-error" : ""}`}
        placeholder="namn"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <label className="input flex items-center gap-2">Email</label>
      <input
        {...register("email")}
        type="text"
        className={`input w-full input-bordered ${errors.email ? "input-error" : ""}`}
        placeholder="exempel@mail.com"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <label className="input flex items-center gap-2">Ämne</label>
      <input
        {...register("subject")}
        type="text"
        className={`input input-bordered w-full ${errors.subject ? "input-error" : ""}`}
        placeholder="Köpa kolonilott"
      />
      {errors.subject && (
        <p className="text-red-500">{errors.subject.message}</p>
      )}

      <label className="input flex items-center gap-2">Meddelande</label>

      <textarea
        {...register("message")}
        className={`textarea textarea-bordered w-full ${errors.message ? "textarea-error" : ""}`}
        placeholder="Meddelande"
      />
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}
      <div className="flex flex-col">
        <button disabled={isSubmitting} type="submit" className="btn my-2">
          Skicka meddelande
        </button>
        <button
          onClick={() => router.push("/")}
          type="button"
          className="btn my-2"
        >
          Ta mig till startsidan
        </button>
      </div>
    </form>
  );
}
