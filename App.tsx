import {StyleSheet} from 'react-native';
import Navigator from "@/navigator";

export default () => {
    return (
        <Navigator />
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
