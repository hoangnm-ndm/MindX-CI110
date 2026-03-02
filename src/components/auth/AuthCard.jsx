export default function AuthCard({ children }) {
  return (
    <div className="w-full max-w-110 bg-white dark:bg-slate-900 rounded-xl p-8 shadow-xl shadow-primary/5">
      {children}
    </div>
  );
}
