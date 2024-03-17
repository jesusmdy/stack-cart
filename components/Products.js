import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Product from './Product';

const Products = () => {
  const [isLoading, setIsLoading] = useState();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const request = await fetch('https://dummyjson.com/products');
      if (!request.ok) throw new Error('Cannot fetch the products');
      const products = await request.json();
      return products;
    } catch (err) {
      return err;
    }
  };

  useEffect(
    () => {
      setIsLoading(true);
      fetchProducts()
        .then(res => {
          const {products} = res;
          setProducts(products)
        })
        .catch(console.log)
        .finally(() => setIsLoading(false))
    },
    []
  );

  if (isLoading) return (
    <View>
      <Text>Loading products...</Text>
    </View>
  );

  if (products?.length === 0 && !isLoading) return (
    <View>
      <Text>There are no products!</Text>
    </View>
  );

  return (
    <View style={styles.products}>
      {
        products.map(
          product => (
            <Product product={product} key={product.id} />
          )
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  products: {
    gap: 10,
    marginTop: 10
  }
});

export default Products;