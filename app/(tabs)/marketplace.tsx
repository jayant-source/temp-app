import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { Users, ShoppingCart, Camera, Upload, Plus } from 'lucide-react-native';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';
import { mockProducts } from '@/data/mockData';
import { Product } from '@/types';

const categories = ['seeds', 'fertilizers', 'pesticides', 'tools'] as const;

export default function MarketplaceScreen() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('seeds');
  const [cart, setCart] = useState<string[]>([]);
  
  // Sell form state
  const [formData, setFormData] = useState({
    cropName: '',
    quantity: '',
    expectedPrice: '',
  });

  const filteredProducts = mockProducts.filter(product => product.category === selectedCategory);

  const handleAddToCart = (productId: string) => {
    setCart(prev => [...prev, productId]);
  };

  const handleSubmit = () => {
    if (!formData.cropName || !formData.quantity || !formData.expectedPrice) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', 'Your listing has been posted!');
    setFormData({ cropName: '', quantity: '', expectedPrice: '' });
  };

  const mockBids = [
    { id: '1', buyer: 'राम व्यापारी', price: 2100, quantity: 50 },
    { id: '2', buyer: 'श्याम कंपनी', price: 2050, quantity: 100 },
    { id: '3', buyer: 'गीता एक्सपोर्ट', price: 2150, quantity: 25 },
  ];

  const renderProduct = (product: Product) => (
    <View key={product.id} style={styles.productCard}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>
          {language === 'hindi' ? product.nameHindi : product.name}
        </Text>
        <Text style={styles.productPrice}>₹{product.price}</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => handleAddToCart(product.id)}
        >
          <ShoppingCart size={16} color="white" />
          <Text style={styles.addToCartText}>
            {translate('addToCart', language)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderBuyTab = () => (
    <>
      <View style={styles.categoryButtons}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.activeCategoryButton
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryButtonText,
              selectedCategory === category && styles.activeCategoryButtonText
            ]}>
              {translate(category, language)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.groupBuyButton}>
        <Users size={20} color="white" />
        <Text style={styles.groupBuyText}>{translate('groupBuy', language)}</Text>
      </TouchableOpacity>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.productsGrid}>
          {filteredProducts.map(renderProduct)}
        </View>
      </ScrollView>
    </>
  );

  const renderSellTab = () => (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.formCard}>
        <Text style={styles.formTitle}>{translate('postYourHarvest', language)}</Text>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>{translate('cropName', language)}</Text>
          <TextInput
            style={styles.input}
            value={formData.cropName}
            onChangeText={(text) => setFormData(prev => ({ ...prev, cropName: text }))}
            placeholder={translate('cropNamePlaceholder', language)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>{translate('quantity', language)}</Text>
          <TextInput
            style={styles.input}
            value={formData.quantity}
            onChangeText={(text) => setFormData(prev => ({ ...prev, quantity: text }))}
            placeholder={translate('quantityPlaceholder', language)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>{translate('expectedPrice', language)}</Text>
          <TextInput
            style={styles.input}
            value={formData.expectedPrice}
            onChangeText={(text) => setFormData(prev => ({ ...prev, expectedPrice: text }))}
            placeholder={translate('pricePlaceholder', language)}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.photoButton}>
          <Camera size={20} color="#22C55E" />
          <Text style={styles.photoButtonText}>{translate('uploadPhoto', language)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Upload size={20} color="white" />
          <Text style={styles.submitButtonText}>{translate('postListing', language)}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bidsCard}>
        <Text style={styles.bidsTitle}>{translate('activeBids', language)}</Text>
        {mockBids.map((bid) => (
          <View key={bid.id} style={styles.bidItem}>
            <View style={styles.bidInfo}>
              <Text style={styles.buyerName}>{bid.buyer}</Text>
              <Text style={styles.bidDetails}>
                Quantity: {bid.quantity} quintals
              </Text>
            </View>
            <View style={styles.bidPrice}>
              <Text style={styles.priceText}>₹{bid.price}</Text>
              <Text style={styles.perQuintal}>per quintal</Text>
            </View>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>{translate('accept', language)}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{translate('marketplace', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>

      <View style={styles.tabButtons}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'buy' && styles.activeTabButton]}
          onPress={() => setActiveTab('buy')}
        >
          <ShoppingCart size={20} color={activeTab === 'buy' ? 'white' : '#6B7280'} />
          <Text style={[
            styles.tabButtonText,
            activeTab === 'buy' && styles.activeTabButtonText
          ]}>
            {translate('buy', language)}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'sell' && styles.activeTabButton]}
          onPress={() => setActiveTab('sell')}
        >
          <Plus size={20} color={activeTab === 'sell' ? 'white' : '#6B7280'} />
          <Text style={[
            styles.tabButtonText,
            activeTab === 'sell' && styles.activeTabButtonText
          ]}>
            {translate('sell', language)}
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'buy' ? renderBuyTab() : renderSellTab()}

      {cart.length > 0 && activeTab === 'buy' && (
        <View style={styles.cartIndicator}>
          <Text style={styles.cartText}>Cart: {cart.length} items</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    flex: 1,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabButtons: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: '#F3F4F6',
  },
  activeTabButton: {
    backgroundColor: '#22C55E',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
    marginLeft: 8,
  },
  activeTabButtonText: {
    color: 'white',
  },
  categoryButtons: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#F3F4F6',
  },
  activeCategoryButton: {
    backgroundColor: '#22C55E',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  activeCategoryButtonText: {
    color: 'white',
  },
  groupBuyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A3533A',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
  },
  groupBuyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  content: {
    flex: 1,
  },
  productsGrid: {
    padding: 16,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22C55E',
    marginBottom: 12,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22C55E',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  cartIndicator: {
    backgroundColor: '#22C55E',
    padding: 12,
    alignItems: 'center',
  },
  cartText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  // Sell tab styles
  formCard: {
    backgroundColor: 'white',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F9FAFB',
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#22C55E',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  photoButtonText: {
    color: '#22C55E',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22C55E',
    padding: 16,
    borderRadius: 8,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  bidsCard: {
    backgroundColor: 'white',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  bidsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  bidItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    marginBottom: 12,
  },
  bidInfo: {
    flex: 1,
  },
  buyerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  bidDetails: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  bidPrice: {
    alignItems: 'center',
    marginRight: 12,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22C55E',
  },
  perQuintal: {
    fontSize: 12,
    color: '#6B7280',
  },
  acceptButton: {
    backgroundColor: '#22C55E',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});