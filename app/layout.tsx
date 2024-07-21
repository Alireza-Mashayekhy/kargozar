'use client';
import '@/assets/styles/globals.css';
import '@/assets/styles/typography.scss';
import '@/assets/styles/font.scss';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import { Person, WithContext } from 'schema-dts';
import Script from 'next/script';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd: WithContext<Person> = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tehran',
            addressRegion: 'Tehran',
            streetAddress:
                'خیـــابـــان آزادی، خیـــابـــان حبیب الله، خیابان قاسمی، جنب جهاد دانشگاهی شریف، مرکز نوآوری باکس',
        },
        image: '/about/user.webp',
        jobTitle: 'Official customs broker',
        name: 'محمدامین قنبری',
        telephone: '+98-9128938490',
        url: 'https://kargozargomrok.com',
    };
    return (
        <html lang="fa">
            <body>
                <Toaster position="top-center" />
                <Header />
                <BottomNav />
                {children}
                <Footer />
                <Script
                    id="person-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
            </body>
            <head>
                <link
                    rel="icon"
                    href="/logo/KGLogo.webp"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <link
                    rel="apple-touch-icon"
                    href="/logo/KGLogo.webp"
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
