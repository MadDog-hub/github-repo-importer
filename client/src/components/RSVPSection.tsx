import { motion } from 'framer-motion';
import ringImage from '@assets/rsvp-ring_1760518283296.png';

const RSVPSection = () => {
  
  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue bg-white relative overflow-hidden py-8 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 10.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.8 }}
        >
          <h2 
            className="text-gold text-[48px] md:text-5xl" 
            style={{ fontFamily: 'Boska, serif', fontWeight: 300, fontStyle: 'normal' }} 
            data-testid="text-rsvp-header"
          >
            RSVP Here
          </h2>
        </motion.div>

        {/* RSVP Content */}
        <div className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center">
          {/* Ring Image Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={ringImage}
              alt="Wedding Ring"
              className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain opacity-40"
              data-testid="img-ring-background"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
            {/* "RSVP" - Split into RS and VP */}
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 11.2 }}
            >
              <span 
                className="text-[150px] md:text-[240px] lg:text-[320px] leading-[0.8] text-foreground tracking-tight block"
                style={{ fontFamily: 'Boska, serif', fontWeight: 350 }}
                data-testid="text-rsvp-title"
              >
                RS<br />VP
              </span>
            </motion.div>

            {/* Deadline and Button */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 11.4 }}
            >
              <a 
                href="https://tim-karla-rsvp.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-primary text-primary-foreground text-sm md:text-base font-display tracking-wider hover:bg-primary/90 transition-colors duration-300 border-2 border-primary uppercase"
                data-testid="button-rsvp"
              >RSVP HERE!</a>

              <div className="mt-4 flex flex-col items-center space-y-4">
                <p className="text-sm md:text-base text-muted-foreground font-body italic">or scan this QR code to RSVP</p>
                <img 
                  src="https://res.cloudinary.com/dbciwaal4/image/upload/v1768226065/446c1c5e-81c3-4212-a4c6-328a14a65b88.png" 
                  alt="RSVP QR Code" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-lg shadow-sm border border-primary/10"
                  data-testid="img-rsvp-qrcode"
                />
              </div>

              {/* Message below button with white container */}
              <div className="mt-8 bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-teal border border-primary/20">
                <p 
                  className="font-body text-base md:text-lg text-foreground font-medium text-center mb-4"
                  data-testid="text-rsvp-message"
                >
                  Please confirm your attendance by responding to our invitation. Click the RSVP HERE! button above.
                </p>
                <p className="text-center">
                  <span className="font-body md:text-lg font-bold px-3 py-1 rounded whitespace-nowrap text-[12px] text-primary-foreground bg-primary">THE DEADLINE IS ON FEBRUARY 15</span>
                </p>

                {/* Additional RSVP Notes */}
                <div className="mt-8 pt-8 border-t border-primary/10 text-left space-y-6">
                  <div>
                    <h4 className="font-display font-bold text-primary uppercase tracking-wider text-base md:text-lg mb-2 italic">Plus one's</h4>
                    <p className="text-base md:text-lg text-foreground leading-relaxed font-body font-medium">
                      Due to limited seating, we kindly request that only those formally addressed on the invitation join us for our celebration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary uppercase tracking-wider text-base md:text-lg mb-2 italic">Children:</h4>
                    <p className="text-base md:text-lg text-foreground leading-relaxed font-body font-medium">
                      While we adore children and want them to have fun, we kindly request an adults-only celebration, with the exception of those in the entourage.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RSVPSection;
