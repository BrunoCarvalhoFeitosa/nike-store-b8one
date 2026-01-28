import { Carousel } from "@/app/components/home/Carousel"
import { DoubleBanner } from "@/app/components/home/DoubleBanner"
import { TripleBanner } from "@/app/components/home/TripleBanner"

const HomePage = () => {
  return (
    <main>
      <Carousel />
      <DoubleBanner />
      <TripleBanner />
    </main>
  )
}

export default HomePage
