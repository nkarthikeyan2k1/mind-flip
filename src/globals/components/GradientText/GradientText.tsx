import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

type Colors = readonly [string, string, ...string[]];
type Start = {
  x: number, y: number
};
type End = {
  x: number, y: number
};

type Props = Omit<LinearGradientProps, "colors" | "start" | "end"> & {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  colors: Colors;
  start: Start;
  end: End;
};

export default function GradientText({
  children,
  style,
  colors,
  start,
  end, 
  ...props
}: Props) {
  return (
    <MaskedView
      maskElement={
        <Text style={style}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        {...props}
      >
        <Text
          style={[
            style,
            {
              opacity: 0,
            },
          ]}
        >
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}