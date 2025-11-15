"use client";

import { Sandpack, SandpackTheme } from "@codesandbox/sandpack-react";

interface CodePlaygroundProps {
  files: Record<string, string>;
  template?: "static" | "react" | "vanilla" | "vue" | "angular" | "svelte";
  showPreview?: boolean;
  editorHeight?: number;
  previewHeight?: number;
  highlightedLines?: Record<string, number[]>;
}

export function CodePlayground({
  files,
  template = "static",
  showPreview = true,
  editorHeight = 600,
  previewHeight = 600,
  highlightedLines = {},
}: CodePlaygroundProps) {
  // Custom light theme matching the site's code blocks
  const customTheme: SandpackTheme = {
    colors: {
      surface1: "#ffffff", // White background like code blocks
      surface2: "#f8fafc", // Slightly off-white for subtle contrast
      surface3: "#f1f5f9", // Light slate for hover states
      clickable: "#6366f1", // Indigo for clickable elements
      base: "#334155", // Slate for text
      disabled: "#94a3b8", // Light slate for disabled
      hover: "#e0e7ff", // Light indigo for hover
      accent: "#6366f1", // Indigo accent
      error: "#ef4444", // Red for errors
      errorSurface: "#fef2f2", // Light red background
    },
    syntax: {
      plain: "#334155", // Base slate color
      comment: {
        color: "#64758b", // Matches --sh-comment
        fontStyle: "italic",
      },
      keyword: "#7e3ced", // Matches --sh-keyword (purple)
      tag: "#0885c7", // Matches --sh-entity (cyan)
      punctuation: "#334155", // Matches --sh-sign (slate)
      definition: "#2252d9", // Matches --sh-identifier (blue)
      property: "#0d9488", // Matches --sh-property (teal)
      static: "#6266d1", // Matches --sh-jsxliterals (indigo)
      string: "#00a99a", // Matches --sh-string (teal/cyan)
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      mono: '"Fira Code", "Fira Mono", monospace',
      size: "15px", // Matches the code block font size
      lineHeight: "1.75", // Matches leading-7
    },
  };

  // Convert files to Sandpack files format with decorators for highlighting
  const sandpackFiles = Object.entries(files).reduce((acc, [path, code]) => {
    const linesToHighlight = highlightedLines[path] || [];

    if (linesToHighlight.length > 0) {
      acc[path] = {
        code: code,
        active: true,
        decorators: linesToHighlight.map(line => ({
          line,
          className: 'sandpack-highlight'
        }))
      };
    } else {
      acc[path] = code;
    }

    return acc;
  }, {} as Record<string, any>);

  return (
    <div className="wide-layout mb-12 [&_iframe]:mb-0">
      <div className="drama-shadow rounded-xl overflow-hidden">
        <Sandpack
          template={template}
          files={sandpackFiles}
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
            showConsoleButton: false,
            activeFile: Object.keys(highlightedLines)[0] || Object.keys(files)[0],
          }}
          customSetup={{
            dependencies: {},
          }}
        />
      </div>
    </div>
  );
}
