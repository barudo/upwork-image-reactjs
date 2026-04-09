import {
  Topbar,
  Hero,
  About,
  Methodology,
  Gallery,
  Features,
  Success,
  Plans,
  Team,
  Clients,
  Contact,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div className="page">
      <Topbar />
      <Hero />
      <About />
      <Methodology />
      <Gallery />
      <Features />
      <Success />
      <Plans />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
