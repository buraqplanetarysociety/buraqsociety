import { useSyncExternalStore } from "react";

/** Never emits: the client/server answer is fixed for the life of the page. */
const subscribe = () => () => {};

/**
 * True once the component is running in the browser, false while rendering on
 * the server. Use it to hold back markup that would otherwise hydrate
 * differently than it was server-rendered.
 *
 * This replaces the older `useState(false)` + `useEffect(() => setIsClient(true))`
 * guard, which set state during an effect and so cost an extra render pass on
 * every mount.
 */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true, // client
    () => false // server
  );
}
