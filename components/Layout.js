import Head from "next/head"
import Header from "./Header"

export default function Layout({ title, keywords, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container mx-auto my-7">
                {children}
            </main>
        </div>
    )
}

Layout.defaultProps = {
    "title": "Welcome to BlogSpace",
    "keywords": "development, coding, programming",
    "description": "Blogs about React, Next, Node, MongoDB and much more by Himanshu Bhardwaz"
}