import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
// Cover media
import cover2Image from '@assets/Dong&Ris-209_1762581138035.jpg';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);
    
    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Background music playback failed:', error);
      }
    }
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
        data-testid="background-audio"
        src="https://res.cloudinary.com/diskgga1j/video/upload/v1767537799/Everything_pz76fh.mp3"
      />

      <MusicConsentPopup 
        onConsent={handleMusicConsent} 
        isVisible={showMusicConsent} 
      />

      <div className="min-h-screen relative">
        <Navigation />

        <main className="relative z-10 space-y-0">
          <HeroSection audioRef={audioRef} />
        <InvitationRevealSection />
        <CountdownSection />
        <ImageLoop />
        <StorySection />
        <ScrollTriggeredTimeline />
        <CoverSection
          imageUrl="https://res.cloudinary.com/diskgga1j/image/upload/v1767535244/cover1_gc0h2d.jpg"
          alt="Tim & Karla Wedding Cover 1"
        />
        <VenueSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/diskgga1j/image/upload/v1767535244/cover2_ptmjqx.jpg"
          alt="Tim & Karla Wedding Cover 2"
        />
        <DressCodeSection />
        <HashtagGiftsSection />
        <MemorableMomentsSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/diskgga1j/image/upload/v1767535245/cover4_nrhwxr.jpg"
          alt="Tim & Karla Wedding Cover 4"
        />
        <RSVPSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/diskgga1j/image/upload/v1767535243/cover5_lnpn7y.jpg"
          alt="Tim & Karla Wedding Cover 5"
        />
        <EntourageSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/diskgga1j/image/upload/v1767535245/cover3_rnwsiy.jpg"
          alt="Tim & Karla Wedding Cover 3"
        />
        <FAQSection />
        <Footer />
      </main>
    </div>
    </AnimationContext.Provider>
  );
};

export default Index;