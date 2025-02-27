import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Times New Roman', 'serif'],
        'mono': ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        background: '#f2f1e7',
        'background-hover': '#f7f7f7',
        foreground: '#000000',
        'muted-foreground': '#666666',
      },
    },
  },
  plugins: [],
} satisfies Config;
