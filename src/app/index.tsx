import { ImageMap } from "@/assets/ImageMap";
import Glow from "@/globals/components/Gradient/Gradient";
import GradientText from "@/globals/components/GradientText/GradientText";
import { useStyles } from "@/hooks/useStyles";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styleSheet } from "./index.style";

export default function Index() {
  const styles = useStyles(styleSheet);
  const router = useRouter();

  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 2800,
        easing: Easing.bezier(0.65, 0, 0.35, 1),
      }),
      -1,
      false,
    );
    //     rotation.value = withRepeat(
    //   withSequence(
    //     withTiming(180, {
    //       duration: 700,
    //       easing: Easing.out(Easing.cubic),
    //     }),
    //     withTiming(360, {
    //       duration: 700,
    //       easing: Easing.in(Easing.cubic),
    //     }),
    //     withDelay(1200, withTiming(360))
    //   ),
    //   -1,
    //   false
    // );
    // rotation.value = withRepeat(
    //   withTiming(360, {
    //     duration: 2800,
    //     easing: Easing.linear,
    //   }),
    //   -1,
    //   false
    // );
    setTimeout(() => {
      router.push("/(root)/home");
    }, 1000);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    // transform: [{ rotate: `${rotation.value}deg` }],
    // transform: [
    //     { perspective: 1200 },
    //   { rotateX: `${rotation.value}deg` },
    // ],
  }));
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Animated.View
          style={[
            // styles.logoContainer,
            animatedStyle,
          ]}
        >
          <Glow size={280} color="#3B82F6" opacity={0.4}>
            <Image source={ImageMap.assets.mindflip} style={styles.logo} />
          </Glow>
        </Animated.View>
        <GradientText
          colors={["#F8FAFC", "#50A2FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 1]}
          style={styles.header}
        >
          MindFlip
        </GradientText>
        <Text style={styles.title}>TRAIN YOUR MEMORY</Text>
      </View>

      <View style={styles.fooderContainer}>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text style={styles.loadingDots}></Text>
          <Text style={styles.loadingDots}></Text>
          <Text style={styles.loadingDots}></Text>
        </View>

        <Text style={styles.span}>v1.0 Premium Brain Training</Text>
        <Link href="/home" asChild>
          <Text style={{ color: "white", textDecorationLine:'underline' }}>Home</Text>
        </Link>
      </View>
    </View>
  );
}
