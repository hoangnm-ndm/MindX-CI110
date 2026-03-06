import AuthLayout from "@/components/layout/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthForm from "@/components/auth/AuthForm";
import SocialLogin from "@/components/auth/SocialLogin";
import RegisterForm from "../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader />
        {/* <AuthForm /> */}
        <RegisterForm />
        <SocialLogin />
      </AuthCard>
    </AuthLayout>
  );
}
