import { motion } from 'framer-motion';

const DressCodeSection = () => {
  const dressCodeColors = [
    { name: 'Sage', color: '#9CAF88', hex: '#9CAF88' },
    { name: 'Silver Gray', color: '#C0C0C0', hex: '#C0C0C0' },
    { name: 'Champagne', color: '#F7E7CE', hex: '#F7E7CE' },
    { name: 'Dessert Rose', color: '#F39998', hex: '#F39998' }
  ];

  const principalSponsorsColors = [
    { name: 'Light Gray', color: '#D3D3D3', hex: '#D3D3D3' },
    { name: 'Dusty Blue', color: '#8BA9C3', hex: '#8BA9C3' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue bg-white relative overflow-hidden mt-[10px] pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10 px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display font-light italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Side by Side Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
          >
            <div className="h-full bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 relative flex flex-col">
              <div className="text-center flex-1">
                <div className="mb-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-foreground mb-8 relative z-10 uppercase tracking-widest">
                    Principal Sponsors
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="inline-block px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                      <p className="text-sm font-semibold text-primary uppercase tracking-wider">Formal Attire</p>
                    </div>
                    <div className="text-sm text-foreground/80 space-y-1">
                      <p>Men: Light gray suit</p>
                      <p>Ladies: Dusty blue long gown</p>
                    </div>
                  </div>
                  <motion.img 
                    src="https://res.cloudinary.com/dbciwaal4/image/upload/v1768226844/30e6b820-6706-44c7-adf4-b4243feb0bdb.png"
                    alt="Principal Sponsors attire"
                    className="w-full max-w-[200px] md:max-w-[240px] mx-auto object-contain rounded-2xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 8.5 }}
                  />
                </div>
                
                {/* Color Palette for Principal Sponsors */}
                <div className="mt-auto pt-8 border-t border-primary/20">
                  <p className="text-sm font-semibold text-foreground mb-6 uppercase tracking-widest">Color Motif</p>
                  <div className="flex justify-center">
                    {principalSponsorsColors.map((colorItem, index) => (
                      <div key={index} className="text-center pl-[10px] pr-[10px]">
                        <div 
                          className="w-16 h-16 rounded-xl border-2 border-border shadow-soft hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-2 font-medium tracking-wide">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
          >
            <div className="h-full bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 relative flex flex-col">
              <div className="text-center flex-1">
                <div className="mb-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-foreground mb-8 relative z-10 uppercase tracking-widest">
                    Guests
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="inline-block px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                      <p className="text-sm font-semibold text-primary uppercase tracking-wider">Semi-Formal Attire</p>
                    </div>
                    <div className="text-sm text-foreground/80 space-y-1">
                      <p>Men: Longsleeve, pants, close to formal shoes</p>
                      <p>Ladies: Long dress, cocktail dress, heels or closed shoes</p>
                    </div>
                  </div>
                  <motion.img 
                    src="https://res.cloudinary.com/dbciwaal4/image/upload/v1767713884/ca574738-ef08-4ef0-8169-481679b87966_1_bltgso.jpg"
                    alt="Guests attire"
                    className="w-full max-w-[200px] md:max-w-[240px] mx-auto object-contain rounded-2xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 8.8 }}
                  />
                </div>
                
                {/* Color Palette for Guests */}
                <div className="mt-auto pt-8 border-t border-primary/20">
                  <p className="text-sm font-semibold text-foreground mb-6 uppercase tracking-widest">Color Motif</p>
                  <div className="flex justify-center flex-wrap gap-4">
                    {dressCodeColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-16 h-16 rounded-xl border-2 border-border shadow-soft hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-2 font-medium tracking-wide">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;
