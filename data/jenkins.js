const jenkins = {

title: “Jenkins & CI/CD”,

icon: “🚀”,

questions: [

{
question: “Explain your Build → Promote → Deploy architecture.”,

answer: `The Build pipeline compiles code, executes tests and produces immutable artifacts. The Promote pipeline validates those artifacts in higher environments and performs approvals. The Deploy pipeline handles the actual deployment to production.

This separation improves traceability, rollback capability and governance while ensuring that the exact same artifact moves across environments.`
},

{
question: “Why separate Build, Promote and Deploy pipelines?”,

answer: Separating these stages improves control and auditability. Build creates artifacts once, Promote validates them, and Deploy releases them. This prevents rebuilding the same code multiple times and reduces deployment risk.
},

{
question: “What are Jenkins Shared Libraries?”,

answer: Shared Libraries allow reusable pipeline code to be centralized. Instead of duplicating Groovy functions across Jenkinsfiles, common logic is maintained in one repository and reused across pipelines.
},

{
question: “How do you manage Jenkins credentials securely?”,

answer: Credentials are stored in Jenkins Credentials Store and injected only when required. Secrets are never hardcoded into Jenkinsfiles or repositories. Access is restricted using RBAC principles.
},

{
question: “How do you implement approvals in Jenkins?”,

answer: Jenkins provides input steps that pause execution and require manual approval before proceeding. For production environments, approvals are usually restricted to authorized users.
},

{
question: “What is the difference between Declarative and Scripted pipelines?”,

answer: Declarative pipelines provide a structured syntax with built-in features and validation. Scripted pipelines provide greater flexibility using Groovy but can become harder to maintain.
},

{
question: “How do you handle rollback in Jenkins?”,

answer: Rollback is achieved using immutable artifacts and deployment history. Jenkins redeploys the previously successful artifact version rather than rebuilding older code.
},

{
question: “What is a Multibranch Pipeline?”,

answer: A Multibranch Pipeline automatically discovers branches and pull requests from SCM systems such as GitHub and creates pipelines dynamically.
},

{
question: “How do you optimize pipeline performance?”,

answer: I parallelize independent stages, cache dependencies, reuse build agents where appropriate and eliminate unnecessary builds.
},

{
question: “What is an immutable artifact?”,

answer: An immutable artifact is a build output that never changes after creation. The same artifact moves through all environments, ensuring consistency.
},

{
question: “How do you trigger downstream jobs?”,

answer: The build step can trigger downstream jobs and pass parameters between pipelines, enabling orchestration across multiple workflows.
},

{
question: “How do you implement environment-specific configuration?”,

answer: Configuration is externalized using parameter files, Helm values, environment variables or configuration repositories rather than hardcoding values.
},

{
question: “How do you integrate Jenkins with Kubernetes?”,

answer: Jenkins agents can run as Kubernetes pods. Dynamic agents are created on demand, execute jobs and are automatically destroyed after completion.
},

{
question: “What are Jenkins agents?”,

answer: Agents are worker nodes that execute pipeline stages. They can be physical servers, VMs, containers or Kubernetes pods.
},

{
question: “How do you scale Jenkins?”,

answer: I use distributed agents, dynamic Kubernetes agents and separate controller responsibilities from build execution.
},

{
question: “How do you secure Jenkins?”,

answer: Security includes RBAC, SSO integration, credential management, plugin governance, audit logging and restricting anonymous access.
},

{
question: “How do you integrate SonarQube?”,

answer: SonarQube scans are added to pipeline stages. Quality gates can fail the pipeline if code quality thresholds are not met.
},

{
question: “How do you integrate security scanning?”,

answer: Security scans such as Trivy, Snyk or dependency checks are executed during CI stages and can block promotion if vulnerabilities exceed thresholds.
},

{
question: “How do you manage pipeline failures?”,

answer: I use proper error handling, notifications, retries where appropriate and clear logging to simplify troubleshooting.
},

{
question: “How do you version artifacts?”,

answer: Artifacts are tagged using build numbers, Git commit hashes or release versions to ensure traceability.
},

{
question: “How do you deploy to Kubernetes from Jenkins?”,

answer: Jenkins invokes Helm or kubectl commands, updates deployment manifests and verifies rollout status after deployment.
},

{
question: “What is Blue-Green deployment?”,

answer: Two identical environments exist. Traffic switches from the current environment to the new environment after validation, enabling rapid rollback.
},

{
question: “What is Canary deployment?”,

answer: A small percentage of users receive the new version first. If metrics remain healthy, traffic is gradually increased.
},

{
question: “How do you implement deployment gates?”,

answer: Deployment gates use approvals, test results, security scans and quality checks before allowing progression to higher environments.
},

{
question: “What Jenkins improvements are you most proud of?”,

answer: Building reusable pipeline frameworks, reducing deployment complexity and introducing automation that improves reliability and deployment speed while reducing manual effort.
}

]

};

export default jenkins;