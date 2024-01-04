import Nav from '@/components/Landing/Nav';
import HeroSection from '@/components/Landing/Hero';
import PointSection from '@/components/Landing/Point';
import CardSection from '@/components/Landing/Card';
import Footer from '@/components/Landing/Footer';
import useRedirectByLogin from '@/hooks/useRedirectByLogin';
import { Helmet } from 'react-helmet';

function Landing() {
  useRedirectByLogin();
  return (
    <>
      <Helmet>
        <title>일정 관리는 Jawstify - Jawstify</title>
      </Helmet>
      <Nav />
      <HeroSection />
      <PointSection />
      <CardSection />
      <Footer />
    </>
  );
}

export default Landing;
