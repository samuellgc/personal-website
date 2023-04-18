import './globals.css';

export const metadata = {
  title: 'Desenvolva sua ideia',
  description: 'Tire sua ideia do papel conosco!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
