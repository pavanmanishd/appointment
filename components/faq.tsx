'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "To book an appointment, log in to your account, select the desired service, choose a date and time, and confirm your booking. You'll receive a confirmation email with the details."
    },
    {
      question: "Can I reschedule or cancel my appointment?",
      answer: "Yes, you can reschedule or cancel your appointment up to 24 hours before the scheduled time. Log in to your account and go to 'My Appointments' to make changes."
    },
    {
      question: "How do I become a beautician on your platform?",
      answer: "To become a beautician, register for an account and select 'Beautician' as your role. You'll need to provide your professional credentials and services offered. Our team will review your application and get back to you."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and Apple Pay. Payment is processed securely at the time of booking."
    },
    {
      question: "Is there a cancellation fee?",
      answer: "Cancellations made less than 24 hours before the appointment may incur a fee of 50% of the service cost. No-shows will be charged the full service amount."
    },
    {
      question: "How can I leave a review for my beautician?",
      answer: "After your appointment, you'll receive an email inviting you to leave a review. You can also log in to your account and go to 'Past Appointments' to leave a review."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}