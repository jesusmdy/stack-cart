import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'

const Product = ({product}) => {

  const handleOnPress = () => {
    alert('product!');
  };
  return (
    <View style={styles.product}>
      <Image
        source={{
          uri: product.images[0]
        }}
        alt={product.description}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.productDescription}>
          <Text>{product.title}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleOnPress}>
            <Text>Press Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  product: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 20,
    flexDirection: "row",
    gap: 10
  },
  image: {
    borderRadius: 20,
    width: 100,
    height: 100,
    contentFit: "cover"
  },
  content: {
    flex: 1,
  },
  actions: {
    flexDirection: "row"
  },
  productDescription: {
    flex: 1
  },
  addToCartButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10
  }
});

export default Product;