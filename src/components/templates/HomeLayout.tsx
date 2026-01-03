import Header from "../organisms/header/Header"
import FeaturesSection from "../organisms/home/FeaturesSection"
import HeroSection from "../organisms/home/HeroSection"
import PlanSection from "../organisms/home/PlanSection"
const HomeLayout = () => {
  return (
    <>
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <PlanSection/>
    </>
  )
}

export default HomeLayout