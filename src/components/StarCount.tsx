"use client";

import { useEffect, useState } from "react";

export default function StarCount() {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/apilens/slomo")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && typeof d.stargazers_count === "number") {
          const n = d.stargazers_count;
          setCount(n >= 1000 ? (n / 1000).toFixed(1) + "k" : String(n));
        }
      })
      .catch(() => {});
  }, []);

  return <span>{count ?? "Star"}</span>;
}
