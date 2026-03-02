import { Icon } from "./Icon";

export const TextInput = ({
  label,
  type = "text",
  placeholder,
  icon,
  rightIcon,
  onRightIconClick,
}) => (
  <label className="flex flex-col w-full">
    <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal pb-2 px-1">
      {label}
    </p>
    <div className="relative">
      {icon && (
        <Icon
          name={icon}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="form-input flex justify-center items-center px w-full rounded-xl text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 h-14 pl-12 pr-12 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
      />
      {rightIcon && (
        <button
          type="button"
          onClick={onRightIconClick}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        >
          <Icon name={rightIcon} />
        </button>
      )}
    </div>
  </label>
);
