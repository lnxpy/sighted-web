import { ThemeProvider } from "./components/theme-provider"

import Header from "./components/Header";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Footer from "./components/Footer";


export default function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <Header />
      <Hero />
      <Demo />
      <Features />
      <Faq />
      <Footer />
    </ThemeProvider>
  )
}
