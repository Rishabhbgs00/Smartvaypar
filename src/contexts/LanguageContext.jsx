import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('hindi');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'hindi' ? 'english' : 'hindi');
  };

  const translations = {
    hindi: {
      // Navigation
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएं',
      contact: 'संपर्क',
      
      // Home Page
      headingOne: 'स्मार्ट व्यापारी के साथ अपने व्यवसाय',
      headingSecond:'को अगले स्तर तक ले जाएँ',
      tagline: 'अब छोटी दुकानदार बनेंगे SmartVyapari!',
      diwaliOffer: 'दिवाली ऑफर',
      offerEndsIn: 'ऑफर समाप्त होने में',
      hours: 'घंटे',
      minutes: 'मिनट',
      seconds: 'सेकंड',
      
      // Plans
      oneTimePlan: 'वन टाइम प्लान',
      oneTimePlanDesc: 'एक बार भुगतान करें और सभी सेवाएं प्राप्त करें',
      originalPrice: 'मूल कीमत',
      diwaliPrice: 'दिवाली कीमत',
      discount: '50% छूट',
      choosePlan: 'प्लान चुनें',
      oneTimePoint1:'वर्डप्रेस-आधारित वेबसाइट (व्यवसाय की आवश्यकता के अनुसार)',
      oneTimePoint2:'मोबाइल-अनुकूल + SEO-अनुकूल डिज़ाइन',
      oneTimePoint3:'निःशुल्क एसएसएल प्रमाणपत्र (सुरक्षित साइट – “https://”)',
      oneTimePoint4:'1 वर्ष की निःशुल्क होस्टिंग (हमारे डोमेन के अंतर्गत)',
      oneTimePoint5:'Google बिज़नेस प्रोफ़ाइल सेटअप',
      oneTimePoint6:'संपर्क फ़ॉर्म एकीकरण (सीधे ईमेल/फोन पर ले जाता है)',
      oneTimePoint7:'निःशुल्क व्यावसायिक मेल',
      oneTimePoint8:'सभी सोशल मीडिया खातों (इंस्टाग्राम, फेसबुक, लिंक्डइन) पर एक बार सामग्री पोस्ट करना',

      oneTimePlan2: 'वन टाइम प्लान',
      oneTimePlanDesc2: 'एक बार भुगतान करें और सभी सेवाएं प्राप्त करें',
      originalPrice2: 'मूल कीमत',
      diwaliPrice2: 'दिवाली कीमत',
      discount2: '50% छूट',
      choosePlan2: 'प्लान चुनें',
      oneTimePoint12:'स्क्रैच से कस्टम-निर्मित वेबसाइट (सिर्फ वर्डप्रेस नहीं)',
      oneTimePoint22:'कस्टम ब्रांडिंग और रंगों के साथ उन्नत यूआई/यूएक्स जीवन भर के लिए मुफ़्त होस्टिंग (हमारे डोमेन के अंतर्गत) व्हाट्सएप चैट इंटीग्रेशन (व्हाट्सएप पर सीधे लीड कैप्चर) ',
      oneTimePoint32:'ओएनडीसी मार्केटप्लेस एकीकरण (उत्पाद-आधारित विक्रेताओं के लिए)',
      oneTimePoint42:'5 प्रोफेशनल बिजनेस ईमेल आईडी (example@smartvyapari.in) ',
      oneTimePoint52:'3 कस्टम सोशल मीडिया पोस्ट (फेसबुक, इंस्टाग्राम, लिंक्डइन)',
      oneTimePoint62:'1 प्रमोशनल वीडियो (15-20 सेकंड रील शैली)',
      oneTimePoint72:'बुनियादी एसईओ सेटअप (कीवर्ड, मेटाडेटा, गति अनुकूलन)',
      oneTimePoint82:'1 महीने के लिए मुफ्त रखरखाव सहायता',
      
      
      subscriptionPlan: 'सब्स्क्रिप्शन प्लान',
      basicPlan: 'बेसिक प्लान',
      premiumPlan: 'प्रीमियम प्लान',
      ultraPremiumPlan: 'अल्ट्रा प्रीमियम प्लान',
      Monthly: '/मासिक',
      yearly: '/वार्षिक',
      
      basicFeatures: [
        'वेबसाइट डेवलपमेंट',
        'व्हाट्सऐप कैटलॉग',
        'बेसिक SEO',
        'मासिक सपोर्ट'
      ],
      premiumFeatures: [
        'सभी बेसिक फीचर्स',
        'सोशल मीडिया मैनेजमेंट',
        'एडवांस SEO',
        'साप्ताहिक सपोर्ट',
        'ONDC ऑनबोर्डिंग'
      ],
      ultraFeatures: [
        'सभी प्रीमियम फीचर्स',
        'ई-कॉमर्स सेटअप',
        '24/7 सपोर्ट',
        'कस्टम डेवलपमेंट',
        'डिजिटल मार्केटिंग'
      ],
      
      // About Page
      aboutMarket:' हम एक ऐसी संस्था हैं जिसका उद्देश्य अपने ग्राहकों को सस्ते और सरल तरीकों से परिणाम-उन्मुख सेवाएं प्रदान करना है',

      aboutTitle: 'हमारे बारे में',
      ourVision:'हमारा दृष्टिकोण',
      taglineAbout:'हम अपने ग्राहकों के लिए व्यवसाय विकास और नई प्रौद्योगिकी के बीच एक सेतु बनना चाहते हैं।',
      aboutSubtitle: 'छोटे और मध्यम व्यापारियों के लिए डिजिटल सेतु',
      aboutDescription: 'हम एक डिजिटल एजेंसी हैं जो छोटे/मध्यम व्यापारियों के लिए सेतु बनने का लक्ष्य रखती है। हम अपने सभी कर्मचारियों को सभी आवश्यक डिजिटल सेवाएं प्रदान करने की कोशिश कर रहे हैं।',
      
      ourMotto: 'हमारा उद्देश्य',
      mottoText: 'हम चाहते हैं कि छोटे/मध्यम आकार के व्यवसाय के मालिक अपनी आवश्यकता के अनुसार ऑनलाइन उपस्थिति के माध्यम से अपनी क्षमता का प्रदर्शन करें।',
      
      conclusion: 'निष्कर्ष',
      conclusionText: 'डिजिटलीकरण अब भारत के स्थानीय बाजार विक्रेताओं के लिए एक विलासिता नहीं बल्कि एक आवश्यकता है। उपभोक्ता व्यवहार निर्णायक रूप से ऑनलाइन सुविधा की ओर बढ़ने के साथ, किराना, कपड़े की दुकानें, भोजनालय और अन्य पड़ोसी व्यापारों को अमेज़न, फ्लिपकार्ट, स्विगी, जोमैटो और अन्य से हिस्सेदारी खोने से बचने के लिए अनुकूलन करना होगा।',
      
      finalMessage: 'अब, हम आपकी और हमारी नवाचार विचारों के साथ आपकी ऑनलाइन उपस्थिति बनाने के लिए यहां हैं। क्योंकि हम मानते हैं कि स्थानीय बाजार ग्राहक खरीदारी अनुभव को बढ़ाने का सबसे अच्छा तरीका है।',
      
      quote: '"क्योंकि हमको पता, हमारे पड़ोसी को क्या चाहिए और क्या नहीं"',
      
      // Services Page
      servicesTitle: 'हमारी सेवाएं',
      servicesSubtitle: 'आपके व्यापार को डिजिटल बनाने के लिए संपूर्ण समाधान',
      
      // Contact Page
      contactTitle: 'संपर्क करें',
      contactSubtitle: 'आज ही अपने डिजिटल सफर की शुरुआत करें',
      
      name: 'नाम',
      phone: 'फोन नंबर',
      businessType: 'व्यापार का प्रकार',
      city: 'शहर',
      message: 'संदेश',
      submit: 'भेजें',
      MarketSize: 'बाज़ार आकार',
      
      welcomeMessage: 'SmartVyapari में आपका स्वागत है',
      
      // Services List
      websiteDevelopment: 'वेबसाइट डेवलपमेंट',
      whatsappCatalog: 'व्हाट्सऐप कैटलॉग',
      socialMediaManagement: 'सोशल मीडिया मैनेजमेंट',
      seoServices: 'SEO सेवाएं',
      ondcOnboarding: 'ONDC ऑनबोर्डिंग',
      ecommerceSetup: 'ई-कॉमर्स सेटअप',
      digitalMarketing: 'डिजिटल मार्केटिंग',
      techSupport: 'तकनीकी सहायता'

      
    },
    english: {
      // Navigation
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      
      // Home Page
      headingOne: 'Let’s Grow Your Business',
      headingSecond:'To The Next Level With',
      tagline: 'Now small shopkeepers will become SmartVyapari!',
      diwaliOffer: 'Diwali Offer',
      offerEndsIn: 'Offer ends in',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      
      // Plans
      oneTimePlan: 'Basic Plan',
      oneTimePlanDesc: 'Pay once and get all services delivered',
      originalPrice: 'Original Price',
      diwaliPrice: 'Diwali Price',
      discount: '50% Off',
      oneTimePoint1:'WordPress-based website(As per need of business)',
      oneTimePoint2:'Mobile-friendly + SEO-friendly design',
      oneTimePoint3:'Free SSL Certificate (secure site – “https://”)',
      oneTimePoint4:'1-year free hosting (under your bulk Hostinger plan)',
      oneTimePoint5:'1 free Professional Mail',
      oneTimePoint6:'Google Business Profile setup',
      oneTimePoint7:'Contact form integration (leads directly to email/phone)',
      oneTimePoint8:'One time content posting on all social media accounts ( Instragram, Facebook, LinkedIn)',
      choosePlan: 'Choose Plan',

      oneTimePlan2: ' Pro Plan',
      oneTimePlanDesc2: 'Everything in Basic Plan + Additional Premium Features:',
      originalPrice2: 'Original Price',
      diwaliPrice2: 'Diwali Price',
      discount2: '50% Off',
      choosePlan2: 'Choose Plan',
      oneTimePoint12:'Custom-built website from scratch (not just WordPress)',
      oneTimePoint22:'Advanced UI/UX with custom branding & colors Free hosting for lifetime (under our domain) WhatsApp Chat Integration (direct lead capture on WhatsApp)',
      oneTimePoint32:'ONDC Marketplace Integration (for product-based sellers)',
      oneTimePoint42:'5 Professional Business Email ID (example@smartvyapari.in)',
      oneTimePoint52:'3 Custom Social Media Posts (Facebook, Instagram, LinkedIn)',
      oneTimePoint62:'1 Promotional Video (15–20 sec reel style)',
      oneTimePoint72:'Free maintenance support for 1 month',
      oneTimePoint82:'Basic SEO setup (keywords, metadata, speed optimization)',
      
      subscriptionPlan: 'Subscription Plan',
      basicPlan: 'Basic Plan',
      premiumPlan: 'Premium Plan',
      ultraPremiumPlan: 'Ultra Premium Plan',
      yearly: '/yearly',
      
      basicFeatures: [
        'Website Development',
        'WhatsApp Catalog',
        'Basic SEO',
        'Monthly Support'
      ],
      premiumFeatures: [
        'All Basic Features',
        'Social Media Management',
        'Advanced SEO',
        'Weekly Support',
        'ONDC Onboarding'
      ],
      ultraFeatures: [
        'All Premium Features',
        'E-commerce Setup',
        '24/7 Support',
        'Custom Development',
        'Digital Marketing'
      ],
      
      whyChooseUs:"What We Offer??",

      // About Page
      
      aboutTitle: 'About Us',
      ourVision:'Our Vision',
      taglineAbout:'We want to become a bridge between business growth and new technology for our clients',
      aboutMarket:'We are an organization who aims to provide result-oriented services to our clients with affordability  simplicity as important parameters',
      aboutSubtitle: 'Digital Bridge for Small to Medium Businesses',
      aboutDescription: 'We are a digital agency that aims to become a bridge for small/medium businesses. We are trying to provide all the needful digital services to all our employees.',
      
      ourMotto: 'Our Motto',
      mottoText: 'We want small/medium size business owner to showcase there potential through online presence as per their need.',
      
      conclusion: 'Conclusion',
      conclusionText: 'Digitalization is no longer a luxury but a necessity for India\'s local market sellers. With consumer behavior decisively shifting toward online convenience, kiranas, fabric stores, eateries and other neighborhood businesses must adapt or lose share to Amazon, Flipkart, Swiggy, Zomato and others.',
      
      finalMessage: 'Now, we are here to build your online presence with yours and our innovative ideas. Because we believe local market is best way to enhance customer buying experience.',
      
      quote: '"Because we know what our neighbors need and what they don\'t"',
      
      // Services Page
      servicesTitle: 'Our Services',
      servicesSubtitle: 'Complete solutions to digitize your business',
      
      // Contact Page
      contactTitle: 'Contact Us',
      contactSubtitle: 'Start your digital journey today',
      
      name: 'Name',
      phone: 'Phone Number',
      businessType: 'Business Type',
      city: 'City',
      message: 'Message',
      submit: 'Submit',
      
      welcomeMessage: 'Welcome to SmartVyapari',
      
      // Services List
      websiteDevelopment: 'Website Development',
      whatsappCatalog: 'WhatsApp Catalog',
      socialMediaManagement: 'Social Media Management',
      seoServices: 'SEO Services',
      ondcOnboarding: 'ONDC Onboarding',
      ecommerceSetup: 'E-commerce Setup',
      digitalMarketing: 'Digital Marketing',
      techSupport: 'Tech Support'
    }
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
    
  );
};