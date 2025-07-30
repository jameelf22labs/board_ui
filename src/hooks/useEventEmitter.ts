import { useCallback, useEffect } from "react";
import globalEventEmitter from "../core/events/event-emitter";

type Listener<T> = (payload: T) => void;

const useEventEmitter = <T>(eventName: string, listener?: Listener<T>) => {
  useEffect(() => {
    if (!listener) return;
    const wrappedListener = (event: Event) => {
      listener((event as CustomEvent<T>).detail);
    };
    globalEventEmitter.addEventListener(eventName, wrappedListener);
    return () => {
      globalEventEmitter.removeEventListener(eventName, wrappedListener);
    };
  }, [eventName, listener]);

  const publishEvent = useCallback(
    (payload: T) => {
      const event = new CustomEvent<T>(eventName, { detail: payload });
      globalEventEmitter.dispatchEvent(event);
    },
    [eventName]
  );

  return publishEvent;
};

export default useEventEmitter;
