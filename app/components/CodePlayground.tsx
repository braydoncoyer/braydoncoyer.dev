"use client";

import { useEffect } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackTheme,
  useSandpack,
} from "@codesandbox/sandpack-react";

interface CodePlaygroundProps {
  files: Record<string, string>;
  template?: "static" | "react" | "vanilla" | "vue" | "angular" | "svelte";
  showPreview?: boolean;
  editorHeight?: number;
  previewHeight?: number;
  highlightedLines?: Record<string, number[]>;
}

function CodeEditorWithDecorators({
  editorHeight,
  showTabs,
  decorators,
}: {
  editorHeight: number;
  showTabs: boolean;
  decorators: Array<{ line: number; className: string }>;
}) {
  const { sandpack } = useSandpack();

  useEffect(() => {
    if (decorators.length > 0 && sandpack.activeFile) {
      // Set decorators through Sandpack API
      const timeout = setTimeout(() => {
        const editorElement = document.querySelector(".cm-editor");
        if (editorElement) {
          decorators.forEach(({ line }) => {
            const lineElement = editorElement.querySelector(
              `.cm-line:nth-child(${line})`
            );
            if (lineElement) {
              lineElement.classList.add("sandpack-highlight");
            }
          });
        }
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [decorators, sandpack.activeFile]);

  return (
    <SandpackCodeEditor
      showTabs={showTabs}
      showLineNumbers={true}
      showInlineErrors={true}
      wrapContent={true}
      style={{ height: `${editorHeight}px` }}
    />
  );
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
      };
    } else {
      acc[path] = code;
    }

    return acc;
  }, {} as Record<string, any>);

  // Find the file to make active (the one with highlights, or first file)
  const activeFile = Object.keys(highlightedLines)[0] || Object.keys(files)[0];

  // Get decorators for active file
  const decorators = highlightedLines[activeFile]?.map(line => ({
    line,
    className: 'sandpack-highlight'
  })) || [];

  return (
    <div className="wide-layout mb-12 [&_iframe]:mb-0">
      <div className="drama-shadow rounded-xl overflow-hidden">
        <SandpackProvider
          template={template}
          files={sandpackFiles}
          theme={customTheme}
          options={{
            activeFile: activeFile,
            autoReload: true,
            autorun: true,
          }}
          customSetup={{
            dependencies: {},
          }}
        >
          <SandpackLayout>
            <CodeEditorWithDecorators
              editorHeight={editorHeight}
              showTabs={Object.keys(files).length > 1}
              decorators={decorators}
            />
            {showPreview && (
              <SandpackPreview
                style={{ height: `${editorHeight}px` }}
                showOpenInCodeSandbox={false}
                showRefreshButton={false}
              />
            )}
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
}
