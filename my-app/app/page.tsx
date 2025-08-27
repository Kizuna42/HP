import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { TechnologySection } from "@/components/technology-section"
import { ProductsSection } from "@/components/products-section"
import { CompanySection } from "@/components/company-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <TechnologySection />
      <ProductsSection />
      <CompanySection />
      <ContactSection />
    </div>
  )
}
