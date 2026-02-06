import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    parents: [
      { 
        label: "Parents of the Groom", 
        names: ["Manuel Canilao ✝", "Susan C. Canilao"] 
      },
      { 
        label: "Parents of the Bride", 
        names: ["Henry K. Anotado ✝", "Lourdes S. Anotado"] 
      }
    ],
    principalSponsors: {
      title: "Ninong and Ninang",
      men: [
        "Andres P. Canilao",
        "Jimmy E. Chua",
        "Jose Ramon A. Villanueva",
        "Edione Febrero",
        "Hendrik Meijnhardt",
        "Steve Morales"
      ],
      women: [
        "Cosette V. Canilao",
        "Glenda F. Chua",
        "Svetlana A. Villanueva",
        "Myrna Antonio",
        "Cecilia A. Marinay",
        "Ruth Morales"
      ]
    },
    secondarySponsors: {
      title: "Secondary Sponsors",
      roles: [
        { role: "Candle", names: ["Clariza Carpio", "Rey Brian C. Glean"] },
        { role: "Veil", names: ["Rita Casiquin", "Immanuel C. Canilao"] },
        { role: "Cord", names: ["Kathleen Santiago-Echavez", "Jonathan C. Uy"] }
      ]
    },
    bestMen: ["Christopher Albert P. Fortuno", "Albright M. Dy"],
    maidOfHonor: { name: "Maria Camille V. Racasa", role: "Maid of Honour" },
    bridesmaids: [
      "Alzee Aquino",
      "Dianne F. Rodriguez",
      "Sarah F. Chua"
    ],
    bearers: [
      { role: "Ring Bearer", names: ["Declan Jenkinson"] },
      { role: "Bible Bearer", names: ["Donovan Jenkinson"] },
      { role: "Array Bearer", names: ["Henry Emmanuel Anotado"] },
      { role: "Here comes the Bride Banner", names: ["Prince Noah A. Rodriguez"] }
    ],
    flowerGirls: [
      "Margaret Joan D. Uy",
      "Madison Chiara P. Fortuno",
      "Mary Shiloh Elisha B. Anotado",
      "Atarrah Lois B. Anotado"
    ]
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold-bright mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Entourage
        </motion.h2>

        {/* Parents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                  {parent.label}
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`parent-name-${index}-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="principal-sponsors-title">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="max-w-4xl mx-auto space-y-1">
            {entourageData.principalSponsors.men.map((manName, index) => {
              const womanName = entourageData.principalSponsors.women[index];
              return (
                <div key={index} className="grid grid-cols-2 gap-4 md:gap-8">
                  <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-right" data-testid={`principal-sponsor-man-${index}`}>
                    {manName}
                  </p>
                  <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-left" data-testid={`principal-sponsor-woman-${index}`}>
                    {womanName}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Secondary Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="secondary-sponsors-title">
            {entourageData.secondarySponsors.title}
          </h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.secondarySponsors.roles.map((item, index) => (
              <div key={index} className="text-center" data-testid={`secondary-sponsor-${item.role.toLowerCase()}`}>
                <h4 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-1 md:mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`${item.role.toLowerCase()}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Party Sections */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
        >
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="text-center" data-testid="bestmen-section">
                <h4 className="text-xs md:text-sm font-display font-bold mb-1 md:mb-2 text-primary uppercase tracking-wider">
                  Best Men
                </h4>
                {entourageData.bestMen.map((name, i) => (
                  <p key={i} className="text-xs md:text-sm lg:text-base font-telma text-foreground">
                    {name}
                  </p>
                ))}
              </div>
              <div className="text-center" data-testid="maidofhonor-section">
                <h4 className="text-xs md:text-sm font-display font-bold mb-1 md:mb-2 text-primary uppercase tracking-wider">
                  Maid of Honour
                </h4>
                <p className="text-xs md:text-sm lg:text-base font-telma text-foreground">
                  {entourageData.maidOfHonor.name}
                </p>
              </div>
            </div>

            <div className="text-center" data-testid="bridesmaids-section">
              <h4 className="text-xs md:text-sm font-display font-bold mb-1 md:mb-2 text-primary uppercase tracking-wider">
                Bridesmaids
              </h4>
              {entourageData.bridesmaids.map((name, index) => (
                <p key={index} className="text-xs md:text-sm lg:text-base font-telma text-foreground mb-1" data-testid={`bridesmaid-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bearers & Flower Girls */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
        >
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-4">Bearers</h3>
              <div className="grid grid-cols-1 gap-4">
                {entourageData.bearers.map((item, index) => (
                  <div key={index} className="text-center" data-testid={`bearer-${item.role.toLowerCase().replace(/\s+/g, '-')}`}>
                    <h4 className="text-xs md:text-sm font-display font-semibold text-primary uppercase tracking-wider">
                      {item.role}
                    </h4>
                    {item.names.map((name, nameIndex) => (
                      <p key={nameIndex} className="text-xs md:text-base font-telma text-foreground" data-testid={`${item.role.toLowerCase().replace(/\s+/g, '-')}-name-${nameIndex}`}>
                        {name}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-4">Flower Girls</h3>
              <div className="grid grid-cols-1 gap-2">
                {entourageData.flowerGirls.map((name, index) => (
                  <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`flower-girl-${index}`}>
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
