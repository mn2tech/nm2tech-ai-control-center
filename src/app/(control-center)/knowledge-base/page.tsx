import { FileText } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { knowledgeBaseDocs } from "@/data/mock-data";

export default function KnowledgeBasePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Knowledge Base</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {knowledgeBaseDocs.map((doc) => (
          <div
            key={doc.name}
            className="flex flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="flex items-center gap-2 font-medium text-slate-100">
                <FileText className="h-4 w-4 text-blue-300" />
                {doc.name}
              </p>
              <p className="mt-1 text-sm text-slate-400">Last updated: {doc.lastUpdated}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
              <p>Chunks indexed: {doc.chunksIndexed}</p>
              <p>Embeddings created: {doc.embeddingsCreated}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
