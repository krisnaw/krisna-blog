"use client"

import React, {useActionState, useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Eye, EyeOff, Loader2} from "lucide-react"
import {ActionResponse, signup} from "@/app/actions";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

const initialState: ActionResponse = {
  success: false,
  message: '',
  errors: undefined,
}

export default function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState({
    password: "",
  })

  const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(async (prevState: ActionResponse, formData: FormData) => {

    try {

      const res = await signup(formData)

      if (!res.success) {
        return res
      }

      toast("Registration successful")

      router.push('/')

      return {
        success: true,
        message: 'Account created successfully. Please login to continue.'
      }

    } catch (err) {
      console.error(err)
      return {
        success: false,
        message: 'Something went wrong. Please try again later.'
      }
    }

  }, initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Validate password
    if (name === "password") {
      if (value.length < 8) {
        setErrors((prev) => ({ ...prev, password: "Password must be at least 8 characters" }))
      } else {
        setErrors((prev) => ({ ...prev, password: "" }))
      }
    }
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        {state.message && <p className="text-sm text-success">{state.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-email">Email</Label>
        <Input
          id="register-email"
          name="email"
          type="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-password">Password</Label>
        <div className="relative">
          <Input
            id="register-password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
        </div>
        {errors.password && <p className="text-sm text-destructive mt-1">{errors.password}</p>}
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create account"
        )}
      </Button>
    </form>
  )
}

