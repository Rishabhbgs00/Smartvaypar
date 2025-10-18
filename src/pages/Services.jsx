import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Globe, 
  MessageCircle, 
  Share2, 
  Search, 
  ShoppingCart, 
  Store, 
  TrendingUp, 
  Headphones,
  Code,
  Smartphone,
  BarChart3,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Services = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();

  const handleServiceClick = (serviceName) => {
    toast({
      title: t('featureNotImplemented'),
      description: `${serviceName} service inquiry`,
    });
  };

  const services = [
    {
      icon: Globe,
      title: t('websiteDevelopment'),
      description: language === 'hindi' 
        ? 'आधुनिक, तेज़ और मोबाइल-फ्रेंडली वेबसाइट बनाते हैं जो आपके व्यापार को ऑनलाइन लाती है।'
        : 'We create modern, fast, and mobile-friendly websites that bring your business online.',
    },
    {
      icon: MessageCircle,
      title: t('whatsappCatalog'),
      description: language === 'hindi'
        ? 'व्हाट्सऐप बिजनेस कैटलॉग सेटअप करके अपने ग्राहकों तक आसानी से पहुंचें।'
        : 'Set up WhatsApp Business catalog to easily reach your customers.',
    },
    {
      icon: Share2,
      title: t('socialMediaManagement'),
      description: language === 'hindi'
        ? 'फेसबुक, इंस्टाग्राम और अन्य प्लेटफॉर्म पर आपकी उपस्थिति बढ़ाते हैं।'
        : 'Increase your presence on Facebook, Instagram and other platforms.',
    },
    {
      icon: Search,
      title: t('seoServices'),
      description: language === 'hindi'
        ? 'गूगल में आपकी रैंकिंग बेहतर बनाकर अधिक ग्राहक लाते हैं।'
        : 'Improve your Google ranking to bring more customers.',
    },
    {
      icon: Store,
      title: t('ondcOnboarding'),
      description: language === 'hindi'
        ? 'ONDC प्लेटफॉर्म पर आपका व्यापार रजिस्टर करके नए ग्राहक पाएं।'
        : 'Register your business on ONDC platform to get new customers.',
    },
    {
      icon: ShoppingCart,
      title: t('ecommerceSetup'),
      description: language === 'hindi'
        ? 'पूर्ण ई-कॉमर्स स्टोर सेटअप करके ऑनलाइन बिक्री शुरू करें।'
        : 'Set up complete e-commerce store to start online sales.',
    },
    {
      icon: TrendingUp,
      title: t('digitalMarketing'),
      description: language === 'hindi'
        ? 'डिजिटल मार्केटिंग कैंपेन चलाकर आपके व्यापार को बढ़ाते हैं।'
        : 'Grow your business by running digital marketing campaigns.',
    },
    {
      icon: Headphones,
      title: t('techSupport'),
      description: language === 'hindi'
        ? '24/7 तकनीकी सहायता और कस्टमर सपोर्ट प्रदान करते हैं।'
        : 'We provide 24/7 technical assistance and customer support.',
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('services_title_meta')}</title>
        <meta name="description" content={t('services_desc_meta')} />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-16 px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className={`text-5xl md:text-6xl font-black mb-4 font-heading ${language === 'hindi' ? 'hindi-font' : ''}`}>
                    <span className="gradient-text">{t('servicesTitle')}</span>
                </h1>
                <p className={`text-xl md:text-2xl text-gray-800/80 max-w-3xl mx-auto ${language === 'hindi' ? 'hindi-font' : ''}`}>
                    {t('servicesSubtitle')}
                </p>
            </motion.div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:shadow-yellow-300/10 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-10 w-10 text-black" />
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-800 mb-3 font-heading ${language === 'hindi' ? 'hindi-font' : ''}`}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-800/80 leading-relaxed flex-grow ${language === 'hindi' ? 'hindi-font' : ''}`}>
                    {service.description}
                  </p>
                  <Button
                    onClick={() => handleServiceClick(service.title)}
                    className={`mt-6 w-full bg-white/10 hover:bg-white/20 font-semibold border border-white/20 ${language === 'hindi' ? 'hindi-font' : ''}`}
                  >
                    {t(' ')}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
                <section className="py-16 px-4">
                  
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <img className="rounded-2xl shadow-2xl w-full h-auto object-cover" alt="Digital collaboration between business owners and tech experts" src="https://images.unsplash.com/photo-1450504244133-da90f34e053f" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <div className="space-y-6 glass-effect p-8 rounded-2xl">
                                 <h2 className={`text-4xl font-black text-gray-800 mb-6 font-heading ${language === 'hindi' ? 'hindi-font' : ''}`}>{t('Why Choose Us???')}</h2>
                                <p className={`text-xl md:text-2xl text-gray-800/80 max-w-3xl mx-auto ${language === 'hindi' ? 'hindi-font' : ''}`}>
                    {t('At "SmartVyapari", We offer comprehensive solutions to our clients as per their need we provide website development, including SEO, social media management, and targeted advertising to boost your online presence and drive engagement.')}
                </p>
                                
                            </div>
                        </motion.div>
                    </div>
                </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
             
            </motion.div>
              
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               
              {[
                { icon: Code, title: t('expertTeam'), description: t('expertTeamDesc') },
                { icon: Smartphone, title: t('mobileFirst'), description: t('mobileFirstDesc') },
                { icon: BarChart3, title: t('dataDriven'), description: t('dataDrivenDesc') },
                { icon: Shield, title: t('secure'), description: t('secureDesc') }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4">
                    <item.icon className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className={`text-xl font-bold text-gray-800 mb-2 font-heading ${language === 'hindi' ? 'hindi-font' : ''}`}>{item.title}</h3>
                  <p className={`text-gray-800/80 ${language === 'hindi' ? 'hindi-font' : ''}`}>{item.description}</p>
                </motion.div>
              ))}
            </div> */}
          </div>
        </section>
        <hr />
        <section className="relative py-20 px-6 overflow-hidden group">
  {/* 🌈 Animated Gradient Background */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, backgroundPosition: ["0% 50%", "100% 50%"] }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    }}
    className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200 bg-[length:200%_200%] blur-2xl opacity-80"
  ></motion.div>

  <div className="relative z-10 max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 40px rgba(255,165,0,0.35)",
        backgroundColor: "rgba(255,255,255,0.9)",
      }}
      className="rounded-3xl p-10 md:p-14 text-center backdrop-blur-md bg-white/70 border border-yellow-200 shadow-xl transition-all duration-500"
    >
      <h2 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">
        Get Started Today
      </h2>

      <p className="text-xl md:text-2xl text-gray-700/90 mb-10 leading-relaxed">
        Join us and take your next step toward success — we’re here to help you grow every day.
      </p>

      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-extrabold px-10 py-5 text-xl rounded-xl shadow-lg hover:shadow-amber-400/40 transition-all duration-300 transform group-hover:scale-105">
        Contact Us
      </button>
    </motion.div>
  </div>

  {/* ✨ Floating Glow Elements */}
  <motion.div
    animate={{ y: [0, 20, 0], opacity: [0.8, 1, 0.8] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute -bottom-10 right-20 w-48 h-48 bg-yellow-300/30 rounded-full blur-3xl"
  ></motion.div>
  <motion.div
    animate={{ y: [20, 0, 20], opacity: [0.8, 1, 0.8] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute top-10 left-10 w-56 h-56 bg-orange-300/30 rounded-full blur-3xl"
  ></motion.div>
</section>

       

      </div>
    </>
  );
};

export default Services;