"use client";

import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { evaluationScores } from "@/data/mock-data";

export default function EvaluationsPage() {
  const primaryScores = evaluationScores.slice(0, 4);
  const hallucination = evaluationScores[4];

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {primaryScores.map((score) => (
          <Card key={score.name}>
            <CardHeader>
              <CardTitle className="text-sm text-slate-300">{score.name}</CardTitle>
            </CardHeader>
            <CardContent className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  innerRadius="70%"
                  outerRadius="100%"
                  data={[{ value: score.score }]}
                  startAngle={180}
                  endAngle={0}
                >
                  <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                  <RadialBar dataKey="value" fill="#3b82f6" cornerRadius={10} />
                  <text x="50%" y="56%" textAnchor="middle" fill="#e2e8f0" fontSize={26}>
                    {score.score}
                  </text>
                </RadialBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Hallucination Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Lower is better</span>
            <span>{hallucination.score}/100</span>
          </div>
          <Progress value={100 - hallucination.score} />
        </CardContent>
      </Card>
    </div>
  );
}
