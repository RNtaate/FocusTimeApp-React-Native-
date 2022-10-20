import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Constants from 'expo-constants';

import Focus from './src/features/Focus';
import Timer from './src/features/Timer';
import { colors } from './src/utils/colors';
import FocusList from './src/features/FocusList';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
        <Timer currentSubject={currentSubject} clearSubject={() => setCurrentSubject(null)} onTimerEnd={(subject) => setHistory([...history, subject])}/>
      ) : (
        <>
          <Focus setCurrentSubject={setCurrentSubject}/>
          <FocusList focusHistory={history}/>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
