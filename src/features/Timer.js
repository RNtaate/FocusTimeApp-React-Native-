import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';          

import { Countdown } from '../components/CountDown';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

const MINUTES = [10, 15, 20];

const Timer = ({ currentSubject, clearSubject, onTimerEnd }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setProgress(1);
    setIsStarted(false);
    reset();
    onTimerEnd(currentSubject);
  }

  return (
    <View style={styles.timerContainer}>
      {/* Count Down Feature View */}
      <View style={styles.countDownView}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(prog) => setProgress(prog)}
          onEnd={onEnd}
        />
      </View>

      {/* Focus Subect View */}
      <View style={styles.subjectView}>
        <Text style={styles.focusHeading}>Focusing on : </Text>
        <Text style={styles.focusSubject}>{currentSubject}</Text>
      </View>

      {/* Progress Bar View */}
      <ProgressBar progress={progress} style={{height: spacing.sm}} color={colors.progressBar} />

      {/* Minutes Button Wrapper */}
      <View style={styles.minutesView}>
        {MINUTES.map((minute) => {
          return <RoundedButton title={`${minute}`} size={75} onPress={() => setMinutes(minute)} />
        })}
      </View>

      {/* Button Wrapper View */}
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title={'Pause'} onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title={'Start'} onPress={() => setIsStarted(true)} />
        )}
      </View>

      {/* Clear Subject button Wrapper */}
      <View style={styles.clearWrapper}>
        <RoundedButton title="clear" size={50} onPress={clearSubject}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    flex: 1,
  },
  countDownView: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectView: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  focusHeading: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: spacing.sm,
  },
  focusSubject: {
    color: colors.white,
  },
  minutesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg
  },
  clearWrapper: {
    alignItems: 'center',
    paddingBottom: spacing.lg
  }
});

export default Timer;
