import { Text, View, Image, Pressable, Alert, ImageRequireSource } from 'react-native';
import { styleSheet } from './index.style';
import { useStyles } from '@/hooks/useStyles';

interface CardProps {
    title: string;
    description: string;
    badgeText: string;
    image: ImageRequireSource;
    is_disabled: boolean;
    right_icon?: React.ReactNode;
}

const Card = ({ title, description, badgeText, image,is_disabled, right_icon }: CardProps) => {
    const styles = useStyles(styleSheet);
    return (
        <Pressable disabled={is_disabled} style={[styles.card, { opacity: is_disabled ? 0.5 : 1 }]} onPress={()=>Alert.alert('hai')}>
            {/* Left */}
            <View style={styles.iconContainer}>
                <Image
                source={image}
                style={styles.logo}
                />
            </View>

            {/* Middle */}
            <View style={styles.content}>
                <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>

                {badgeText != '' &&<View style={styles.badge}>
                    <Text style={styles.badgeText}>{badgeText}</Text>
                </View>}
                </View>

                <Text style={styles.description}>
                {description}
                </Text>
            </View>

            {/* Right */}
            <View style={styles.right}>
                {right_icon}
            </View>
        </Pressable>
    );
}

export default Card;