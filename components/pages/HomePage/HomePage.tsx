import { FeaturedServices } from '@/components/view/FeaturedServices/FeaturedServices'
import { Hero } from '@/components/view/Hero/Hero'
import HowItWorks from '@/components/view/HowItWorks/HowItWorks'
import { Projects } from '@/components/view/Projects/Projects'
import { WhoWeAre } from '@/components/view/WhoWeAre/WhoWeAre'
import { WhyChooseUs } from '@/components/view/WhyChooseUs/WhyChooseUs'


export default function HomePage() {
  return (
    <div>
        <Hero />
        <HowItWorks />
        <FeaturedServices />
        <WhoWeAre />
        <WhyChooseUs />
        <Projects />
    </div>
  )
}
