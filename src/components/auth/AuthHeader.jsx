export default function AuthHeader() {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <span className="material-symbols-outlined text-4xl!">task_alt</span>
      </div>

      <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight tracking-tight">
        Create Account
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2 text-center text-sm">
        Join our minimalist to-do community today
      </p>
    </div>
  );
}
