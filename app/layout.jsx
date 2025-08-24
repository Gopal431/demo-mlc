import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Best School Management Software & ERP in India | Free Trial",
    description:
        "Top-rated AI School Management System & ERP for schools and colleges. Free trial. Manage fees, attendance, exams, reports & transport. Best in India.",
    keywords: [
        "school management software",
        "school ERP",
        "school management system India",
        "best ERP for schools",
        "school administration app",
        "school software India",
    ],
    authors: [
        {
            name: "MyLeading Campus",
            url: "https://myleadingcampus.com",
        },
    ],
    creator: "MyLeading Campus",
    publisher: "MyLeading Campus",
    icons: {
        icon: "/mlc-logo.png",
        shortcut: "/mlc-logo.png",
        apple: "/mlc-logo.png",
    },
    openGraph: {
        title: "MyLeading Campus – School ERP Software in India",
        description:
            "MyLeading Campus is a school management software that helps schools manage operations like attendance, academics, fees, and communication efficiently.",
        url: "https://myleadingcampus.com",
        siteName: "MyLeading Campus",
        images: [
            {
                url: "https://www.app.myleadingcampus.com/assets/mlc-BUonKMtH.png", // Ensure image exists
                width: 1200,
                height: 630,
                alt: "MyLeading Campus – School ERP",
            },
        ],
        type: "website",
    },
};

export const dynamic = "force-dynamic";
export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className="scroll-smooth"
            data-new-gr-c-s-check-loaded="14.1235.0"
            data-gr-ext-installed=""
        >
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/mlc-logo.png" />
                <link rel="canonical" href="https://myleadingcampus.com/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Best School Management Software & ERP in India | MyLeading Campus</title>
                <meta name="description" content="Top-rated AI School Management Software & ERP for schools and colleges in India. Free trial. Manage fees, attendance, exams, reports & transport. Trusted by 1000+ institutions." />
                <meta name="keywords" content="school management software, school ERP, school management system India, best ERP for schools, school administration app, school software India, education ERP, school automation, online school management, school fee management, attendance management, exam management, report card software, transport management, AI school ERP" />
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="MyLeading Campus – Best School ERP Software in India" />
                <meta property="og:description" content="MyLeading Campus is a top-rated school management software & ERP for schools and colleges. Manage operations like attendance, academics, fees, and communication efficiently." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://myleadingcampus.com/" />
                <meta property="og:site_name" content="MyLeading Campus" />
                <meta property="og:image" content="https://www.app.myleadingcampus.com/assets/mlc-BUonKMtH.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MyLeading Campus – Best School ERP Software in India" />
                <meta name="twitter:description" content="Top-rated AI School Management Software & ERP for schools and colleges in India. Free trial. Manage fees, attendance, exams, reports & transport." />
                <meta name="twitter:image" content="https://www.app.myleadingcampus.com/assets/mlc-BUonKMtH.png" />
                {/* JSON-LD Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",   
                  "name": "MyLeading Campus",
                  "url": "https://myleadingcampus.com/",
                  "image": "https://www.app.myleadingcampus.com/assets/mlc-BUonKMtH.png",
                  "description": "Top-rated AI School Management Software & ERP for schools and colleges in India. Free trial. Manage fees, attendance, exams, reports & transport.",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1200"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "MyLeading Campus",
                    "url": "https://myleadingcampus.com"
                  }
                }` }} />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
