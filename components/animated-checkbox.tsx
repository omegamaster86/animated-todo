import React, { useEffect, memo, useState } from 'react'
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  interpolateColor
} from 'react-native-reanimated'
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg'
import { Text, StyleSheet, View } from 'react-native'
import { Checkbox } from 'native-base'
import { store } from 'expo-router/build/global-state/router-store'
// import { StyleSheet, View, Pressable } from 'react-native'
// import AnimatedCheckbox from 'react-native-checkbox-reanimated'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN

const AnimatedPath = Animated.createAnimatedComponent(Path)

interface Props {
  checked?: boolean
}

const AnimatedCheckbox = (props: Props) => {
  const { checked } = props
  const checkmarkColor = '#000000'
  const highlightColor = '#ff0000'
  const boxOutlineColor = '#000000'

  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = checked ? 1 : 0
  }, [checked])

  const animatedBoxProps = useAnimatedProps(() => ({
    stroke: interpolateColor(Easing.bezier(0.16, 1, 0.3, 1)(progress.value),
    [0, 1],
    [boxOutlineColor, highlightColor],
    'RGB'
  ),
  fill: interpolateColor(
    Easing.bezier(0.16, 1, 0.3, 1)(progress.value),
    [0, 1],
    ['#000000', highlightColor],
    'RGB'
  )
  }),[boxOutlineColor, highlightColor])

  return (
    <Svg
      viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}
    >
      <Path />
      <Path />
    </Svg>
  )
}

export default AnimatedCheckbox
