import { ThemeProvider } from "@/components/theme-provider"

import { Header, Hero, Demo, Faq, Footer } from "@/components";


function App() {

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

export default App
