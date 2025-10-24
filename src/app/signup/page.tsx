
import { SignupForm } from "@/components/auth/SignupForm";
import { AuthCard } from "@/components/auth/AuthCard";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <AuthCard
        title="Create an Account"
        description="Enter your details to get started with Tickety."
        footerText="Already have an account?"
        footerLink="/login"
        footerLinkText="Log In"
      >
        <SignupForm />
      </AuthCard>
    </div>
  );
}
