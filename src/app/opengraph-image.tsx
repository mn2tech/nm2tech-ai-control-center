import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0B1220",
          color: "#E2E8F0",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 12% 14%, rgba(59,130,246,0.35), transparent 36%), radial-gradient(circle at 88% 80%, rgba(34,211,238,0.2), transparent 30%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
            padding: "64px 72px",
            width: "68%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#93C5FD",
              letterSpacing: 1.5,
            }}
          >
            ENTERPRISE AI PLATFORM
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>NM2TECH AI</span>
            <span>Control Center</span>
          </div>
          <div style={{ fontSize: 27, color: "#CBD5E1", lineHeight: 1.3 }}>
            Secure • Governed • Human-in-the-Loop • Production Ready
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
            width: "32%",
            paddingRight: 48,
            zIndex: 2,
          }}
        >
          {["AI Agents", "Model Gateway", "Approval Rate", "Eval Safety"].map((label, idx) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                padding: "14px 16px",
                borderRadius: 14,
                border: "1px solid rgba(148,163,184,0.32)",
                background: "rgba(15,23,42,0.58)",
              }}
            >
              <div style={{ fontSize: 16, color: "#BFDBFE" }}>{label}</div>
              <div
                style={{
                  height: 8,
                  borderRadius: 999,
                  background: "rgba(51,65,85,0.75)",
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: `${65 + idx * 8}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #3B82F6, #22D3EE)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
