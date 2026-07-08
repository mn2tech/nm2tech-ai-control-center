import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { models } from "@/data/mock-data";

function healthVariant(health: string): "success" | "warning" {
  return health === "Healthy" ? "success" : "warning";
}

export default function ModelGatewayPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {models.map((model) => (
        <Card key={model.name}>
          <CardHeader className="flex flex-row items-start justify-between">
            <CardTitle>{model.name}</CardTitle>
            <Badge variant={healthVariant(model.health)}>{model.health}</Badge>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-300">
            <p>Latency: {model.latency}</p>
            <p>Availability: {model.availability}</p>
            <p>Cost per 1K tokens: {model.cost}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
