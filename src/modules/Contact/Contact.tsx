"use client";

import { ContactForm } from "./ContactForm";
import {
  LocationEdit,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Pin,
} from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Contact() {
  const introRef = useRef<HTMLDivElement>(null);

  // GSAP fade‑in / slide‑up for the intro block
  useEffect(() => {
    if (introRef.current) {
      gsap.from(introRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);
  return (
    <div className="max-w-7xl mx-auto md:py-22 px-4 sm:px-6 lg:px-8 flex flex-col gap-20 pb-12 md:pb-40">
      {/* title */}

      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-heading text-3xl font-bold">Get in Touch</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Wherever you are in the world, lets work together on your next
          project.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* here goes introduction/titles/subtitles/description */}
        <div
          ref={introRef}
          className="flex-1 flex flex-col items-start space-y-4"
        >
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Contact Information
          </h2>
          <p className="text-sm text-muted-foreground">
            I&apos;d love to hear from you! Whether you have a question,
            feedback, or want to collaborate, just drop a message below.
          </p>

          {/* Icon row – optional but adds visual flair */}
          <div className="flex flex-col space-y-6 pt-4 text-primary">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span className="text-sm">shaonexplorer@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="text-sm">+880 1680051016</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm">Mirpur, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
        {/* contact form */}
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
