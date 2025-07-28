import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Users, ShoppingCart } from 'lucide-react-native';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';
import { mockProducts } from '@/data/mockData';
import { Product } from '@/types';

const categories = ['seeds', 'fertilizers', 'pesticides', 'tools'] as const;

export default function MarketplaceScreen() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('seeds');
  const [cart, setCart] = useState<string[]>([]);

  const filteredProducts = mockProducts.filter(product => product.category === selectedCategory);

  const handleAddToCart = (productId: string) => {
    setCart(prev => [...prev, productId]);
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{translate('marketplace', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>

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

      {cart.length > 0 && (
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
});