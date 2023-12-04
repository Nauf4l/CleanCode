import PageLayout from "./layouts/PageLayout"
import { HeroSection, AboutUs, Contacts, Services } from "./components/organisms"

function App() {
  return (
    <PageLayout>
      <HeroSection />
      <AboutUs />
      <Services />
      <Contacts />
    </PageLayout>
  )
}

export default App
