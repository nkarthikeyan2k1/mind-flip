import { View, Image, Alert, FlatList, Pressable } from "react-native";
import { CustomText } from "@/globals/components/CustomText";
import styleSheet from "./index.style";
import { useStyles } from "@/hooks/useStyles";
import Button from "@/globals/components/Button";
import Card from "@/components/HomeComponents/GameDetails/Card";
import { ImageMap } from '@/assets/ImageMap';
import { Brain, ChevronRight, Lock } from 'lucide-react-native';
import { useState, ReactNode } from "react";
import { useRouter, Href } from "expo-router";

interface CardItem {
    id: number;
    title: string;
    description: string;
    badgeText: string;
    image: any;
    is_disabled: boolean;
    right_icon: ReactNode;
    route?: any;
}

const cardsData: CardItem[] = [
    {
        id: 1,
        title: "Number Memory",
        description: "Recall sequences of numbers. Grow your digit span.",
        badgeText: "AVAILABLE",
        image: ImageMap.assets.numberGame,
        is_disabled: false,
        right_icon: <ChevronRight color="#3B82F6" size={18} />,
        route: '/(root)/games/number-memory'
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
    const [selectedGame, setSelectedGame] = useState<number | null>(1);
    const route = useRouter();
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Image source={ImageMap.assets.mindflip} style={styles.logo} />
            <CustomText style={styles.header}>Challenge Your Brain</CustomText>
            <CustomText style={styles.title}>Improve memory, increase focus, beat</CustomText>
            <CustomText style={styles.title}>your best score.</CustomText>
        </View>
        <View style={styles.bodyContainer}>
            <CustomText style={{...styles.title, marginBottom: 10}}>GAMES</CustomText>
            <FlatList
                data={cardsData}
                renderItem={({ item }) => (
                    <Pressable
                        disabled={item.is_disabled}
                        onPress={() => setSelectedGame(item.id)}>
                    <Card
                        title={item.title}
                        description={item.description}
                        badgeText={item.badgeText}
                        image={item.image}
                        is_disabled={item.is_disabled}
                        right_icon={item.right_icon}
                        is_active={selectedGame === item.id}                        
                    />
                    </Pressable>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
        <View style={styles.fooderContainer}>
            <Button 
                    title="Start Playing" 
                    iconLeft={
                        <Brain color="white" size={19} />
                    }
                    iconRight={
                        <ChevronRight color="white" size={19} />
                    }
                    onPress={() => {
                        const selectedCard = cardsData.find((card) => card.id === selectedGame);
                        if (selectedCard?.route) {
                            route.push(selectedCard.route);
                        }
                    }}
                    styles={styles.button}
                />
        </View>
    </View>
  );
};

export default Home;
