import { useState, useEffect, useCallback, useRef } from "react";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"entering" | "visible" | "exiting" | "done">(() => {
    return "done";
  });
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const skip = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    setPhase("exiting");
    timersRef.current = [setTimeout(() => setPhase("done"), 600)];
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    if (sessionStorage.getItem("bg-splash-seen")) return;

    sessionStorage.setItem("bg-splash-seen", "1");
    setPhase("entering");
    const t1 = setTimeout(() => setPhase("visible"), 100);
    const t2 = setTimeout(() => setPhase("exiting"), 3000);
    const t3 = setTimeout(() => setPhase("done"), 3600);

    timersRef.current = [t1, t2, t3];
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase !== "entering") return;
    const t1 = setTimeout(() => setPhase("visible"), 100);
    const t2 = setTimeout(() => setPhase("exiting"), 3000);
    const t3 = setTimeout(() => setPhase("done"), 3600);

    timersRef.current = [t1, t2, t3];
    return () => timersRef.current.forEach(clearTimeout);
  }, [phase]);

  if (phase === "done") return null;

  const opacity =
    phase === "entering" ? 0 :
    phase === "visible"  ? 1 :
    0;

  return (
    <div
      className="fixed inset-0 z-[9999] flex cursor-pointer items-center justify-center bg-black transition-opacity duration-[600ms] ease-in-out"
      style={{ opacity, pointerEvents: phase === "exiting" ? "none" : "auto" }}
      aria-hidden={phase === "exiting"}
      onClick={skip}
    >
      <img
        src="/__l5e/assets-v1/735b245c-7453-4ce7-846c-99f93386e26e/bg-logo.jpg"
        alt="BLACK GLOVE"
        className="pointer-events-none max-h-[70vh] max-w-[80vw] object-contain"
      />
    </div>
  );
}
