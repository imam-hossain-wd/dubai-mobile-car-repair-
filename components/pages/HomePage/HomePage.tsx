import { FeaturedServices } from '@/components/view/FeaturedServices/FeaturedServices'
import { Hero } from '@/components/view/Hero/Hero'
import HowItWorks from '@/components/view/HowItWorks/HowItWorks'
import { Projects } from '@/components/view/Projects/Projects'
import Reviews from '@/components/view/Reviews/Reviews'
import { ServiceMap } from '@/components/view/ServiceMap/ServiceMap'
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
        <ServiceMap />
        <Reviews />
    </div>
  )
}
