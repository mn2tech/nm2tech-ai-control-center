import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Platform Configuration</CardTitle>
          <CardDescription>
            Backend connectors and policy controls are ready for integration.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-slate-300">
          <p>Identity Provider: SSO (SAML/OIDC)</p>
          <p>Default Approval Threshold: 0.90</p>
          <p>PII Redaction: Enabled</p>
          <p>Retention Window: 90 days</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Environment</CardTitle>
          <CardDescription>Production posture and governance profile.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-slate-300">
          <p>Region: us-east-1</p>
          <p>Compliance: SOC 2, PCI DSS</p>
          <p>Key Management: Customer-managed keys</p>
          <p>Incident Alerts: PagerDuty + Slack</p>
        </CardContent>
      </Card>
    </div>
  );
}
