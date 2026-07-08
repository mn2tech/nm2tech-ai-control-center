"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { auditLogs } from "@/data/mock-data";

function statusVariant(status: string): "success" | "warning" | "danger" {
  if (status === "Success") return "success";
  if (status === "Review") return "warning";
  return "danger";
}

export default function AuditLogsPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Success" | "Review" | "Failed">(
    "All",
  );

  const filtered = useMemo(() => {
    return auditLogs.filter((log) => {
      const matchQuery =
        log.user.toLowerCase().includes(query.toLowerCase()) ||
        log.agent.toLowerCase().includes(query.toLowerCase()) ||
        log.model.toLowerCase().includes(query.toLowerCase());
      const matchStatus = statusFilter === "All" ? true : log.status === statusFilter;
      return matchQuery && matchStatus;
    });
  }, [query, statusFilter]);

  return (
    <Card>
      <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <CardTitle>Audit Logs</CardTitle>
        <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row">
          <Input
            placeholder="Search by user, agent, model"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="md:w-72"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
            className="h-10 rounded-lg border border-white/15 bg-slate-900/70 px-3 text-sm text-slate-100 outline-none"
          >
            <option>All</option>
            <option>Success</option>
            <option>Review</option>
            <option>Failed</option>
          </select>
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="text-slate-300">
            <tr className="border-b border-white/10">
              <th className="p-3">Timestamp</th>
              <th className="p-3">User</th>
              <th className="p-3">Agent</th>
              <th className="p-3">Model</th>
              <th className="p-3">Tokens</th>
              <th className="p-3">Cost</th>
              <th className="p-3">Latency</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((log) => (
              <tr key={`${log.timestamp}-${log.user}`} className="border-b border-white/5">
                <td className="p-3 text-slate-300">{log.timestamp}</td>
                <td className="p-3 text-slate-200">{log.user}</td>
                <td className="p-3 text-slate-200">{log.agent}</td>
                <td className="p-3 text-slate-200">{log.model}</td>
                <td className="p-3 text-slate-300">{log.tokens.toLocaleString()}</td>
                <td className="p-3 text-slate-300">${log.cost.toFixed(2)}</td>
                <td className="p-3 text-slate-300">{log.latency} ms</td>
                <td className="p-3">
                  <Badge variant={statusVariant(log.status)}>{log.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
