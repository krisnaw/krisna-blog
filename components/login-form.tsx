"use client"

import React, {useActionState, useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Checkbox} from "@/components/ui/checkbox"
import {Eye, EyeOff, Loader2} from "lucide-react"
import {ActionResponse, login} from "@/app/actions";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

const initialState: ActionResponse = {
  success: false,
  message: '',
  errors: undefined,
}

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(async (prevState: ActionResponse, formData: FormData) => {

    try {

      const res = await login(formData)

      if (!res.success) {
        return res
      }

      toast("Login successful")

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
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }))
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        {state.message && <p className="text-sm text-success">{state.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
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
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Button type="button" variant="link" className="px-0 font-normal text-xs" onClick={() => {}}>
            Forgot password?
          </Button>
        </div>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
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
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="remember-me" checked={formData.rememberMe} onCheckedChange={handleCheckboxChange} />
        <Label htmlFor="remember-me" className="text-sm font-normal">
          Remember me
        </Label>
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  )
}

