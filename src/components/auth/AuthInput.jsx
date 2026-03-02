export default function AuthInput({
  label,
  icon,
  type = "text",
  placeholder,
  rightIcon,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-slate-700 dark:text-slate-200 text-sm font-semibold px-1">
        {label}
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </div>

        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-11 pr-11 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary h-14 text-base transition-colors"
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 cursor-pointer hover:text-primary">
            <span className="material-symbols-outlined text-[20px]">
              {rightIcon}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
