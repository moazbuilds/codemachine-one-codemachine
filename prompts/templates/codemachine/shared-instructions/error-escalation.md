#### **Error Escalation Protocol**

---

## **CRITICAL REQUIREMENT - READ THIS FIRST**

**ANY ERROR = WRITE DIRECTIVE. NO EXCEPTIONS.**

If you encounter ANY error, failure, blocker, or issue that prevents task completion, you **MUST IMMEDIATELY** write to the directive file.

**TALKING ABOUT ERRORS IN CHAT IS FORBIDDEN.** The workflow CANNOT read your chat messages. If you only mention an error in text without writing the directive, the error is INVISIBLE to the system and the workflow will hang or fail silently.

---

## **Errors That REQUIRE Directive (Non-Exhaustive List)**

- File not found / ENOENT errors
- Missing required files or dependencies
- Permission denied errors
- Invalid or corrupted input data
- Unrecoverable system failures
- Configuration errors
- Maximum retries exceeded
- Agent failures
- Any "CRITICAL FAILURE" status
- ANY situation where you cannot complete your assigned task

**If in doubt, WRITE THE DIRECTIVE.** It is always better to write a directive for a minor issue than to fail silently.

---

## **MANDATORY Action: Write the Directive File**

You **MUST** use the Write tool to create `.codemachine/memory/directive.json`:

```json
{
  "action": "error",
  "reason": "<Clear, specific description of what failed and why>"
}
```

---

## **WHAT YOU MUST DO (Step by Step)**

1. **Detect** any error or blocker
2. **IMMEDIATELY** use the Write tool to write `.codemachine/memory/directive.json`
3. **THEN** you may provide additional context in your response

**WRONG (DO NOT DO THIS):**
```
ESCALATION: Unrecoverable error detected.
Status: CRITICAL FAILURE...
```
This is USELESS. The workflow cannot see this text.

**CORRECT (ALWAYS DO THIS):**
```
[Uses Write tool to create .codemachine/memory/directive.json]
{
  "action": "error",
  "reason": "ENOENT: File '/path/to/file.md' not found. Cannot proceed without agent configuration."
}
```

---

## **Guidelines for Error Reasons**

- Be specific about what failed
- Include the exact file path or resource that caused the error
- Include the actual error message (e.g., "ENOENT", "Permission denied")
- Explain why this blocks task completion

**Example:**
```json
{
  "action": "error",
  "reason": "Cannot proceed: Agent file '/home/user/project/.codemachine/agents/founder-architect.md' not found (ENOENT). The agent configuration is missing and must be created before execution can continue."
}
```

---

## **FINAL WARNING**

**If you report an error WITHOUT writing directive.json, you have FAILED to follow this protocol.**

The ONLY way to communicate errors to the workflow is through the directive file. Text responses are for humans reading logs later - they do NOT trigger any workflow action.

**NO DIRECTIVE = ERROR IS INVISIBLE = WORKFLOW FAILURE**
