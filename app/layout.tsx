import '@/assets/styles/globals.css';
import '@/assets/styles/font.scss';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';

export default function RootLayout({
    children,
    team,
}: {
    children: React.ReactNode;
    team: React.ReactNode;
}) {
    return (
        <html lang="fa">
            <body>
                {team}
                <Toaster position="top-center" />
                <Header />
                <BottomNav />
                {children}
                <Footer />
            </body>
            <head>
                <link
                    rel="icon"
                    href="/logo/KGLogo.png"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <link
                    rel="apple-touch-icon"
                    href="/logo/KGLogo.png"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: light)"
                    content="#401F71"
                />
            </head>
        </html>
    );
}
