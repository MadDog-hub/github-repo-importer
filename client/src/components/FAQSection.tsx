import { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Clock, Users, MessageCircle, MapPin, Hotel } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How do I confirm my attendance in your wedding?",
      icon: MessageCircle,
      answer: "You can RSVP right here on our wedding website by clicking the RSVP button. We kindly ask that all guests RSVP by February 15, 2025 so we can plan everything perfectly!"
    },
    {
      question: "I RSVP-ed but have a change of plans. What should I do?",
      icon: MessageCircle,
      answer: "Change of heart or schedule? No worries! If you've already declined but are now able to join, just send us a message. We'll check if there's still space for you to celebrate with us!"
    },
    {
      question: "Can I bring someone with me?",
      icon: Users,
      answer: "We'd love to welcome everyone, but due to limited space, we're keeping our celebration intimate. We kindly ask that only the names listed on the invitation join us. Thank you for understanding and helping make the day special for all!"
    },
    {
      question: "Can I bring someone else if my plus one or household member can't make it?",
      icon: Users,
      answer: "We totally understand that plans can change! However, invitations are reserved for the guests listed. If your plus one or household member can't make it, please reach out to us— we'll gladly assist you from there."
    },
    {
      question: "Can I bring my kids during the event?",
      icon: Users,
      answer: "To help us fully enjoy our celebration of love, our wedding will be an adults-only event. Little ones from our immediate families and wedding party will, of course, be warmly welcomed."
    },
    {
      question: "What time should I arrive?",
      icon: Clock,
      answer: "We'd love for everyone to be seated and ready before the ceremony begins. Please plan to arrive 30 minutes to an hour early to account for parking, traffic, and a bit of mingling time!"
    },
    {
      question: "Will there be parking available?",
      icon: MapPin,
      answer: "Yes! Parking is available at both the ceremony and reception venues. Please follow the instructions of the parking attendants at the ceremony and reception venues for a smooth experience."
    },
    {
      question: "Can I take photos during the ceremony?",
      icon: Camera,
      answer: "We invite you to be fully present with us during this special moment. Please keep your phones and cameras away — our professional photographer will capture everything beautifully. Your smiles and presence mean the most to us!"
    }
  ];

  return (
    <motion.section 
      className="section-pastel-blue bg-white py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 11.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 11.8 }}
        >
          <h2 className="text-5xl font-display font-light italic text-primary mb-8" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-body text-foreground max-w-2xl mx-auto">
            We've compiled answers to the most common questions about our wedding day. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-teal border border-primary/20 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 12.1 + (index * 0.1) }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xl text-foreground font-body font-semibold">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
