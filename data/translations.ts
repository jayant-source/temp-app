export const translations: Record<'hindi' | 'english', { [key: string]: string }> = {
  hindi: {
    // Common
    welcome: 'स्वागत',
    home: 'होम',
    marketplace: 'बाज़ार',
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
  }
};

export function translate(key: string, language: 'hindi' | 'english', params?: Record<string, string>) {
  let text = translations[language][key] || key;
  
  if (params) {
    Object.keys(params).forEach(param => {
      text = text.replace(`{{${param}}}`, params[param]);
    });
  }
  
  return text;
}
