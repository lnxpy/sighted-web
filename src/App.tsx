import { ThemeProvider } from "./components/theme-provider"

import Header from "./components/Header";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Faq from "./components/Faq";
import Footer from "./components/Footer";


export default function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
      <Hero />
      <Demo />
      <Faq />
      <Footer />
    </ThemeProvider>
  )
}
