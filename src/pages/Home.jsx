import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Check, Star, Zap, Shield, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import SocialLinks from "../components/ui/SocialLinks";

const Home = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const newYear = new Date("2026-01-01T23:59:59");
      const difference = newYear - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePlanSelect = (planName) => {
    toast({
      title:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${planName} selected`,
    });
  };

  const ourWork = [
    { id: 1, description: "E-commerce website for a local clothing brand" },
    { id: 2, description: "Restaurant booking website with online menu" },
    { id: 3, description: "Portfolio website for a freelance photographer" },
    {
      id: 4,
      description: "Service booking platform for a home cleaning business",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {language === "hindi"
            ? "SmartVyapari - हर व्यापारी, अब स्मार्ट"
            : "SmartVyapari - Digital Solutions for Small Businesses"}
        </title>
        
        <meta
          name="description"
          content={
            language === "hindi"
              ? "SmartVyapari - छोटे और मध्यम व्यापारियों के लिए डिजिटल समाधान। वेबसाइट, SEO, सोशल मीडिया मैनेजमेंट और अधिक।"
              : "SmartVyapari - Digital solutions for small and medium businesses. Website development, SEO, social media management and more."
          }
        />
      </Helmet>
      <div className=" flex flex-row items-end justify-end bg-[#fed062] gap-5 z">
          <SocialLinks />
        </div>

      <div className="min-h-screen bg-[#fed062] pt-16">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1
                className={`text-3xl md:text-5xl font-black mb-4 font-heading text-gray-900 ${language === "hindi" ? "hindi-font" : ""
                  }`}
              >
                <span className="block">
                  {t("headingOne")}
                  <br />
                  {t("headingSecond")}
                </span>
              </h1>
              <p className="gradient-text text-5xl font-heading font-black pt-4">
                "SmartVyapari"
              </p>

              <p
                className={`text-xl md:text-2xl font-medium text-gray-900 mb-8 max-w-3xl mx-auto ${language === "hindi" ? "hindi-font" : ""
                  }`}
              >
                {t("tagline")}
              </p>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="glass-effect rounded-2xl p-6 max-w-lg mx-auto countdown-glow"
              >
                <h3
                  className={`text-3xl font-bold text-yellow-600 mb-2 font-heading ${language === "hindi" ? "hindi-font" : ""
                    }`}
                >
                  🎉 {t("NEW YEAR OFFER")} 🎉
                </h3>
                <p
                  className={`text-gray-700 mb-4 ${language === "hindi" ? "hindi-font" : ""
                    }`}
                >
                  {t("offerEndsIn")}
                </p>
                <div className="flex justify-center space-x-2 sm:space-x-4">
                  {timeLeft.days > 0 && (
                    <div className="text-center">
                      <div className="bg-white/50 rounded-lg p-3 min-w-[50px] sm:min-w-[70px]">
                        <span className="text-2xl font-bold text-gray-800">
                          {timeLeft.days}
                        </span>
                      </div>
                      <p
                        className={`text-sm text-gray-600 mt-1 ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        {t("days")}
                      </p>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="bg-white/50 rounded-lg p-3 min-w-[50px] sm:min-w-[70px]">
                      <span className="text-2xl font-bold text-gray-800">
                        {(timeLeft.hours || 0).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <p
                      className={`text-sm text-gray-600 mt-1 ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      {t("hours")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/50 rounded-lg p-3 min-w-[50px] sm:min-w-[70px]">
                      <span className="text-2xl font-bold text-gray-800">
                        {(timeLeft.minutes || 0).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <p
                      className={`text-sm text-gray-600 mt-1 ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      {t("minutes")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/50 rounded-lg p-3 min-w-[50px] sm:min-w-[70px]">
                      <span className="text-2xl font-bold text-gray-800">
                        {(timeLeft.seconds || 0).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <p
                      className={`text-sm text-gray-600 mt-1 ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      {t("seconds")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="glass-effect flex-1 rounded-3xl p-8 pulse-glow border">
                  <div className=" mb-8">
                    <h2
                      className={`text-4xl text-center font-black text-gray-900 mb-4 font-heading ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      {t("oneTimePlan")}
                    </h2>
                    <p
                      className={`text-xl text-center text-gray-700 ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      {t("oneTimePlanDesc")}
                    </p>
                    <br />
                    <ul className="text-gray-900 text-l list-disc px-8">
                      <li>{t("oneTimePoint1")}</li>
                      <li>{t("oneTimePoint2")}</li>
                      <li>{t("oneTimePoint3")}</li>
                      <li>{t("oneTimePoint4")}</li>
                      <li>{t("oneTimePoint5")}</li>
                      <li>{t("oneTimePoint6")}</li>
                      <li>{t("oneTimePoint7")}</li>
                      <li>{t("oneTimePoint8")}</li>
                    </ul>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                    <div className="text-center">
                      <p
                        className={`text-lg text-gray-500 line-through ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        {t("originalPrice")}: ₹5,999
                      </p>
                      <p
                        className={`text-5xl font-black text-yellow-500 ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        ₹2,999
                      </p>
                      <p
                        className={`text-xl text-green-600 font-bold ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        {t("discount")}
                      </p>
                    </div>

                    <Button
                      onClick={() => handlePlanSelect(t("oneTimePlan"))}
                      size="lg"
                      className={`bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg rounded-xl transform hover:scale-105 transition-all ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      {t("choosePlan")}
                    </Button>
                  </div>
                </div>
                <div className="glass-effect flex-1 rounded-3xl p-8 pulse-glow border">
                  <div className=" mb-8">
                    <h2
                      className={`text-4xl text-center font-black text-gray-900 mb-4 font-heading ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      {t("oneTimePlan2")}
                    </h2>
                    <p
                      className={`text-xl text-center text-gray-700 ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      {t("oneTimePlanDesc2")}
                    </p>
                    <br />
                    <ul className="text-gray-900 text-l list-disc px-8">
                      <li>{t("oneTimePoint12")}</li>
                      <li>{t("oneTimePoint22")}</li>
                      <li>{t("oneTimePoint32")}</li>
                      <li>{t("oneTimePoint42")}</li>
                      <li>{t("oneTimePoint52")}</li>
                      <li>{t("oneTimePoint62")}</li>
                      <li>{t("oneTimePoint72")}</li>
                      <li>{t("oneTimePoint82")}</li>
                    </ul>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                    <div className="text-center">
                      <p
                        className={`text-lg text-gray-500 line-through ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        {t("originalPrice")}: ₹9,999
                      </p>
                      <p
                        className={`text-5xl font-black text-yellow-500 ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        ₹4,999
                      </p>
                      <p
                        className={`text-xl text-green-600 font-bold ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        {t("discount")}
                      </p>
                    </div>

                    <Button
                      onClick={() => handlePlanSelect(t("oneTimePlan"))}
                      size="lg"
                      className={`bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg rounded-xl transform hover:scale-105 transition-all ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      {t("choosePlan")}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2
                className={`text-4xl font-black text-center text-gray-900 mb-12 font-heading ${language === "hindi" ? "hindi-font" : ""
                  }`}
              >
                {t("subscriptionPlan")}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-effect border rounded-2xl p-8 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-center mb-6">
                    <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3
                      className={`text-2xl font-bold text-gray-900 mb-2 font-heading ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      {t("basicPlan")}
                    </h3>
                    <div className="space-y-2">
                      <p
                        className={`text-lg text-gray-500 line-through ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        ₹1,999{t("/Monthly")}
                      </p>
                      <p
                        className={`text-3xl font-bold text-blue-600 ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        ₹299{t("Monthly")}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {t("basicFeatures").map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-center text-gray-800 ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handlePlanSelect(t("basicPlan"))}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold ${language === "hindi" ? "hindi-font" : ""
                      }`}
                  >
                    {t("choosePlan")}
                  </Button>
                </div>

                <div className="glass-effect rounded-2xl p-8 border-2 border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-center mb-6">
                    <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3
                      className={`text-2xl font-bold text-gray-900 mb-2 font-heading ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      {t("premiumPlan")}
                    </h3>
                    <div className="space-y-2">
                      <p
                        className={`text-lg text-gray-500 line-through ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        ₹2,999{t("Monthly")}
                      </p>
                      <p
                        className={`text-3xl font-bold text-yellow-500 ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        ₹499{t("Monthly")}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {t("premiumFeatures").map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-center text-gray-800 ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handlePlanSelect(t("premiumPlan"))}
                    className={`w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold ${language === "hindi" ? "hindi-font" : ""
                      }`}
                  >
                    {t("choosePlan")}
                  </Button>
                </div>

                <div className="glass-effect border rounded-2xl p-8 hover:shadow-lg hover:shadow-pink-500/10 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-center mb-6">
                    <Headphones className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                    <h3
                      className={`text-2xl font-bold text-gray-900 mb-2 font-heading ${language === "hindi" ? "hindi-font" : ""
                        }`}
                    >
                      {t("ultraPremiumPlan")}
                    </h3>
                    <div className="space-y-2">
                      <p
                        className={`text-lg text-gray-500 line-through ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        ₹3,999{t("Monthly")}
                      </p>
                      <p
                        className={`text-3xl font-bold text-pink-500 ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        ₹799{t("Monthly")}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {t("ultraFeatures").map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-center text-gray-800 ${language === "hindi" ? "hindi-font" : ""
                          }`}
                      >
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handlePlanSelect(t("ultraPremiumPlan"))}
                    className={`w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold ${language === "hindi" ? "hindi-font" : ""
                      }`}
                  >
                    {t("choosePlan")}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-16 px-4 bg-[#fed062]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2
                className={`text-4xl font-black text-gray-900 mb-4 font-heading ${language === "hindi" ? "hindi-font" : ""
                  }`}
              >
                {t("Our Previous Work")}
              </h2>
              <p
                className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === "hindi" ? "hindi-font" : ""
                  }`}
              >
                {t()}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  alt={ourWork[0].description}
                  src="https://images.unsplash.com/photo-1539278383962-a7774385fa02"
                />
                <p
                  className={`text-center text-gray-700 font-medium ${language === "hindi" ? "hindi-font" : ""
                    }`}
                >
                  {language === "hindi"
                    ? "एक स्थानीय कपड़ों के ब्रांड के लिए ई-कॉमर्स वेबसाइट"
                    : ourWork[0].description}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  alt={ourWork[1].description}
                  src="https://images.unsplash.com/photo-1559029662-4260aa0652b9"
                />
                <p
                  className={`text-center text-gray-700 font-medium ${language === "hindi" ? "hindi-font" : ""
                    }`}
                >
                  {language === "hindi"
                    ? "ऑनलाइन मेनू के साथ रेस्तरां बुकिंग वेबसाइट"
                    : ourWork[1].description}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  alt={ourWork[2].description}
                  src="https://images.unsplash.com/photo-1647937627386-b8d8420718a6"
                />
                <p
                  className={`text-center text-gray-700 font-medium ${language === "hindi" ? "hindi-font" : ""
                    }`}
                >
                  {language === "hindi"
                    ? "एक फ्रीलांस फोटोग्राफर के लिए पोर्टफोलियो वेबसाइट"
                    : ourWork[2].description}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  alt={ourWork[3].description}
                  src="https://images.unsplash.com/photo-1642132652866-6fa262d3161f"
                />
                <p
                  className={`text-center text-gray-700 font-medium ${language === "hindi" ? "hindi-font" : ""
                    }`}
                >
                  {language === "hindi"
                    ? "एक होम क्लीनिंग व्यवसाय के लिए सर्विस बुकिंग प्लेटफॉर्म"
                    : ourWork[3].description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
