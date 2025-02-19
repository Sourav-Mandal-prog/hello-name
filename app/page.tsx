"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { greet } from "./actions"

export default function Home() {
  const [name, setName] = useState("")
  const [greeting, setGreeting] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await greet(name)
    setGreeting(result)
  }

  return (
    <main className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Greeting App</CardTitle>
          <CardDescription>Enter your name to receive a greeting</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Submit
            </Button>
          </form>
          {greeting && <p className="mt-4 text-lg font-semibold">{greeting}</p>}
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="explanation">
          <AccordionTrigger>How it works</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              This application demonstrates the use of Next.js 15.1 features, server actions, and Shadcn UI components:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Server Actions:</strong> The form submission is handled by a server action, which processes the
                input and returns a greeting.
              </li>
              <li>
                <strong>Shadcn UI:</strong> We use Shadcn UI components like Input, Button, Card, and Accordion for
                consistent styling.
              </li>
              <li>
                <strong>Next.js 15.1:</strong> This app leverages the latest Next.js features, including the simplified
                data fetching model and improved server actions.
              </li>
              <li>
                <strong>Responsive Design:</strong> The layout adjusts for both desktop and mobile devices using
                Tailwind CSS classes.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}

