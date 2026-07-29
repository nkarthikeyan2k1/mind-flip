import Header from "@/components/GamesComponents/NumberMemory/Header";
import { useStyles } from "@/hooks/useStyles";
import { View, Text } from 'react-native'
import { styleSheet } from "./index.style";
import Timer from "@/components/GamesComponents/NumberMemory/Timer";
import Button from "@/globals/components/Button";
import { RotateCcw } from "lucide-react-native";

const NumberMemory = () => {
    const styles = useStyles(styleSheet)
  return (
    <View style={styles.container}>
        <View style={{flex:0.1}}><Timer/></View>
      <View style={{flex: 1}}></View>
      <View>
        <Button 
          title="Restart Level" 
          onPress={() => {}} 
          iconLeft={<RotateCcw color="white" size={18} />} 
        />
      </View>
    </View>
  )
}

export default NumberMemory