import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  title: String;
  subtitle: String;
};

export function ListHeader({ title, subtitle}: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            { title }
        </Text>
        <Text style={styles.subtitle}>
            {subtitle}
        </Text>


    </View>
  );
}
