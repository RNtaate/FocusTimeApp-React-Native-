import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

const Focus = ({setCurrentSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.focusContainer}>
      <Text style={styles.greeting}>WHAT WOULD YOU LIKE TO FOCUS ON?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          label="Enter here"
          onChangeText={setSubject}
          style={styles.textInput}
        />
        <RoundedButton title="+" size={50} onPress={() => {setCurrentSubject(subject)}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    color: colors.white,
    fontWeight: 'bold',
    paddingTop: spacing.lg,
    textAlign: 'center',
    fontSize: fontSizes.lg,
    paddingHorizontal: spacing.lg
  },
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: spacing.xxl,
    padding: spacing.lg,
  },
  textInput: {
    flex: 0.95,
  }
});

export default Focus;
