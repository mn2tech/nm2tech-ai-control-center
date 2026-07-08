import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { approvalQueue } from "@/data/mock-data";

function riskVariant(risk: string): "danger" | "warning" | "success" {
  if (risk === "High") return "danger";
  if (risk === "Medium") return "warning";
  return "success";
}

export default function HumanApprovalPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Human Approval Queue</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="text-slate-300">
            <tr className="border-b border-white/10">
              <th className="p-3">Request ID</th>
              <th className="p-3">Agent</th>
              <th className="p-3">Confidence</th>
              <th className="p-3">Risk</th>
              <th className="p-3">Requested Action</th>
              <th className="p-3">Approve</th>
              <th className="p-3">Reject</th>
            </tr>
          </thead>
          <tbody>
            {approvalQueue.map((item) => (
              <tr key={item.id} className="border-b border-white/5 text-slate-200">
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.agent}</td>
                <td className="p-3">{item.confidence}</td>
                <td className="p-3">
                  <Badge variant={riskVariant(item.risk)}>{item.risk}</Badge>
                </td>
                <td className="p-3 text-slate-300">{item.action}</td>
                <td className="p-3">
                  <Button size="sm">Approve</Button>
                </td>
                <td className="p-3">
                  <Button size="sm" variant="danger">
                    Reject
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
