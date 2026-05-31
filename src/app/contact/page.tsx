import React from "react";
import { ContactForm } from "@/modules/Contact/ContactForm";

/**
 * Contact page – renders the contact form.
 * The page uses the modern layout styles consistent with the rest of the app.
 */
export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <ContactForm />
    </main>
  );
}
