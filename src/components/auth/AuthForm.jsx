import AuthInput from "./AuthInput";

export default function AuthForm() {
  return (
    <form className="space-y-4">
      <AuthInput
        label="Full Name"
        icon="person"
        placeholder="Enter your full name"
      />

      <AuthInput
        label="Email Address"
        icon="mail"
        type="email"
        placeholder="name@example.com"
      />

      <AuthInput
        label="Password"
        icon="lock"
        type="password"
        placeholder="Create a password"
        rightIcon="visibility"
      />

      <AuthInput
        label="Confirm Password"
        icon="lock_reset"
        type="password"
        placeholder="Repeat your password"
      />

      <div className="pt-4">
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-xl transition-all shadow-lg shadow-primary/25 active:scale-[0.98]">
          Sign Up
        </button>
      </div>
    </form>
  );
}
