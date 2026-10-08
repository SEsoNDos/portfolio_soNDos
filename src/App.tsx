import Contact from "@/components/landing_page/contact"
import Footer from "@/components/landing_page/footer"
import Header4 from "@/components/landing_page/header-4"
import Hero from "@/components/landing_page/hero"
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider>
      <Header4 />
      <main>
        <Hero />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
