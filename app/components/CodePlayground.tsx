"use client";

import { Sandpack, SandpackTheme } from "@codesandbox/sandpack-react";

interface CodePlaygroundProps {
  files: Record<string, string>;
  template?: "static" | "react" | "vanilla" | "vue" | "angular" | "svelte";
  showPreview?: boolean;
  editorHeight?: number;
  previewHeight?: number;
}

export function CodePlayground({
  files,
  template = "static",
  showPreview = true,
  editorHeight = 400,
  previewHeight = 400,
}: CodePlaygroundProps) {
  // Custom theme matching the site's aesthetic
  const customTheme: SandpackTheme = {
    colors: {
      surface1: "#1e293b", // slate-800
      surface2: "#334155", // slate-700
      surface3: "#475569", // slate-600
      clickable: "#818cf8", // indigo-400
      base: "#e2e8f0", // slate-200
      disabled: "#64748b", // slate-500
      hover: "#c7d2fe", // indigo-200
      accent: "#6366f1", // indigo-500
      error: "#ef4444", // red-500
      errorSurface: "#7f1d1d", // red-900
    },
    syntax: {
      plain: "#e2e8f0",
      comment: {
        color: "#94a3b8",
        fontStyle: "italic",
      },
      keyword: "#c084fc",
      tag: "#ec4899",
      punctuation: "#cbd5e1",
      definition: "#60a5fa",
      property: "#fbbf24",
      static: "#818cf8",
      string: "#34d399",
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      mono: '"Fira Code", "Fira Mono", monospace',
      size: "14px",
      lineHeight: "1.6",
    },
  };

  return (
    <div className="full-bleed mb-12 w-full">
      <div className="blog-container">
        <Sandpack
          template={template}
          files={files}
          theme={customTheme}
          options={{
            showNavigator: false,
            showTabs: Object.keys(files).length > 1,
            showLineNumbers: true,
            showInlineErrors: true,
            editorHeight: editorHeight,
            editorWidthPercentage: showPreview ? 50 : 100,
            wrapContent: true,
            autoReload: true,
            autorun: true,
          }}
          customSetup={{
            dependencies: {},
          }}
        />
      </div>
    </div>
  );
}
