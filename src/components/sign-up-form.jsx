import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const SignUpForm = ({
  className,
  formData, 
  onInputChange, 
  onSubmit,
  states,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your full name, email, and password below
          </CardDescription>
        </CardHeader>
        <CardContent>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input name="name" id="fullName" type="text" placeholder="Wang Ming" onChange={onInputChange} value={formData.name} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" type="email" placeholder="m@example.com" onChange={onInputChange} value={formData.email} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" type="password" onChange={onInputChange} value={formData.password} required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </form>
        </CardContent>
      </Card>
    </div>
  );
}
