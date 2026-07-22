import { View, Text, Image, Alert, FlatList } from "react-native";
import styleSheet from "./index.style";
import { useStyles } from "@/hooks/useStyles";
import Button from "@/globals/components/Button";
import Card from "@/components/HomeComponents/GameDetails/Card";
import { ImageMap } from '@/assets/ImageMap';
import { ChevronRight, Lock } from 'lucide-react-native';

const cardsData = [
    {
        id: 1,
        title: "Number Memory",
        description: "Recall sequences of numbers. Grow your digit span.",
        badgeText: "AVAILABLE",
        image: ImageMap.assets.numberGame,
        is_disabled: false,
        right_icon: <ChevronRight color="#3B82F6" size={18} />
    },
    {
        id: 2,
        title: "DotConnect",
        description: "Connect matching dots before time runs out.",
        badgeText: "COMING SOON",
        image: ImageMap.assets.dotGame,
        is_disabled: true,
        right_icon: <Lock color="#3B82F6" size={18} />,
    },
    {
        id: 3,
        title: "Speed Recall",
        description: "Match patterns at increasing speeds.",
        badgeText: "COMINF SOON",
        image: ImageMap.assets.speedGame,
        is_disabled: true,
        right_icon: <Lock color="#3B82F6" size={18} />,
    },
    {
        id: 4,
        title: "Visual Grid",
        description: "Memorize and recreate complex visual patterns.",
        badgeText: "COMINF SOON",
        image: ImageMap.assets.starsGame,
        is_disabled: true,
        right_icon: <Lock color="#3B82F6" size={18} />,
    },
];

const Home = () => {
    const styles = useStyles(styleSheet);
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Image source={ImageMap.assets.mindflip} style={styles.logo} />
            <Text style={styles.header}>Challenge Your Brain</Text>
            <Text style={styles.title}>Improve memory, increase focus, beat</Text>
            <Text style={styles.title}>your best score.</Text>
        </View>
        <View style={styles.bodyContainer}>
            <FlatList
                data={cardsData}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        description={item.description}
                        badgeText={item.badgeText}
                        image={item.image}
                        is_disabled={item.is_disabled}
                        right_icon={item.right_icon}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
        <View style={styles.fooderContainer}>
            <Button 
                    title="Start Playing" 
                    onPress={() => {}} 
                    styles={styles.button}
                />
        </View>
    </View>
  );
};

export default Home;
