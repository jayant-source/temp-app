export const translations: Record<'hindi' | 'english' | 'bengali' | 'marathi' | 'punjabi', { [key: string]: string }> = {
  hindi: {
    // Common
    welcome: 'स्वागत',
    home: 'होम',
    marketplace: 'बाज़ार',
    buy: 'खरीदें',
    sell: 'बेचें',
    academy: 'अकादमी',
    help: 'सहायता',
    
    // Home Screen
    welcomeUser: 'स्वागत, {{name}}',
    weather: 'मौसम',
    cropRecommendation: 'फसल सुझाव',
    solarPlanner: 'सोलर कमाई',
    marketPrices: 'बाजार भाव',
    pestAlert: 'कीट चेतावनी',
    
    // Crop Recommendation
    soilType: 'मिट्टी का प्रकार',
    farmSize: 'खेत का आकार',
    irrigationSource: 'सिंचाई का स्रोत',
    getRecommendations: 'सुझाव पाएं',
    estimatedYield: 'अनुमानित उत्पादन',
    marketPrice: 'बाजार मूल्य',
    totalProfit: 'कुल लाभ',
    tellUsAboutYourFarm: 'हमें अपने खेत के बारे में बताएं',
    recommendedCrops: 'आपके खेत के लिए अनुशंसित फसलें',
    basedOn: '{{soil}} मिट्टी, {{size}} एकड़, {{irrigation}} सिंचाई के आधार पर',
    getNewRecommendations: 'नई सिफारिशें प्राप्त करें',

    // Marketplace
    seeds: 'बीज',
    fertilizers: 'उर्वरक',
    pesticides: 'कीटनाशक',
    tools: 'उपकरण',
    groupBuy: 'सामूहिक खरीद',
    addToCart: 'कार्ट में डालें',
    
    // Sell Screen
    cropName: 'फसल का नाम',
    quantity: 'मात्रा (क्विंटल में)',
    expectedPrice: 'अपेक्षित मूल्य',
    uploadPhoto: 'फोटो अपलोड करें',
    postListing: 'सूची में डालें',
    activeBids: 'सक्रिय बोलियां',
    postYourHarvest: 'अपनी फसल पोस्ट करें',
    cropNamePlaceholder: 'जैसे, गेहूं, चावल, गन्ना',
    quantityPlaceholder: 'क्विंटल में मात्रा दर्ज करें',
    pricePlaceholder: 'प्रति क्विंटल मूल्य (₹)',
    accept: 'स्वीकार करें',

    // Academy
    coinsEarned: 'कमाए गए सिक्के',
    watchVideo: 'वीडियो देखें',
    
    // Help
    govSchemes: 'सरकारी योजनाएं',
    callHelpline: 'हेल्पलाइन कॉल करें',
    eligibility: 'पात्रता',
    faq: 'अक्सर पूछे जाने वाले प्रश्न',
    voiceAssistantQuestion: 'मैं वॉयस असिस्टेंट का उपयोग कैसे करूं?',
    voiceAssistantAnswer: 'ऐप में कहीं भी माइक्रोफ़ोन आइकन पर टैप करें और अपना प्रश्न हिंदी या अंग्रेजी में बोलें।',
    recommendationAccuracyQuestion: 'फसल की सिफारिशें कितनी सटीक हैं?',
    recommendationAccuracyAnswer: 'हमारा AI 85%+ सटीक सिफारिशें प्रदान करने के लिए स्थानीय मौसम डेटा, मिट्टी की स्थिति और बाजार के रुझान का उपयोग करता है।',
    solarCalculatorAccuracyQuestion: 'क्या सोलर कैलकुलेटर सटीक है?',
    solarCalculatorAccuracyAnswer: 'हां, यह 10% सटीकता के भीतर संभावित कमाई की गणना करने के लिए उपग्रह डेटा और स्थानीय सौर विकिरण का उपयोग करता है।',

    // Onboarding
    phoneNumber: 'फोन नंबर',
    sendOTP: 'OTP भेजें',
    enterOTP: 'OTP दर्ज करें',
    verify: 'सत्यापित करें',
    name: 'नाम',
    state: 'राज्य',
    district: 'जिला',
    complete: 'पूरा करें',

    // Not Found Screen
    oops: 'ओह!',
    screenNotExist: 'यह स्क्रीन मौजूद नहीं है।',
    goToHome: 'होम स्क्रीन पर जाएं!',

    // Home placeholder
    moreFeaturesComing: 'अधिक सुविधाएं जल्द ही आ रही हैं',

    // Placeholder
    marketPricesPlaceholder: 'बाजार मूल्य की जानकारी यहां प्रदर्शित की जाएगी।',
    pestAlertPlaceholder: 'कीट अलर्ट के बारे में जानकारी यहां प्रदर्शित की जाएगी।',
    solarPlannerPlaceholder: 'सौर आय योजनाकार यहां उपलब्ध होगा।',
  },
  english: {
    // Common
    welcome: 'Welcome',
    home: 'Home',
    marketplace: 'Marketplace',
    buy: 'Buy',
    sell: 'Sell',
    academy: 'Academy',
    help: 'Help',
    
    // Home Screen
    welcomeUser: 'Welcome, {{name}}',
    weather: 'Weather',
    cropRecommendation: 'Crop Recommendation',
    solarPlanner: 'Solar Income Planner',
    marketPrices: 'Market Prices',
    pestAlert: 'Pest Alert',
    
    // Crop Recommendation
    soilType: 'Soil Type',
    farmSize: 'Farm Size',
    irrigationSource: 'Irrigation Source',
    getRecommendations: 'Get Recommendations',
    estimatedYield: 'Estimated Yield',
    marketPrice: 'Market Price',
    totalProfit: 'Total Profit',
    tellUsAboutYourFarm: 'Tell us about your farm',
    recommendedCrops: 'Recommended crops for your farm',
    basedOn: 'Based on {{soil}} soil, {{size}} acres, {{irrigation}} irrigation',
    getNewRecommendations: 'Get New Recommendations',
    
    // Marketplace
    seeds: 'Seeds',
    fertilizers: 'Fertilizers',
    pesticides: 'Pesticides',
    tools: 'Tools',
    groupBuy: 'Group Buy',
    addToCart: 'Add to Cart',
    
    // Sell Screen
    cropName: 'Crop Name',
    quantity: 'Quantity (in Quintals)',
    expectedPrice: 'Expected Price',
    uploadPhoto: 'Upload Photo',
    postListing: 'Post Listing',
    activeBids: 'Active Bids',
    postYourHarvest: 'Post Your Harvest',
    cropNamePlaceholder: 'e.g., Wheat, Rice, Sugarcane',
    quantityPlaceholder: 'Enter quantity in quintals',
    pricePlaceholder: 'Price per quintal (₹)',
    accept: 'Accept',
    
    // Academy
    coinsEarned: 'Coins Earned',
    watchVideo: 'Watch Video',
    
    // Help
    govSchemes: 'Government Schemes',
    callHelpline: 'Call Helpline',
    eligibility: 'Eligibility',
    faq: 'Frequently Asked Questions',
    voiceAssistantQuestion: 'How do I use the voice assistant?',
    voiceAssistantAnswer: 'Tap the microphone icon anywhere in the app and speak your question in Hindi or English.',
    recommendationAccuracyQuestion: 'How accurate are the crop recommendations?',
    recommendationAccuracyAnswer: 'Our AI uses local weather data, soil conditions, and market trends to provide 85%+ accurate recommendations.',
    solarCalculatorAccuracyQuestion: 'Is the solar calculator accurate?',
    solarCalculatorAccuracyAnswer: 'Yes, it uses satellite data and local solar irradiance to calculate potential earnings within 10% accuracy.',

    // Onboarding
    phoneNumber: 'Phone Number',
    sendOTP: 'Send OTP',
    enterOTP: 'Enter OTP',
    verify: 'Verify',
    name: 'Name',
    state: 'State',
    district: 'District',
    complete: 'Complete',
    
    // Not Found Screen
    oops: 'Oops!',
    screenNotExist: "This screen doesn't exist.",
    goToHome: 'Go to home screen!',

    // Home placeholder
    moreFeaturesComing: 'More features coming soon',

    // Placeholder
    marketPricesPlaceholder: 'Market price information will be displayed here.',
    pestAlertPlaceholder: 'Information about pest alerts will be displayed here.',
    solarPlannerPlaceholder: 'The solar income planner will be available here.',
  },
  bengali: {
    // Common
    welcome: 'স্বাগতম',
    home: 'হোম',
    marketplace: 'বাজার',
    buy: 'কিনুন',
    sell: 'বিক্রি করুন',
    academy: 'একাডেমি',
    help: 'সাহায্য',
    
    // Home Screen
    welcomeUser: 'স্বাগতম, {{name}}',
    weather: 'আবহাওয়া',
    cropRecommendation: 'ফসল সুপারিশ',
    solarPlanner: 'সৌর আয় পরিকল্পনাকারী',
    marketPrices: 'বাজার দাম',
    pestAlert: 'কীটপতঙ্গ সতর্কতা',
    
    // Crop Recommendation
    soilType: 'মাটির ধরন',
    farmSize: 'খামারের আকার',
    irrigationSource: 'সেচের উৎস',
    getRecommendations: 'সুপারিশ পান',
    estimatedYield: 'আনুমানিক ফলন',
    marketPrice: 'বাজার মূল্য',
    totalProfit: 'মোট লাভ',
    tellUsAboutYourFarm: 'আপনার খামার সম্পর্কে বলুন',
    recommendedCrops: 'আপনার খামারের জন্য প্রস্তাবিত ফসল',
    basedOn: '{{soil}} মাটি, {{size}} একর, {{irrigation}} সেচের উপর ভিত্তি করে',
    getNewRecommendations: 'নতুন সুপারিশ পান',

    // Marketplace
    seeds: 'বীজ',
    fertilizers: 'সার',
    pesticides: 'কীটনাশক',
    tools: 'যন্ত্রপাতি',
    groupBuy: 'গ্রুপ কেনাকাটা',
    addToCart: 'কার্টে যোগ করুন',
    
    // Sell Screen
    cropName: 'ফসলের নাম',
    quantity: 'পরিমাণ (কুইন্টালে)',
    expectedPrice: 'প্রত্যাশিত দাম',
    uploadPhoto: 'ছবি আপলোড করুন',
    postListing: 'তালিকা পোস্ট করুন',
    activeBids: 'সক্রিয় বিড',
    postYourHarvest: 'আপনার ফসল পোস্ট করুন',
    cropNamePlaceholder: 'যেমন, গম, চাল, আখ',
    quantityPlaceholder: 'কুইন্টালে পরিমাণ লিখুন',
    pricePlaceholder: 'প্রতি কুইন্টাল দাম (₹)',
    accept: 'গ্রহণ করুন',

    // Academy
    coinsEarned: 'অর্জিত কয়েন',
    watchVideo: 'ভিডিও দেখুন',
    
    // Help
    govSchemes: 'সরকারি প্রকল্প',
    callHelpline: 'হেল্পলাইনে কল করুন',
    eligibility: 'যোগ্যতা',
    faq: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    voiceAssistantQuestion: 'আমি কীভাবে ভয়েস সহায়ক ব্যবহার করব?',
    voiceAssistantAnswer: 'অ্যাপের যেকোনো জায়গায় মাইক্রোফোন আইকনে ট্যাপ করুন এবং বাংলা বা ইংরেজিতে আপনার প্রশ্ন বলুন।',
    recommendationAccuracyQuestion: 'ফসলের সুপারিশ কতটা নির্ভুল?',
    recommendationAccuracyAnswer: 'আমাদের AI স্থানীয় আবহাওয়া ডেটা, মাটির অবস্থা এবং বাজারের প্রবণতা ব্যবহার করে 85%+ নির্ভুল সুপারিশ প্রদান করে।',
    solarCalculatorAccuracyQuestion: 'সৌর ক্যালকুলেটর কি নির্ভুল?',
    solarCalculatorAccuracyAnswer: 'হ্যাঁ, এটি 10% নির্ভুলতার মধ্যে সম্ভাব্য আয় গণনা করতে স্যাটেলাইট ডেটা এবং স্থানীয় সৌর বিকিরণ ব্যবহার করে।',

    // Onboarding
    phoneNumber: 'ফোন নম্বর',
    sendOTP: 'OTP পাঠান',
    enterOTP: 'OTP লিখুন',
    verify: 'যাচাই করুন',
    name: 'নাম',
    state: 'রাজ্য',
    district: 'জেলা',
    complete: 'সম্পূর্ণ করুন',

    // Not Found Screen
    oops: 'ওহ!',
    screenNotExist: 'এই স্ক্রিনটি বিদ্যমান নেই।',
    goToHome: 'হোম স্ক্রিনে যান!',

    // Home placeholder
    moreFeaturesComing: 'আরও বৈশিষ্ট্য শীঘ্রই আসছে',

    // Placeholder
    marketPricesPlaceholder: 'বাজার মূল্যের তথ্য এখানে প্রদর্শিত হবে।',
    pestAlertPlaceholder: 'কীটপতঙ্গ সতর্কতা সম্পর্কে তথ্য এখানে প্রদর্শিত হবে।',
    solarPlannerPlaceholder: 'সৌর আয় পরিকল্পনাকারী এখানে উপলব্ধ হবে।',
  },
  marathi: {
    // Common
    welcome: 'स्वागत',
    home: 'होम',
    marketplace: 'बाजार',
    buy: 'खरेदी करा',
    sell: 'विक्री करा',
    academy: 'अकादमी',
    help: 'मदत',
    
    // Home Screen
    welcomeUser: 'स्वागत, {{name}}',
    weather: 'हवामान',
    cropRecommendation: 'पीक शिफारस',
    solarPlanner: 'सौर उत्पन्न नियोजक',
    marketPrices: 'बाजार भाव',
    pestAlert: 'कीड इशारा',
    
    // Crop Recommendation
    soilType: 'मातीचा प्रकार',
    farmSize: 'शेताचा आकार',
    irrigationSource: 'सिंचनाचा स्रोत',
    getRecommendations: 'शिफारसी मिळवा',
    estimatedYield: 'अंदाजित उत्पादन',
    marketPrice: 'बाजार किंमत',
    totalProfit: 'एकूण नफा',
    tellUsAboutYourFarm: 'आपल्या शेताबद्दल सांगा',
    recommendedCrops: 'आपल्या शेतासाठी शिफारस केलेली पिके',
    basedOn: '{{soil}} माती, {{size}} एकर, {{irrigation}} सिंचनावर आधारित',
    getNewRecommendations: 'नवीन शिफारसी मिळवा',

    // Marketplace
    seeds: 'बियाणे',
    fertilizers: 'खत',
    pesticides: 'कीटकनाशके',
    tools: 'साधने',
    groupBuy: 'गट खरेदी',
    addToCart: 'कार्टमध्ये जोडा',
    
    // Sell Screen
    cropName: 'पिकाचे नाव',
    quantity: 'प्रमाण (क्विंटलमध्ये)',
    expectedPrice: 'अपेक्षित किंमत',
    uploadPhoto: 'फोटो अपलोड करा',
    postListing: 'यादी पोस्ट करा',
    activeBids: 'सक्रिय बोली',
    postYourHarvest: 'आपली कापणी पोस्ट करा',
    cropNamePlaceholder: 'उदा., गहू, तांदूळ, ऊस',
    quantityPlaceholder: 'क्विंटलमध्ये प्रमाण टाका',
    pricePlaceholder: 'प्रति क्विंटल किंमत (₹)',
    accept: 'स्वीकार करा',

    // Academy
    coinsEarned: 'मिळवलेली नाणी',
    watchVideo: 'व्हिडिओ पहा',
    
    // Help
    govSchemes: 'सरकारी योजना',
    callHelpline: 'हेल्पलाइनवर कॉल करा',
    eligibility: 'पात्रता',
    faq: 'वारंवार विचारले जाणारे प्रश्न',
    voiceAssistantQuestion: 'मी व्हॉइस असिस्टंट कसा वापरू?',
    voiceAssistantAnswer: 'अॅपमध्ये कुठेही मायक्रोफोन आयकनवर टॅप करा आणि मराठी किंवा इंग्रजीमध्ये आपला प्रश्न बोला.',
    recommendationAccuracyQuestion: 'पीक शिफारसी किती अचूक आहेत?',
    recommendationAccuracyAnswer: 'आमचा AI स्थानिक हवामान डेटा, मातीची स्थिती आणि बाजारातील ट्रेंड वापरून 85%+ अचूक शिफारसी प्रदान करतो.',
    solarCalculatorAccuracyQuestion: 'सौर कॅल्क्युलेटर अचूक आहे का?',
    solarCalculatorAccuracyAnswer: 'होय, ते 10% अचूकतेच्या आत संभाव्य कमाईची गणना करण्यासाठी उपग्रह डेटा आणि स्थानिक सौर विकिरण वापरते.',

    // Onboarding
    phoneNumber: 'फोन नंबर',
    sendOTP: 'OTP पाठवा',
    enterOTP: 'OTP टाका',
    verify: 'सत्यापित करा',
    name: 'नाव',
    state: 'राज्य',
    district: 'जिल्हा',
    complete: 'पूर्ण करा',

    // Not Found Screen
    oops: 'अरे!',
    screenNotExist: 'ही स्क्रीन अस्तित्वात नाही.',
    goToHome: 'होम स्क्रीनवर जा!',

    // Home placeholder
    moreFeaturesComing: 'अधिक वैशिष्ट्ये लवकरच येत आहेत',

    // Placeholder
    marketPricesPlaceholder: 'बाजार किंमतीची माहिती येथे प्रदर्शित केली जाईल.',
    pestAlertPlaceholder: 'कीटक इशाऱ्याबद्दल माहिती येथे प्रदर्शित केली जाईल.',
    solarPlannerPlaceholder: 'सौर उत्पन्न नियोजक येथे उपलब्ध असेल.',
  },
  punjabi: {
    // Common
    welcome: 'ਸੁਆਗਤ',
    home: 'ਘਰ',
    marketplace: 'ਬਾਜ਼ਾਰ',
    buy: 'ਖਰੀਦੋ',
    sell: 'ਵੇਚੋ',
    academy: 'ਅਕਾਦਮੀ',
    help: 'ਮਦਦ',
    
    // Home Screen
    welcomeUser: 'ਸੁਆਗਤ, {{name}}',
    weather: 'ਮੌਸਮ',
    cropRecommendation: 'ਫਸਲ ਸਿਫਾਰਸ਼',
    solarPlanner: 'ਸੋਲਰ ਆਮਦਨ ਯੋਜਨਾਕਾਰ',
    marketPrices: 'ਮਾਰਕੀਟ ਰੇਟ',
    pestAlert: 'ਕੀੜੇ ਚੇਤਾਵਨੀ',
    
    // Crop Recommendation
    soilType: 'ਮਿੱਟੀ ਦੀ ਕਿਸਮ',
    farmSize: 'ਖੇਤ ਦਾ ਆਕਾਰ',
    irrigationSource: 'ਸਿੰਚਾਈ ਦਾ ਸਰੋਤ',
    getRecommendations: 'ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ',
    estimatedYield: 'ਅਨੁਮਾਨਿਤ ਪੈਦਾਵਾਰ',
    marketPrice: 'ਮਾਰਕੀਟ ਰੇਟ',
    totalProfit: 'ਕੁੱਲ ਮੁਨਾਫਾ',
    tellUsAboutYourFarm: 'ਸਾਨੂੰ ਆਪਣੇ ਖੇਤ ਬਾਰੇ ਦੱਸੋ',
    recommendedCrops: 'ਤੁਹਾਡੇ ਖੇਤ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ ਫਸਲਾਂ',
    basedOn: '{{soil}} ਮਿੱਟੀ, {{size}} ਏਕੜ, {{irrigation}} ਸਿੰਚਾਈ ਦੇ ਆਧਾਰ ਤੇ',
    getNewRecommendations: 'ਨਵੀਆਂ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ',

    // Marketplace
    seeds: 'ਬੀਜ',
    fertilizers: 'ਖਾਦ',
    pesticides: 'ਕੀੜੇਮਾਰ',
    tools: 'ਔਜ਼ਾਰ',
    groupBuy: 'ਗਰੁੱਪ ਖਰੀਦ',
    addToCart: 'ਕਾਰਟ ਵਿੱਚ ਪਾਓ',
    
    // Sell Screen
    cropName: 'ਫਸਲ ਦਾ ਨਾਮ',
    quantity: 'ਮਾਤਰਾ (ਕੁਇੰਟਲ ਵਿੱਚ)',
    expectedPrice: 'ਉਮੀਦ ਕੀਤੀ ਕੀਮਤ',
    uploadPhoto: 'ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ',
    postListing: 'ਸੂਚੀ ਪੋਸਟ ਕਰੋ',
    activeBids: 'ਸਰਗਰਮ ਬੋਲੀਆਂ',
    postYourHarvest: 'ਆਪਣੀ ਫਸਲ ਪੋਸਟ ਕਰੋ',
    cropNamePlaceholder: 'ਜਿਵੇਂ, ਕਣਕ, ਚਾਵਲ, ਗੰਨਾ',
    quantityPlaceholder: 'ਕੁਇੰਟਲ ਵਿੱਚ ਮਾਤਰਾ ਦਰਜ ਕਰੋ',
    pricePlaceholder: 'ਪ੍ਰਤੀ ਕੁਇੰਟਲ ਕੀਮਤ (₹)',
    accept: 'ਸਵੀਕਾਰ ਕਰੋ',

    // Academy
    coinsEarned: 'ਕਮਾਏ ਗਏ ਸਿੱਕੇ',
    watchVideo: 'ਵੀਡੀਓ ਦੇਖੋ',
    
    // Help
    govSchemes: 'ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ',
    callHelpline: 'ਹੈਲਪਲਾਈਨ ਕਾਲ ਕਰੋ',
    eligibility: 'ਯੋਗਤਾ',
    faq: 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ',
    voiceAssistantQuestion: 'ਮੈਂ ਵੌਇਸ ਅਸਿਸਟੈਂਟ ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰਾਂ?',
    voiceAssistantAnswer: 'ਐਪ ਵਿੱਚ ਕਿਤੇ ਵੀ ਮਾਈਕ੍ਰੋਫੋਨ ਆਈਕਨ ਤੇ ਟੈਪ ਕਰੋ ਅਤੇ ਪੰਜਾਬੀ ਜਾਂ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਆਪਣਾ ਸਵਾਲ ਬੋਲੋ।',
    recommendationAccuracyQuestion: 'ਫਸਲ ਦੀਆਂ ਸਿਫਾਰਸ਼ਾਂ ਕਿੰਨੀਆਂ ਸਹੀ ਹਨ?',
    recommendationAccuracyAnswer: 'ਸਾਡਾ AI ਸਥਾਨਕ ਮੌਸਮ ਡੇਟਾ, ਮਿੱਟੀ ਦੀਆਂ ਸਥਿਤੀਆਂ ਅਤੇ ਮਾਰਕੀਟ ਰੁਝਾਨਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ 85%+ ਸਹੀ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।',
    solarCalculatorAccuracyQuestion: 'ਕੀ ਸੋਲਰ ਕੈਲਕੁਲੇਟਰ ਸਹੀ ਹੈ?',
    solarCalculatorAccuracyAnswer: 'ਹਾਂ, ਇਹ 10% ਸਹੀਤਾ ਦੇ ਅੰਦਰ ਸੰਭਾਵਿਤ ਕਮਾਈ ਦੀ ਗਣਨਾ ਕਰਨ ਲਈ ਸੈਟੇਲਾਈਟ ਡੇਟਾ ਅਤੇ ਸਥਾਨਕ ਸੋਲਰ ਰੇਡੀਏਸ਼ਨ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।',

    // Onboarding
    phoneNumber: 'ਫੋਨ ਨੰਬਰ',
    sendOTP: 'OTP ਭੇਜੋ',
    enterOTP: 'OTP ਦਰਜ ਕਰੋ',
    verify: 'ਤਸਦੀਕ ਕਰੋ',
    name: 'ਨਾਮ',
    state: 'ਰਾਜ',
    district: 'ਜ਼ਿਲ੍ਹਾ',
    complete: 'ਪੂਰਾ ਕਰੋ',

    // Not Found Screen
    oops: 'ਓਹ!',
    screenNotExist: 'ਇਹ ਸਕ੍ਰੀਨ ਮੌਜੂਦ ਨਹੀਂ ਹੈ।',
    goToHome: 'ਹੋਮ ਸਕ੍ਰੀਨ ਤੇ ਜਾਓ!',

    // Home placeholder
    moreFeaturesComing: 'ਹੋਰ ਫੀਚਰ ਜਲਦੀ ਆ ਰਹੇ ਹਨ',

    // Placeholder
    marketPricesPlaceholder: 'ਮਾਰਕੀਟ ਰੇਟ ਦੀ ਜਾਣਕਾਰੀ ਇੱਥੇ ਦਿਖਾਈ ਜਾਵੇਗੀ।',
    pestAlertPlaceholder: 'ਕੀੜੇ ਚੇਤਾਵਨੀ ਬਾਰੇ ਜਾਣਕਾਰੀ ਇੱਥੇ ਦਿਖਾਈ ਜਾਵੇਗੀ।',
    solarPlannerPlaceholder: 'ਸੋਲਰ ਆਮਦਨ ਯੋਜਨਾਕਾਰ ਇੱਥੇ ਉਪਲਬਧ ਹੋਵੇਗਾ।',
  }
};

export function translate(key: string, language: 'hindi' | 'english' | 'bengali' | 'marathi' | 'punjabi', params?: Record<string, string>) {
  let text = translations[language][key] || key;
  
  if (params) {
    Object.keys(params).forEach(param => {
      text = text.replace(`{{${param}}}`, params[param]);
    });
  }
  
  return text;
}