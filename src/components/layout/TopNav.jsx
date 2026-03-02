export default function TopNav() {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center bg-transparent p-4 justify-between max-w-120 mx-auto w-full">
      <button className="text-slate-900 dark:text-slate-100 flex size-10 items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm">
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <div className="size-10" />
    </div>
  );
}
