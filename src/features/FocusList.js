import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const FocusList = ({ focusHistory }) => {

  if(!focusHistory || focusHistory.length == 0) {
    return (
      <View style={styles.emptyFocusContainer}>
        <Text style={styles.emptyFocusText}>You've not focused on anything yet!</Text>
      </View>
    )
  }

  const renderItem = ({ item }) => {
    return <Text style={styles.focusItem}>- {item}</Text>;
  };

  return (
    <View style={styles.focusListContainer}>
      <Text style={styles.focusListHeading}>
        Thing you've focused on : 
      </Text>
      <FlatList data={focusHistory} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  focusListContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  focusListHeading: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
  focusItem: {
    color: colors.white,
    paddingTop: spacing.md
  },
  emptyFocusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyFocusText: {
    fontSize: spacing.lg,
    fontWeight: 'bold',
    color: 'darkgray',
    textAlign: 'center'
  }
});

export default FocusList;
