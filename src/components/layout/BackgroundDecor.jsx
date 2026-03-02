export default function BackgroundDecor() {
  return (
    <>
      <div className="fixed -z-10 top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
      <div className="fixed -z-10 bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
    </>
  );
}
