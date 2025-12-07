"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Capture the form element immediately (so React doesn't null the event later)
  const form = e.currentTarget;

  const formData = new FormData(form);
  const payload = {
    firstName: String(formData.get("firstName") || ""),
    lastName: String(formData.get("lastName") || ""),
    email: String(formData.get("email") || ""),
    subject: String(formData.get("subject") || ""),
    message: String(formData.get("message") || ""),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data?.error || "Failed to send message");
    }

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset the form using the saved reference
    form.reset();
  } catch (err: any) {
    console.error("Contact error:", err);
    toast({
      title: "Error sending message",
      description: err?.message || "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Have questions about listing a conference or need support? We're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground">support@medconf.com</p>
                  <p className="text-muted-foreground">partnerships@medconf.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 8am to 5pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Drive
                    <br />
                    Tech District, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <Input id="firstName" name="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <Input id="lastName" name="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" name="subject" placeholder="How can we help?" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" placeholder="Tell us more about your inquiry..." className="min-h-[150px]" required />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : (<><Send className="w-4 h-4 mr-2" /> Send Message</>)}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
