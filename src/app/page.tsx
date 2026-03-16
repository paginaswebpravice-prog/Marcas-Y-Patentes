import CallToAction from "./components/CallToAction";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import SmartInvestment from "./components/SmartInvestment";
import SuccessCases from "./components/SuccessCases";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyRegister from "./components/WhyRegister";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyRegister />
      <Services />
      <Experience />
      <Process />
      <WhyChooseUs />
      <SuccessCases />
      <SmartInvestment />
      <CallToAction />
    </>
  );
}
