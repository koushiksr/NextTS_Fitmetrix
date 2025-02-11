import './globals.css';
import Sidebar from '@/components/Sidebar';
import { auth } from '@/app/auth';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {session && <Sidebar />}
          <div className="ml-16 p-4 h-screen overflow-hidden" style={{ width: 'calc(100% - 4rem)' }}>
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
