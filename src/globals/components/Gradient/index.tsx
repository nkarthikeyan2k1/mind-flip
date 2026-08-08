import React from "react";
import { View, ViewProps } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

type GradientProps = ViewProps & {
  size?: number;
  color?: string;
  opacity?: number;
  children: React.ReactNode;
};

export default function Gradient({
  size = 260,
  color,
  opacity = 0.3,
  children,
  style,
  ...props
}: GradientProps) {
  return (
    <View
      style={[
        {
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
      {...props}
    >
      <Svg
        width={size}
        height={size}
        style={{
          position: "absolute",
          zIndex: -1,
        }}
      >
        <Defs>
          <RadialGradient id="glow">
            <Stop offset="0%" stopColor={color} stopOpacity={opacity} />
            <Stop offset="40%" stopColor={color} stopOpacity={opacity * 0.4} />
            <Stop offset="70%" stopColor={color} stopOpacity={opacity * 0.15} />
            <Stop offset="100%" stopColor={color} stopOpacity={0} />
          </RadialGradient>
        </Defs>

        <Rect width={size} height={size} fill="url(#glow)" />
      </Svg>

      {children}
    </View>
  );
}