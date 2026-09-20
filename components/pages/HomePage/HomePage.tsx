import { FeaturedServices } from '@/components/view/FeaturedServices/FeaturedServices'
import { Hero } from '@/components/view/Hero/Hero'
import HowItWorks from '@/components/view/HowItWorks/HowItWorks'
import { WhoWeAre } from '@/components/view/WhoWeAre/WhoWeAre'


export default function HomePage() {
  return (
    <div>
        <Hero />
        <HowItWorks />
        <FeaturedServices />
        <WhoWeAre />
    </div>
  )
}
