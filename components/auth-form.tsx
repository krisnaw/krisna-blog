"use client"

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import LoginForm from "@/components/login-form"

export default function AuthForm() {

  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Welcome</CardTitle>
        <CardDescription className="text-center">Sign in to your account or create a new one</CardDescription>
      </CardHeader>
      <CardContent>
          <LoginForm />
      </CardContent>
    </Card>
  )
}

