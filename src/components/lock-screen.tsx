"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { LOCK_CODE, LOCK_STORAGE_KEY } from "@/lib/lock";

const UNLOCK_STEPS = [
  "Verifying access code",
  "Identity confirmed",
  "Clearance granted",
  "Loading proposal",
];

/**
 * Soft access gate for the CalBank Academy of Trusted Advisors proposal.
 *
 * On first visit it shows a full-bleed overlay over the page. The reader enters
 * the access code (see LOCK_CODE). A correct code unlocks and persists in
 * localStorage so the gate does not re-prompt. A wrong code shakes and clears.
 * The nav "Hide" button calls lockProposal() to clear the flag and re-prompt.
 *
 * Children stay mounted in the same wrapper across every state so the scroll
 * reveal observers are never severed.
 */
export function LockScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [unlockSteps, setUnlockSteps] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Client-only: the unlock flag lives in localStorage, which is unavailable
    // during SSR, so we must resolve it after mount.
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUnlocked(localStorage.getItem(LOCK_STORAGE_KEY) === "true");
    } catch {
      setUnlocked(false);
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (code === LOCK_CODE) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < UNLOCK_STEPS.length) {
          setUnlockSteps((prev) => [...prev, UNLOCK_STEPS[i]]);
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setExiting(true);
            setTimeout(() => {
              try {
                localStorage.setItem(LOCK_STORAGE_KEY, "true");
              } catch {}
              setUnlocked(true);
            }, 700);
          }, 350);
        }
      }, 280);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
        setCode("");
        inputRef.current?.focus();
      }, 700);
    }
  }, [code]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleSubmit();
    },
    [handleSubmit],
  );

  const showOverlay = unlocked === false;
  const wrapperHidden = unlocked !== true;

  return (
    <>
      <div
        aria-hidden={wrapperHidden ? "true" : undefined}
        style={wrapperHidden ? { visibility: "hidden", pointerEvents: "none" } : undefined}
      >
        {children}
      </div>

      {!showOverlay ? null : (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Access required"
          className={`lock-overlay ${exiting ? "lock-exiting" : ""} ${error ? "lock-shake" : ""}`}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(160deg, #1b2436 0%, #0f1521 100%)",
            color: "#ffffff",
            overflow: "hidden",
          }}
        >
          {/* Gold glow at the top */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              height: "55vh",
              width: "min(960px, 90vw)",
              background:
                "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(253,211,0,0.18) 0%, transparent 70%)",
            }}
          />
          {/* Subtle grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at 50% 35%, black 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 30%, transparent 75%)",
            }}
          />

          <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-9 px-6 text-center">
            {/* Lockup — CPS x CalBank */}
            <div className="flex items-center gap-5">
              <Image
                src="/images/cps-logo.svg"
                alt="Cornerstone Performance Solutions"
                width={132}
                height={40}
                priority
                className="h-7 w-auto brightness-0 invert"
              />
              <span aria-hidden className="h-6 w-px bg-white/20" />
              <span className="flex items-center rounded-md bg-white px-2.5 py-1.5">
                <Image
                  src="/images/calbank-logo-300x125-1.png"
                  alt="CalBank"
                  width={300}
                  height={125}
                  priority
                  className="h-5 w-auto"
                />
              </span>
            </div>

            {/* Eyebrow + headline */}
            <div className="flex flex-col items-center gap-3">
              <span className="mono inline-flex items-center gap-2 !text-white/60">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ background: "#fdd300" }}
                />
                Access required
              </span>
              <p className="text-balance text-[clamp(20px,3vw,28px)] font-semibold leading-snug text-white">
                Academy of Trusted Advisors
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-white/60">
                Confidential proposal for CalBank. Enter the access code shared with you to unlock it.
              </p>
            </div>

            {/* Code input */}
            <div className="w-full max-w-xs">
              <label htmlFor="lock-code" className="sr-only">
                Access code
              </label>
              <input
                id="lock-code"
                ref={inputRef}
                type="password"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter access code"
                autoFocus
                aria-invalid={error}
                className="w-full rounded-2xl px-5 py-4 text-center text-sm font-semibold tracking-[0.4em] text-white outline-none transition-all duration-200 placeholder:tracking-normal placeholder:text-white/40"
                style={{
                  background: error ? "rgba(239,68,68,0.08)" : "rgba(253,211,0,0.06)",
                  border: error
                    ? "1px solid rgba(239,68,68,0.5)"
                    : code
                      ? "1px solid rgba(253,211,0,0.5)"
                      : "1px solid rgba(255,255,255,0.12)",
                  boxShadow: code && !error ? "0 0 60px rgba(253,211,0,0.14)" : "none",
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              className="group inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: "#fdd300" }}
            >
              Unlock
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </button>

            {/* Error */}
            {error && (
              <p className="mono !text-[rgb(248,113,113)]" role="alert">
                Incorrect code
              </p>
            )}

            {/* Unlock steps */}
            {unlockSteps.length > 0 && (
              <div className="flex flex-col gap-1.5" aria-live="polite">
                {unlockSteps.map((step, i) => (
                  <span
                    key={step}
                    className="mono"
                    style={{
                      color: i === unlockSteps.length - 1 ? "#fdd300" : "rgba(255,255,255,0.7)",
                      animation: "unlockStep 0.32s ease both",
                    }}
                  >
                    {step}
                  </span>
                ))}
              </div>
            )}

            {/* Footer */}
            <p className="mono mt-2 !text-white/35">Cornerstone Performance Solutions × CalBank</p>
          </div>
        </div>
      )}
    </>
  );
}
