import { useStyles } from '@/hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'
import { styleSheet } from './index.style'
import { Clock4, Zap } from 'lucide-react-native'
import { useRef, useState, useEffect } from 'react'

const Timer = () => {
    const styles = useStyles(styleSheet)
    const [moves, setMoves] = useState(0)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const [timerState, setTimerState] = useState({
        seconds: 0,
        minutes: 0,
    })

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimerState(prev => ({...prev, seconds: prev.seconds + 1}))
        }, 1000)
        return () => {
            if(timerRef.current) {
                clearInterval(timerRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if(timerState.seconds === 60) {
            setTimerState(prev => ({...prev, seconds: 0, minutes: prev.minutes + 1}))
        }
    }, [timerState.seconds])

    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time
    }
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Clock4 color="#3B82F6" size={18} strokeWidth={2} />
        <Text style={styles.timerText}>{formatTime(timerState.minutes)}:{formatTime(timerState.seconds)}</Text>
      </View>
      <View style={styles.moves}>
        <Zap color="#F59E0B" size={18} strokeWidth={2} />
        <Text style={styles.movesText}><Text style={{color:'gray'}}>Moves:</Text> {moves}</Text>
      </View>
    </View>
  )
}

export default Timer