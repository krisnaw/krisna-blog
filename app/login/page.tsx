import AuthForm from "@/components/auth-form";

export default function LoginPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="p-6 pt-3 md:pt-6 min-h-screen flex items-center justify-center">
                <AuthForm />
            </div>
        </div>
    )
}