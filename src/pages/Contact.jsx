import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isHindi, setIsHindi] = useState(true); // 🔄 Language toggle

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mqaynylo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        business: "",
        address: "",
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex flex-col items-center justify-center px-6 py-10 overflow-hidden">

      <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => setIsHindi(!isHindi)}
  className="absolute top-0 md:top-8 right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 hover:from-yellow-500 hover:to-orange-600"
>
  {isHindi ? "Form in English " : "हिन्दी में देखें 🇮🇳"}
</motion.button>



      <AnimatePresence mode="wait">
        {isHindi ? (
          <motion.div
            key="hindi"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center border border-yellow-100"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">हमसे संपर्क करें</h2>
            <p className="text-gray-600 mb-8">हम आपसे सुनना पसंद करेंगे!</p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-green-600 font-semibold text-lg"
              >
                ✅ धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {[
                  { name: "name", label: "नाम" },
                  { name: "phone", label: "संपर्क नंबर" },
                  { name: "email", label: "ईमेल (वैकल्पिक)" },
                  { name: "business", label: "व्यवसाय की आवश्यकता (वैकल्पिक)" },
                  { name: "address", label: "पता" },
                ].map(({ name, label }) => (
                  <div key={name}>
                    <label className="block text-gray-700 font-medium mb-1">{label}</label>
                    <input
                      type={name === "email" ? "email" : "text"}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required={name !== "email" && name !== "business"}
                      className="w-full px-4 py-2 rounded-lg border border-yellow-200 focus:ring-2 focus:ring-yellow-400 outline-none shadow-sm"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  सबमिट करें
                </button>
              </form>
            )}

            <div className="mt-10 text-gray-700 text-sm leading-relaxed">
              <strong>संपर्क विवरण:</strong>
              <br />
              फ़ोन: +91 8400286637 <br />
              मेल: smartvyapari13@gmail.com <br />
              पता: गोविंद नगर, औरैया, उ.प्र
              <br />
              <br />
              <strong>कार्य के घंटे:</strong>
              <br />
              सोमवार - शुक्रवार: सुबह 9 बजे से शाम 7 बजे तक <br />
              शनिवार: सुबह 11 बजे से शाम 5 बजे तक <br />
              रविवार: केवल ऑनलाइन
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="english"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center border border-yellow-100"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-8">We’d love to hear from you!</p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-green-600 font-semibold text-lg"
              >
                ✅ Thank you! We’ll contact you soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {[
                  { name: "name", label: "Name" },
                  { name: "phone", label: "Contact Number" },
                  { name: "email", label: "Email (Optional)" },
                  { name: "business", label: "Need of Business (Optional)" },
                  { name: "address", label: "Address" },
                ].map(({ name, label }) => (
                  <div key={name}>
                    <label className="block text-gray-700 font-medium mb-1">{label}</label>
                    <input
                      type={name === "email" ? "email" : "text"}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required={name !== "email" && name !== "business"}
                      className="w-full px-4 py-2 rounded-lg border border-yellow-200 focus:ring-2 focus:ring-yellow-400 outline-none shadow-sm"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Submit
                </button>
              </form>
            )}

            <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{
    scale: 1.03,
    boxShadow: "0 10px 25px rgba(255, 165, 0, 0.25)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="mt-10 bg-white/70 backdrop-blur-md rounded-2xl border border-yellow-200 p-6 sm:p-8 shadow-md text-center"
>
  <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">
    Contact Info 📞
  </h3>

  <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
    {[
      { label: "Phone", value: "+91 8400286637" },
      { label: "Mail", value: "smartvyapari13@gmail.com" },
      { label: "Address", value: "Govind Nagar, Auraiya, U.P" },
    ].map((item, i) => (
      <motion.p
        key={i}
        whileHover={{ color: "#f59e0b", scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="transition-colors duration-200"
      >
        <strong>{item.label}:</strong> {item.value}
      </motion.p>
    ))}
  </div>

  <hr className="my-4 border-yellow-200" />

  <h4 className="text-lg font-semibold text-gray-800 mb-2">🕒 Working Hours</h4>
  <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-1">
    {[
      "Monday - Friday: 9 AM - 7 PM",
      "Saturday: 11 AM - 5 PM",
      "Sunday: Online Only",
    ].map((text, i) => (
      <motion.p
        key={i}
        whileHover={{ color: "#f59e0b", x: 5 }}
        transition={{ duration: 0.2 }}
        className="transition-all duration-200"
      >
        {text}
      </motion.p>
    ))}
  </div>
</motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
