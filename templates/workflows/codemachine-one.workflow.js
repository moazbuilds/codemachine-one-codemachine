export default {
  name: 'CodeMachine-One Workflow',
  specification: true,
  autonomousMode: 'always',
  steps: [
    resolveStep('init', { interactive: false }), // Initialize development environment
    resolveStep('principal-analyst', { interactive: false }), // Review specifications and identify critical ambiguities
    separator("∴ Planning Phase ∴"),
    resolveStep('blueprint-orchestrator', { interactive: false }), // Orchestrate architecture blueprint generation
    resolveStep('plan-agent', { interactive: false }), // Generate comprehensive iterative development plan with architectural artifacts
    resolveStep('task-breakdown', { interactive: false }), // Extract and structure tasks from project plan into JSON format
    resolveStep('git-commit', { interactive: false }), // Commit the task breakdown to git
    separator("⟲ Development Cycle ⟲"),
    resolveStep('context-manager', { interactive: false }), // Gather and prepare relevant context from architecture, plan, and codebase for task execution
    resolveStep('code-generation', { interactive: false }), // Generate code implementation based on task specifications and design artifacts
    resolveStep('runtime-prep', { interactive: false }), // Generate robust shell scripts for project automation (install, run, lint, test)
    resolveStep('task-sanity-check', { interactive: false }), // Verify generated code against task requirements and acceptance criteria
    resolveStep('git-commit', { interactive: false } ), // Commit the generated and verified code
    separator("◈◈ Iteration Gate ◈◈"),
    resolveModule('check-task', { loopSteps: 6, loopMaxIterations: 20,  loopSkip: ['runtime-prep'], interactive: false }), // Loop back if tasks are not completed
  ],
  subAgentIds: [
    // architecture sub-agents
    'founder-architect',
    'structural-data-architect',
    'behavior-architect',
    'ui-ux-architect',
    'operational-architect',
    'file-assembler'
  ],
};
