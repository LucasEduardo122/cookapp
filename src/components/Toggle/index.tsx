import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';

import { MotiView, useAnimationState } from 'moti';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Toggle() {

  const [isToogle, setisTooogle] = useState(false);

  const toogleAnimationState = useAnimationState({
    closed: {
      height: 70
    },

    open: {
      height: 170
    }
  })

  function toogleOpen() {
    toogleAnimationState.transitionTo('open')
    setisTooogle(true)
  }

  function toogleClose() {
    toogleAnimationState.transitionTo('closed')
    setisTooogle(false)
  }

  return (
    <MotiView style={styles.container} state={toogleAnimationState}>
      <Pressable onPressIn={() => toogleOpen()} onPressOut={() => toogleClose()}>
        {
          isToogle ? 

          <Feather
          name="x"
          color={theme.colors.white}
          size={26}
        /> :

        <Feather
          name="tag"
          color={theme.colors.white}
          size={26}
        />
        }
      </Pressable>

      <View style={styles.info}>
        <Text style={styles.label}>
          Calories
        </Text>

        <Text style={styles.value}>
          150
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>
          Weight
        </Text>

        <Text style={styles.value}>
          190g
        </Text>
      </View>
    </MotiView >
  );
}