import React from "react";
import { View, ViewProps } from "react-native";
import Svg, {
  Defs,
  RadialGradient,
  Rect,
  Stop,
} from "react-native-svg";

type GradientProps = ViewProps & {
  size?: number;
  color?: string;
  opacity?: number;
  children: React.ReactNode;
};

export default function Gradient({
  size = 100,
  color = "#3B82F6",
  opacity = 0.3,
  children,
  style,
  ...props
}: GradientProps) {
  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        },
        style,
      ]}
      {...props}
    >
      {/* Glow layer */}
      <Svg
        width={size}
        height={size}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: [
            { translateX: -size / 2 },
            { translateY: -size / 2 },
          ],
        }}
        pointerEvents="none"
      >
        <Defs>
          <RadialGradient id="glow" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={color} stopOpacity={opacity}/>
            <Stop offset="40%" stopColor={color} stopOpacity={opacity * 0.4}/>
            <Stop offset="70%" stopColor={color} stopOpacity={opacity * 0.15}/>
            <Stop offset="100%" stopColor={color} stopOpacity={0}/>
          </RadialGradient>
        </Defs>

        <Rect
          width={size}
          height={size}
          fill="url(#glow)"
        />
      </Svg>

      {/* Actual content */}
      {children}
    </View>
  );
}