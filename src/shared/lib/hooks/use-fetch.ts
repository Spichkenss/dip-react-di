import { useEffect, useRef, useState, useCallback } from "react";

interface UseFetchOptions extends RequestInit {
  immediate?: boolean;
}

export function useFetch<T = unknown>(
  url: string,
  options: UseFetchOptions = {}
) {
  const { immediate = true, ...fetchOptions } = options;

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  const execute = useCallback(async () => {
    abortControllerRef.current?.abort();
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: abortController.signal,
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const result = (await response.json()) as T;
      setData(result);
      return result;
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((err as any).name !== "AbortError") {
        setError(err as Error);
      }
    } finally {
      setLoading(false);
    }
  }, [fetchOptions, url]);

  useEffect(() => {
    if (immediate) execute();
    return () => abortControllerRef.current?.abort();
  }, [execute, immediate]);

  return { data, error, loading, refetch: execute };
}
