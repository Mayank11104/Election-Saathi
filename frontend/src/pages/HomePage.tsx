import Navbar from '../components/landingpage/Navbar';
import HeroSection from '../components/landingpage/HeroSection';
import StatsBar from '../components/landingpage/StatsBar';
import HowItWorks from '../components/landingpage/HowItWorks';
import ElectionPhases from '../components/landingpage/ElectionPhases';
import SampleQuestions from '../components/landingpage/SampleQuestions';
import TrustBar from '../components/landingpage/TrustBar';
import CTASection from '../components/landingpage/CTASection';
import Footer from '../components/landingpage/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <ElectionPhases />
      <SampleQuestions />
      <TrustBar />
      <CTASection />
      <Footer />
    </div>
  );
}
