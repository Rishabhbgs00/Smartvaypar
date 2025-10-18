import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Briefcase, Linkedin as LnIcon, Mail as MailIcon, Phone as PhoneIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';

import p1 from '@/assets/p1.jpg';
import p2 from '@/assets/p2.jpg';
import p3 from '@/assets/p3.jpg';
import p4 from '@/assets/p4.jpg';
import p5 from '@/assets/p5.jpg';

const About = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();

  const handleContactClick = () =>
    toast({ title: t('featureNotImplemented') });

  const team = [
    {
      name: 'Rishabh Mishra',
      role: 'Business Development Head',
      exp: '3+ years experience in business growth',
      img: p1,
      email: 'rishabhmishra13131313@gmail.com',
      phone: '+918400286637',
      linkedin: 'https://www.linkedin.com/in/rishabhmishra1313/',
    },
    {
      name: 'Ravi Shankar',
      role: 'IT Expert',
      exp: '2+ years experience in web development',
      img: p2,
      email: 'ravi.yoof@gmail.com',
      phone: '+918409251542',
      linkedin: 'https://www.linkedin.com/in/ravi-shankar/',
    },
    {
      name: 'Aakarshit Raj',
      role: 'SEO Expert',
      exp: '1.5+ years experience in website ranking',
      img: p3,
      email: 'akarshit7raj@gmail.com',
      phone: '+918409251542',
      linkedin: 'https://www.linkedin.com/in/aakarshit-raj/',
    },
    {
      name: 'Roop Toshawar',
      role: 'HR Manager',
      exp: '1+ years experience in HR management',
      img: p4,
      email: 'toshawarrupali@gmail.com',
      phone: '+918824650156',
      linkedin: 'https://www.linkedin.com/in/rupali-toshawar/',
    },
    {
      name: 'Rishabh',
      role: 'Web Developer',
      exp: '1.5+ years experience in UI/UX and web design',
      img: p5,
      email: 'rishabhbgs00@gmail.com',
      phone: '+917257981800',
      linkedin: 'https://www.linkedin.com/in/rishabh-bgs/',
    },
  ];

  const stats = [
    { icon: Briefcase, value: '13M+', label: t('localStores') },
    { icon: TrendingUp, value: '$800B', label: t('annualRevenue') },
    { icon: Users, value: '280M+', label: t('onlineShoppers') },
    { icon: Target, value: '$60B', label: t('onlineMarket') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('about_title_meta')}</title>
        <meta name="description" content={t('about_desc_meta')} />
      </Helmet>
      


      <div className="min-h-screen pt-20">
        <section className="py-16 px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className={`text-4xl md:text-6xl font-black mb-4 font-heading ${language === 'hindi' ? 'hindi-font' : ''}`}>
              <span className="gradient-text">{t('aboutTitle')}</span>
            </h1>
            <p className={`text-lg md:text-xl text-gray-800/80 max-w-3xl mx-auto ${language === 'hindi' ? 'hindi-font' : ''}`}>
              {t('aboutSubtitle')}
            </p>
          </motion.div>
        </section>
       




        <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "ease" }}
  whileHover={{
    scale: 1.05,
    color: "#a21caf", 
    textShadow: "0 0 12px rgba(236, 72, 153, 0.4)",
  }}
  className={`relative text-fuchsia-800 text-4xl md:text-5xl font-extrabold mb-10 text-center tracking-wide drop-shadow-sm transition-all duration-500 ${
    language === "hindi" ? "hindi-font" : ""
  }`}
>
  {t('MarketSize')}
</motion.h2>

<motion.h4
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  whileHover={{
    scale: 1.05,
    color: "#9333ea",
    textShadow: "0 0 12px rgba(147, 51, 234, 0.4)",
  }}
  className={`text-gray-800 text-lg md:text-xl font-semibold text-center leading-relaxed mx-auto max-w-4xl px-4 py-4 transition-all duration-500 ${
    language === "hindi" ? "hindi-font" : ""
  }`}
>
  {t("aboutMarket")}
