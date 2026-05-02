import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import HowItWorks from '../components/HowItWorks';
import ElectionPhases from '../components/ElectionPhases';
import SampleQuestions from '../components/SampleQuestions';
import TrustBar from '../components/TrustBar';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

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
