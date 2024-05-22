import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AddSvg from '../assets/img/Add.svg';

type RootStackParamList = {
  Home: undefined;
  Add: undefined;
};

type AddButtonProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Add'>;
};

const AddButton: React.FC<AddButtonProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Add')}>
        <AddSvg width={45} height={45} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: 0,
  },
});

export default AddButton;
