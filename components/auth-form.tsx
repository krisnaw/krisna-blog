"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import LoginForm from "@/components/login-form"
import RegisterForm from "@/components/register-form"

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState("login")

  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Welcome</CardTitle>
        <CardDescription className="text-center">Sign in to your account or create a new one</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-center text-muted-foreground">
          {activeTab === "login" ? (
            <span>
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setActiveTab("register")}
                className="underline text-primary hover:text-primary/90 transition-colors"
              >
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                onClick={() => setActiveTab("login")}
                className="underline text-primary hover:text-primary/90 transition-colors"
              >
                Sign in
              </button>
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

