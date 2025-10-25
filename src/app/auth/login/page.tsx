
import { LoginForm } from "@/components/auth/LoginForm";
import { AuthCard } from "@/components/auth/AuthCard";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <AuthCard
        title="Welcome Back"
        description="Sign in to continue to your dashboard."
        footerText="Don't have an account?"
        footerLink="/auth/signup"
        footerLinkText="Sign Up"
      >
        <LoginForm />
      </AuthCard>
    </div>
  );
}
