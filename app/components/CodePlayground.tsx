"use client";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackTheme,
} from "@codesandbox/sandpack-react";

interface CodePlaygroundProps {
  files: Record<string, string>;
  template?: "static" | "react" | "vanilla" | "vue" | "angular" | "svelte";
  showPreview?: boolean;
  editorHeight?: number;
  previewHeight?: number;
}

function CodeEditorWithDecorators({
  editorHeight,
  showTabs,
}: {
  editorHeight: number;
  showTabs: boolean;
}) {
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

  // Use first file as active file
  const activeFile = Object.keys(files)[0];

  return (
    <div className="wide-layout mb-12 md:px-8 [&_iframe]:mb-0">
      <div className="drama-shadow overflow-hidden rounded-xl">
        <SandpackProvider
          template={template}
          files={files}
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
