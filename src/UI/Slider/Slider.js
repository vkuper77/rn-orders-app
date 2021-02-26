import React, { useRef, useState, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { THEME } from '../theme'

const Progress = ({ step, steps, height }) => {
  const [width, setWidth] = useState(0)
  const animatedValue = useRef(new Animated.Value(-1000)).current
  const reactive = useRef(new Animated.Value(-1000)).current

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [])

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps)
  }, [step, width])

  return (
    <View
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width
        setWidth(newWidth)
      }}
      style={{
        height,
        borderRadius: height,
        overflow: 'hidden',
        backgroundColor: '#E9E9E9',
      }}
    >
      <Animated.View
        style={{
          height,
          width: 344.34,
          borderRadius: height,
          backgroundColor: THEME.colorBlue,
          position: 'absolute',
          left: 0,
          top: 0,
          transform: [
            {
              translateX: animatedValue,
            },
          ],
        }}
      >
        <View
          style={{
            width: 5.78,
            height: 5.54,
            backgroundColor: '#fff',
            borderRadius: 10,
            right: 0,
            position: 'absolute',
          }}
        />
      </Animated.View>
    </View>
  )
}

const Slider = () => {
  // const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((index + 1) % (10 + 1), 100)

  //     return () => {
  //       clearInterval(interval)
  //     }
  //   })
  // }, [index])

  return (
    <View>
      <Progress step={2} steps={10} height={5.54} />
    </View>
  )
}

export default Slider
