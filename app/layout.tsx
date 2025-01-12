import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "David Perez - Software Engineer - Portfolio",
  description: "This is my personal portfolio where I showcase my work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
