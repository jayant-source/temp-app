export const translations = {
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
    
    // Academy
    coinsEarned: 'कमाए गए सिक्के',
    watchVideo: 'वीडियो देखें',
    
    // Help
    govSchemes: 'सरकारी योजनाएं',
    callHelpline: 'हेल्पलाइन कॉल करें',
    eligibility: 'पात्रता',
    
    // Onboarding
    phoneNumber: 'फोन नंबर',
    sendOTP: 'OTP भेजें',
    enterOTP: 'OTP दर्ज करें',
    verify: 'सत्यापित करें',
    name: 'नाम',
    state: 'राज्य',
    district: 'जिला',
    complete: 'पूरा करें',
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
    
    // Academy
    coinsEarned: 'Coins Earned',
    watchVideo: 'Watch Video',
    
    // Help
    govSchemes: 'Government Schemes',
    callHelpline: 'Call Helpline',
    eligibility: 'Eligibility',
    
    // Onboarding
    phoneNumber: 'Phone Number',
    sendOTP: 'Send OTP',
    enterOTP: 'Enter OTP',
    verify: 'Verify',
    name: 'Name',
    state: 'State',
    district: 'District',
    complete: 'Complete',
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