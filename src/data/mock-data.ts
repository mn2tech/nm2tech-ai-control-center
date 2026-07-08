export const sidebarItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "AI Agents", href: "/ai-agents" },
  { label: "Human Approval", href: "/human-approval" },
  { label: "Evaluations", href: "/evaluations" },
  { label: "Knowledge Base", href: "/knowledge-base" },
  { label: "Model Gateway", href: "/model-gateway" },
  { label: "Audit Logs", href: "/audit-logs" },
  { label: "Settings", href: "/settings" },
];

export const metrics = [
  { label: "Active AI Agents", value: "24", change: "+3.1%" },
  { label: "Requests Today", value: "18,427", change: "+11.4%" },
  { label: "Average Latency", value: "842 ms", change: "-5.6%" },
  { label: "Human Approval Rate", value: "96.2%", change: "+0.9%" },
  { label: "Prompt Success Rate", value: "98.4%", change: "+0.4%" },
  { label: "Estimated Daily Cost", value: "$432.18", change: "+2.2%" },
];

export const requestsOverTime = [
  { time: "00:00", requests: 620 },
  { time: "04:00", requests: 900 },
  { time: "08:00", requests: 2020 },
  { time: "12:00", requests: 3180 },
  { time: "16:00", requests: 3890 },
  { time: "20:00", requests: 2780 },
];

export const modelUsage = [
  { name: "GPT-5", usage: 42 },
  { name: "Claude", usage: 26 },
  { name: "Gemini", usage: 18 },
  { name: "Llama", usage: 14 },
];

export const tokenConsumption = [
  { day: "Mon", input: 2.8, output: 1.3 },
  { day: "Tue", input: 3.1, output: 1.4 },
  { day: "Wed", input: 3.6, output: 1.8 },
  { day: "Thu", input: 3.4, output: 1.6 },
  { day: "Fri", input: 3.9, output: 2.1 },
];

export const agentPerformance = [
  { agent: "Support", success: 98.8 },
  { agent: "Finance", success: 97.9 },
  { agent: "Policy", success: 96.6 },
  { agent: "Fraud", success: 95.7 },
  { agent: "SQL", success: 98.2 },
];

export const approvalRate = [
  { week: "W1", rate: 94.2 },
  { week: "W2", rate: 95.4 },
  { week: "W3", rate: 96.2 },
  { week: "W4", rate: 96.8 },
];

export const agents = [
  {
    name: "Customer Support Agent",
    status: "Healthy",
    requests: "7,842",
    latency: "612 ms",
    lastExecution: "2 minutes ago",
    successRate: "99.1%",
  },
  {
    name: "Finance Agent",
    status: "Healthy",
    requests: "2,178",
    latency: "903 ms",
    lastExecution: "5 minutes ago",
    successRate: "98.2%",
  },
  {
    name: "Policy Agent",
    status: "Running",
    requests: "1,942",
    latency: "1,120 ms",
    lastExecution: "1 minute ago",
    successRate: "96.8%",
  },
  {
    name: "Fraud Detection Agent",
    status: "Monitoring",
    requests: "4,089",
    latency: "742 ms",
    lastExecution: "3 minutes ago",
    successRate: "97.5%",
  },
  {
    name: "SQL Analytics Agent",
    status: "Healthy",
    requests: "2,376",
    latency: "531 ms",
    lastExecution: "4 minutes ago",
    successRate: "99.0%",
  },
];

export const approvalQueue = [
  {
    id: "REQ-90822",
    agent: "Finance Agent",
    confidence: "94.3%",
    risk: "Medium",
    action: "Approve credit line increase for premium account",
  },
  {
    id: "REQ-90826",
    agent: "Fraud Detection Agent",
    confidence: "89.8%",
    risk: "High",
    action: "Freeze suspected card transactions over $4,000",
  },
  {
    id: "REQ-90830",
    agent: "Policy Agent",
    confidence: "96.2%",
    risk: "Low",
    action: "Update dispute workflow per revised compliance policy",
  },
  {
    id: "REQ-90831",
    agent: "Customer Support Agent",
    confidence: "91.1%",
    risk: "Medium",
    action: "Issue refund escalation for unresolved complaint",
  },
];

export const evaluationScores = [
  { name: "Groundedness", score: 94 },
  { name: "Answer Relevance", score: 97 },
  { name: "Completeness", score: 92 },
  { name: "Safety", score: 99 },
  { name: "Hallucination Score", score: 6 },
];

export const knowledgeBaseDocs = [
  {
    name: "Capital One Credit Card Policy.pdf",
    chunksIndexed: 1284,
    embeddingsCreated: 1284,
    lastUpdated: "Jul 08, 2026",
  },
  {
    name: "Fraud Detection Procedures.pdf",
    chunksIndexed: 932,
    embeddingsCreated: 932,
    lastUpdated: "Jul 06, 2026",
  },
  {
    name: "Customer Service Handbook.pdf",
    chunksIndexed: 1640,
    embeddingsCreated: 1640,
    lastUpdated: "Jul 04, 2026",
  },
  {
    name: "Security Standards.pdf",
    chunksIndexed: 886,
    embeddingsCreated: 886,
    lastUpdated: "Jul 02, 2026",
  },
];

export const models = [
  {
    name: "GPT-5",
    latency: "680 ms",
    availability: "99.99%",
    cost: "$0.013",
    health: "Healthy",
  },
  {
    name: "Claude",
    latency: "730 ms",
    availability: "99.95%",
    cost: "$0.010",
    health: "Healthy",
  },
  {
    name: "Gemini",
    latency: "790 ms",
    availability: "99.92%",
    cost: "$0.009",
    health: "Healthy",
  },
  {
    name: "Llama",
    latency: "910 ms",
    availability: "99.71%",
    cost: "$0.004",
    health: "Monitoring",
  },
];

export const auditLogs = [
  {
    timestamp: "2026-07-08 13:31:02",
    user: "s.johnson",
    agent: "Finance Agent",
    model: "GPT-5",
    tokens: 12440,
    cost: 0.18,
    latency: 833,
    status: "Success",
  },
  {
    timestamp: "2026-07-08 13:30:10",
    user: "a.lee",
    agent: "Fraud Detection Agent",
    model: "Claude",
    tokens: 9620,
    cost: 0.12,
    latency: 902,
    status: "Success",
  },
  {
    timestamp: "2026-07-08 13:28:44",
    user: "r.patel",
    agent: "Policy Agent",
    model: "Gemini",
    tokens: 14320,
    cost: 0.14,
    latency: 1091,
    status: "Review",
  },
  {
    timestamp: "2026-07-08 13:27:03",
    user: "m.rivera",
    agent: "Customer Support Agent",
    model: "GPT-5",
    tokens: 8070,
    cost: 0.11,
    latency: 688,
    status: "Success",
  },
  {
    timestamp: "2026-07-08 13:25:16",
    user: "d.nguyen",
    agent: "SQL Analytics Agent",
    model: "Llama",
    tokens: 16110,
    cost: 0.09,
    latency: 1217,
    status: "Failed",
  },
];
