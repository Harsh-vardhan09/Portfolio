"use client";

import { useEffect, useState } from "react";

/**
 * `initial` is what the server renders and what the first client paint uses,
 * so pass the value that is safe before the query can be read.
 */
export function useMedia(query: string, initial: boolean) {
  const [matches, setMatches] = useState(initial);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const read = () => setMatches(mq.matches);
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, [query]);
  return matches;
}
