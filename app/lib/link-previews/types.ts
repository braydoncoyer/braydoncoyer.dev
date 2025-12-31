export interface LinkPreviewManifest {
  generated: string; // ISO timestamp
  version: string; // Schema version
  previews: Record<string, LinkPreviewEntry>;
}

export interface LinkPreviewEntry {
  url: string; // Original URL
  screenshotPath: string; // Path relative to /public
  width: number; // Image dimensions
  height: number;
  generatedAt: string; // ISO timestamp
  status: "success" | "failed" | "timeout";
  errorMessage?: string; // If failed
}

export interface LinkPreviewConfig {
  screenshotWidth: number;
  screenshotHeight: number;
  timeout: number;
  outputDir: string;
  manifestPath: string;
  imageFormat: "png" | "jpeg"; // Playwright only supports png or jpeg
  imageQuality: number;
}

export interface LinkPreviewData {
  screenshotPath: string;
  width: number;
  height: number;
}
