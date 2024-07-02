import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="fa">
            <Head>
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
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
