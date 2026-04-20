import { Rocket, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6">
      <div className="text-center max-w-lg">
        {/* Logo */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}
          >
            <Rocket size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl text-slate-100 tracking-tight">Craftly</span>
        </div>

        <h1 className="text-4xl font-bold text-slate-100 mb-4">
          404 Template{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #6366f1, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Demo
          </span>
        </h1>

        <p className="text-slate-400 text-lg mb-10">
          A beautiful, animated 404 page for your Next.js project.
          <br />
          Click the button below to see it in action.
        </p>

        <a
          href="/nonexistent"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #6366f1, #ec4899)",
            boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
          }}
        >
          <ExternalLink size={18} />
          See the 404 page
        </a>

        <p className="mt-8 text-slate-600 text-sm">
          Free template ·{" "}
          <a
            href="https://getcraftly.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors"
          >
            More templates at Craftly →
          </a>
        </p>
      </div>
    </main>
  );
}
