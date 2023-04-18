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
      <body className='bg-[#10091E] box-border m-0 p-0 text-gray-100'>
        {children}
      </body>
    </html>
  );
}
