"use client";

import { ContactForm } from "./ContactForm";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  // GSAP fade-in / slide-up for the intro block
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

  // Animate the entire section on mount
  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div
      id="contact"
      ref={containerRef}
      className="max-w-7xl mx-auto md:py-22 px-4 sm:px-6 lg:px-8 flex flex-col gap-20 pb-12 md:pb-40"
    >
      {/* Section header */}
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <MessageSquare className="h-4 w-4" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let&apos;s build something amazing together
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I&apos;d love to hear from you! Whether you have a question, feedback,
          or want to collaborate, just drop a message below.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact information with distinctive accent bar */}
        <div
          ref={introRef}
          className="flex-1 flex flex-col items-start space-y-6"
        >
          {/* Signature accent bar */}
          {/* <div className="hidden md:block w-1.5 h-16 bg-gradient-to-b from-primary to-emerald-500 rounded-full" /> */}

          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Contact Information
          </h2>
          <p className="text-sm text-muted-foreground">
            I&apos;m always excited to connect with fellow developers, potential
            collaborators, and curious minds. Let&apos;s start a conversation!
          </p>

          {/* Contact info items with icon badges */}
          <div className="space-y-4 w-full">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:shaonexplorer@gmail.com"
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    shaonexplorer@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href="tel:+8801680051016"
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    +880 1680051016
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm text-foreground">
                    Mirpur, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
