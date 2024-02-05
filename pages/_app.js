import "@/styles/globals.css";
import Link from "next/link";
import Footer from "./footer";

export default function App({ Component, pageProps }) {
  return(
  <>
    <Navigation />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}

function Navigation() {
  return (
    <>
    <div className="navigation">
      <Link href="/" className="navigationhome">Home </Link>
      <Link href="/blog" className="navigationblog">Blog </Link>
      <Link href="/course" className="navigationcourse">Course </Link>
      </div>
    </>
  );
};