</motion.h4>


        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="glass-effect rounded-2xl p-4 text-center shadow-md">
                    <Icon className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                    <p className="text-sm text-gray-700/80">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <img className="rounded-2xl shadow-2xl w-full h-auto object-cover" alt="Digital collaboration" src="https://images.unsplash.com/photo-1450504244133-da90f34e053f" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="glass-effect p-6 rounded-2xl shadow-md">
                <h2 className={`text-3xl font-bold text-gray-800 mb-3 ${language === 'hindi' ? 'hindi-font' : ''}`}>{t('ourVision')}</h2>
                <p className={`text-base text-gray-800/90 leading-relaxed ${language === 'hindi' ? 'hindi-font' : ''}`}>{t('taglineAbout')}</p>
              </div>
            </motion.div>
          </div>
        </section>

       <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 via-white to-yellow-100/60 relative overflow-hidden">
  <div className="relative max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-black text-gray-800 mb-4 font-heading tracking-tight">
        {t('Meet Our Team')}
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        {t('')}
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {team.map((member, idx) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative group bg-white/80 backdrop-blur p-6 rounded-2xl text-center shadow-md border border-yellow-100 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-transparent to-white opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

          <div className="mx-auto mb-5 relative">
            <div className="relative w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-yellow-400 via-orange-300 to-pink-400 p-[3px] shadow-lg group-hover:shadow-yellow-300/70 transition duration-500">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-inner"
              />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition duration-300">
              {member.name}
            </h3>
            <p className="text-yellow-500 text-sm mt-1 font-medium">
              {member.role}
            </p>
            <p className="text-xs text-gray-700/80 mt-2">{member.exp}</p>
          </div>

          <div className="mt-5 flex justify-center items-center gap-4 relative z-10">
            <motion.a
              href={member.linkedin || '#'}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
              aria-label={`LinkedIn of ${member.name}`}
              className="p-3 bg-blue-50 rounded-full hover:bg-blue-100 shadow hover:shadow-blue-300 text-blue-600 transition"
            >
              <LnIcon className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={`mailto:${member.email}`}
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ type: 'spring', stiffness: 400 }}
              aria-label={`Mail ${member.name}`}
              className="p-3 bg-pink-50 rounded-full hover:bg-pink-100 shadow hover:shadow-pink-300 text-pink-600 transition"
            >
              <MailIcon className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={`tel:${member.phone}`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
              aria-label={`Call ${member.name}`}
              className="p-3 bg-green-50 rounded-full hover:bg-green-100 shadow hover:shadow-green-300 text-green-600 transition"
            >
              <PhoneIcon className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


       <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 via-white/60 to-yellow-50/40 blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative glass-effect rounded-3xl p-10 md:p-14 space-y-12 max-w-5xl mx-auto text-center shadow-[0_0_40px_rgba(250,204,21,0.25)] border border-yellow-100/30"
          >
            <div className="space-y-5">
              <h2 className={`text-2xl font-extrabold font-heading bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent ${language === 'hindi' ? 'hindi-font' : ''}`}>
                {t('ourMotto')}
              </h2>
              <p className={`text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto ${language === 'hindi' ? 'hindi-font' : ''}`}>
                {t('mottoText')}
              </p>
            </div>

            <div className="space-y-5">
              <h2 className={`text-2xl font-extrabold font-heading bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent ${language === 'hindi' ? 'hindi-font' : ''}`}>
                {t('conclusion')}
              </h2>
              <p className={`text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto ${language === 'hindi' ? 'hindi-font' : ''}`}>
                {t('conclusionText')}
              </p>
            </div>

            <div className="space-y-5">
              <p className={`text-xl md:text-2xl font-semibold text-gray-800/90 italic leading-relaxed max-w-3xl mx-auto ${language === 'hindi' ? 'hindi-font' : ''}`}>
                {t('finalMessage')}
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-100 flex items-center justify-center shadow-[0_0_25px_rgba(250,204,21,0.5)] animate-pulse">
                  <span className="text-3xl">✨</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default About;
