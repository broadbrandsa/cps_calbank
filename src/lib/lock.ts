/**
 * Access gate shared state. The LockScreen reads/writes the unlock flag,
 * and the nav "Hide" button calls lockProposal() to re-lock and re-prompt.
 */
export const LOCK_STORAGE_KEY = "broadbrand_calbank_v1_unlocked";
export const LOCK_CODE = "0224";

/** Re-lock the proposal: clear the unlock flag and reload so the gate returns. */
export function lockProposal() {
  try {
    localStorage.removeItem(LOCK_STORAGE_KEY);
  } catch {}
  window.location.reload();
}
