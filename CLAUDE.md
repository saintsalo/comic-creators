# Working agreement

Scope discipline comes first. These rules override default thoroughness.

- Do exactly what was asked. Nothing adjacent, nothing "while I'm in here."
- Touch only the files named or clearly implied. Changing more requires asking first.
- No unrequested refactors, renames, reorganizations, or dependency changes.
- No unrequested tests, docs, comments, or error handling.
- If the request is ambiguous, pick the smallest reasonable reading and say which one you picked. Don't explore all of them.
- Investigate only as far as the task needs. Don't audit the surrounding code or trace unrelated call paths.
- If you find an unrelated problem, mention it in one line at the end. Do not fix it.
- Stop when the asked-for change is done. Don't run builds, tests, or the app unless asked or unless the change can't be trusted without it.
- Prefer the smallest diff that works over the best possible design.

Keep responses short. Report what changed and stop.
