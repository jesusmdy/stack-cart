import { StyleSheet, View, Text } from 'react-native';

const Logo = () => {
  return (
    <View>
      <Text style={style.logo}>MyStore</Text>
    </View>
  );
};
const style = StyleSheet.create({
  logo: {
    color: '#444',
    fontSize: 20,
  }
});

export default Logo;