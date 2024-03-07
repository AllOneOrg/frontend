'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { useForm } from "react-hook-form"

export function Auth() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(data => console.log(data))
  return (
    <form className="grid min-h-screen place-items-center gap-6 px-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="space-y-2 text-center">
          <div className="mx-auto h-12" />
          <div className="space-y-1.5">
            <h1 className="text-3xl font-bold">AllOne</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" {...form.register('email')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" {...form.register('password')} />
          </div>
          <Button className="w-full"  type="submit">Login</Button>
          <Link className="inline-block w-full text-center text-sm underline" href="#">
            Forgot your password?
          </Link>
        </div>
        <Separator />
        <div className="space-y-4">
          <Button className="w-full" variant="outline">Login with Google</Button>
          <Button className="w-full" variant="outline">
            Login with Meta
          </Button>
          <Button className="w-full" variant="outline">
            Login with Apple
          </Button>
          <Button className="w-full" variant="outline">
            Login with X
          </Button>
        </div>
      </div>
    </form>
  )
}

