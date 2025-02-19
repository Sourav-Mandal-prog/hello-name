"use server"

export async function greet(name: string): Promise<string> {
  // Simulate a delay to demonstrate asynchronous behavior
  await new Promise((resolve) => setTimeout(resolve, 500))
  return `Hello ${name}!`
}

