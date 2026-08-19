---
name: Scroll runtime
description: Stable scrolling behavior for this Next.js portfolio.
---

Prefer native browser scrolling with the existing reduced-motion CSS fallback unless the Lenis integration is revalidated against the current React/runtime setup.

**Why:** The imported Lenis provider produced a browser invalid-hook error during preview verification; removing the wrapper left the app stable without compromising the requested editorial composition.

**How to apply:** Treat Lenis as optional enhancement, not a prerequisite for shipping or for accessibility.