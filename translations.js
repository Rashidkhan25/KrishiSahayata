const translations = {
    en: {
        noAccount: "Don't you have an account?",
        signup: "Sign Up",
        welcome: "WELCOME",
        username: "Username",
        password: "Password",
        login: "LOGIN",
        forgotPassword: "Forgot your password?"
    },
    hi: {
        noAccount: "क्या आपका खाता नहीं है?",
        signup: "साइन अप करें",
        welcome: "स्वागत है",
        username: "उपयोगकर्ता नाम",
        password: "पासवर्ड",
        login: "लॉगिन",
        forgotPassword: "पासवर्ड भूल गए?"
    },
    mr: {
        noAccount: "तुमचे खाते नाही का?",
        signup: "साइन अप करा",
        welcome: "स्वागत आहे",
        username: "वापरकर्ता नाव",
        password: "पासवर्ड",
        login: "लॉगिन",
        forgotPassword: "पासवर्ड विसरलात?"
    },
    gu: {
        noAccount: "તમે ખાતું નથી?",
        signup: "સાઇન અપ કરો",
        welcome: "સ્વાગત છે",
        username: "વપરાશકર્તા નામ",
        password: "પાસવર્ડ",
        login: "લોગિન",
        forgotPassword: "પાસવર્ડ ભૂલી ગયા?"
    },
    ta: {
        noAccount: "உங்களுக்கு கணக்கு இல்லையா?",
        signup: "சைன் அப்",
        welcome: "வரவேற்கிறோம்",
        username: "பயனர்பெயர்",
        password: "கடவுச்சொல்",
        login: "உள்நுழைக",
        forgotPassword: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?"
    },
    te: {
        noAccount: "మీకు ఖాతా లేదు?",
        signup: "సైన్ అప్",
        welcome: "స్వాగతం",
        username: "వాడుకరి పేరు",
        password: "పాస్‌వర్డ్",
        login: "లాగిన్",
        forgotPassword: "మీ పాస్‌వర్డ్ మర్చిపోయారా?"
    },
    bn: {
        noAccount: "আপনার কি অ্যাকাউন্ট নেই?",
        signup: "সাইন আপ",
        welcome: "স্বাগতম",
        username: "ব্যবহারকারীর নাম",
        password: "পাসওয়ার্ড",
        login: "লগইন",
        forgotPassword: "পাসওয়ার্ড ভুলে গেছেন?"          
    },
    ur: {
        noAccount: "کیا آپ کے پاس اکاؤنٹ نہیں ہے؟",
        signup: "سائن اپ کریں",
        welcome: "خوش آمدید",
        username: "صارف کا نام",
        password: "پاس ورڈ",
        login: "لاگ ان",
        forgotPassword: "آپ کا پاس ورڈ بھول گئے؟"          
    },
    or: {
        noAccount: "ଆପଣଙ୍କର ଏକ ଖାତା ନାହିଁ କି?",
        signup: "ସାଇନ୍ ଅପ୍",
        welcome: "ସ୍ବାଗତ",
        username: "ବ୍ୟବହାରକାରୀ ନାମ",
        password: "ପାସୱାର୍ଡ",
        login: "ଲଗିନ୍",
        forgotPassword: "ପାସୱାର୍ଡ ଭୁଲିଗଲେ?"          
    },
    pa: {
        noAccount: "ਕੀ ਤੁਹਾਡਾ ਖਾਤਾ ਨਹੀਂ ਹੈ?",
        signup: "ਸਾਈਨ ਅਪ ਕਰੋ",
        welcome: "ਸੁਆਗਤ ਹੈ",
        username: "ਉਪਯੋਗਕਰਤਾ ਦਾ ਨਾਮ",
        password: "ਪਾਸਵਰਡ",
        login: "ਲੌਗ ਇਨ",
        forgotPassword: "ਤੁਹਾਨੂੰ ਪਾਸਵਰਡ ਭੁੱਲ ਗਿਆ ਹੈ?"
    },
    bho: {
        noAccount: "का रउवा पास एगो खाता नइखे?",
        signup: "साइन अप करीं",
        welcome: "स्वागत बा",
        username: "उपयोगकर्ता नाम",
        password: "पासवर्ड",
        login: "लॉगिन करीं",
        forgotPassword: "रउवा पासवर्ड भुला गइल बा?"
    }
};

// Get necessary elements
const languageSwitcher = document.getElementById("languageSwitcher");
const elementsToTranslate = document.querySelectorAll("[data-translate='true']");
const usernameInput = document.querySelector("input[placeholder='Username']");
const passwordInput = document.querySelector("input[placeholder='Password']");

// Update translations when the language is switched
languageSwitcher.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    
    // Update text content of elements
    elementsToTranslate.forEach((el) => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[selectedLang][key];
    });

    // Update placeholder text
    usernameInput.setAttribute("placeholder", translations[selectedLang].username);
    passwordInput.setAttribute("placeholder", translations[selectedLang].password);
});
