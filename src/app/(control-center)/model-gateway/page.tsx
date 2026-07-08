"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { modelExamples, models } from "@/data/mock-data";

function healthVariant(health: string): "success" | "warning" {
  return health === "Healthy" ? "success" : "warning";
}

export default function ModelGatewayPage() {
  const [activeTab, setActiveTab] = useState<"models" | "examples">("models");

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-lg border border-white/15 bg-white/5 p-1">
        <button
          type="button"
          onClick={() => setActiveTab("models")}
          className={cn(
            "rounded-md px-4 py-2 text-sm transition-colors",
            activeTab === "models"
              ? "bg-blue-500/30 text-blue-100"
              : "text-slate-300 hover:bg-white/10",
          )}
        >
          Models Used
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("examples")}
          className={cn(
            "rounded-md px-4 py-2 text-sm transition-colors",
            activeTab === "examples"
              ? "bg-blue-500/30 text-blue-100"
              : "text-slate-300 hover:bg-white/10",
          )}
        >
          Examples
        </button>
      </div>

      {activeTab === "models" ? (
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
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {modelExamples.map((example) => (
            <Card key={`${example.model}-${example.useCase}`}>
              <CardHeader>
                <CardTitle className="text-base">
                  {example.model} - {example.useCase}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">Prompt</p>
                  <p className="text-slate-200">{example.prompt}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
                    Example Output
                  </p>
                  <p className="text-slate-300">{example.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
