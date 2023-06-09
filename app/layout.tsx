// import './globals.css';
// import '../styles/globals.css';
import React from 'react';
/**Components**/
import Header from '@/components/layoutComponents/header/Header';
import AppContainer from '@/components/layoutComponents/appContent/AppContainer';
import PseudoFooter from '@/components/layoutComponents/pseudoFooter/PseudoFooter';
/**CSS Staff**/
import '@/styles/globals.css';
/**Font Staff*/
import { inter, garamond } from './fonts/fonts';

/**<Head> staff*/
export const metadata = {
  title: 'Tkaczewski-cv',
  description: 'Provider of true take-offs in the Internet.',
};

/**---------------------------------**/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /**JSX**/
  return (
    <html
      lang="en"
      // className={inter.className}
      className={`${inter.variable} ${garamond.variable}`}
      // className={`${garamond.className}`}
    >
      <body className="relative font-sans">
        <Header />
        <AppContainer>{children}</AppContainer>
        <PseudoFooter />
      </body>
    </html>
  );
}
