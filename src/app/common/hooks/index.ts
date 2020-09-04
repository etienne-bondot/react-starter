import {useEffect, useRef} from 'react';

export const useInterval = (callback: any, delay: number): any => {
  const savedCallback = useRef(null);

  // Remember the latest callback.
  useEffect(() => {
    if (savedCallback) {
      savedCallback.current = callback;
    }
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback) {
        // @ts-expect-error
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return;
  }, [delay]);
};

export const usePrevious = (value: any): any => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};
