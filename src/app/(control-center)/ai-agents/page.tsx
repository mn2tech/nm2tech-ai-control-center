import { PlayCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { agents } from "@/data/mock-data";

function statusVariant(status: string): "success" | "warning" | "default" {
  if (status === "Healthy") return "success";
  if (status === "Running") return "default";
  return "warning";
}

export default function AiAgentsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {agents.map((agent) => (
        <Card key={agent.name}>
          <CardHeader className="flex flex-row items-start justify-between">
            <CardTitle>{agent.name}</CardTitle>
            <Badge variant={statusVariant(agent.status)}>{agent.status}</Badge>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-300">
            <p>Requests: {agent.requests}</p>
            <p>Average Latency: {agent.latency}</p>
            <p>Last Execution: {agent.lastExecution}</p>
            <p>Success Rate: {agent.successRate}</p>
            <Button variant="secondary" className="mt-3 w-full">
              <PlayCircle className="h-4 w-4" />
              Open Agent
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
