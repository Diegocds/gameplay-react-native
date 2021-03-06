import React from "react";
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from "react-native-gesture-handler";

import { ImageBackground, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import BannerImg from '../../assets/banner.png'

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentDetails() {
    
    return (
        <Background>
           <Header 
            title={"Detalhes"}
            action={
                <BorderlessButton>
                    <Fontisto 
                        name="share"
                        size={24}
                        color={theme.colors.primary}
                    />
                </BorderlessButton>
            }
           />
           <ImageBackground 
           source={BannerImg}
           style={styles.banner}
           >    
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challender sem perder uma partida da m10
                    </Text>

                </View>
           </ImageBackground>
        </Background>
    );
}