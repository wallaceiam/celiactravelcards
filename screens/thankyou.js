import React from 'react';
import { View, ScrollView, Alert, Text } from 'react-native';
import { Share } from 'react-native';
import { Card, CardItem, Body, H1 } from 'native-base';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Mailer from 'react-native-mail';
import { colors } from '../styles/index.style';
import styles from '../styles/sliderentry.style';

export class ThankYouScreen extends React.Component {
    static navigationOptions = {
        title: 'Thank You!'
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 18 }}>
                <ScrollView>

                    <Body>
                        <FeatherIcons name="heart" color={colors.tomato} size={25} />
                        <View style={styles.innerContainer}>
                            <Text style={styles.text}>First, I want to say that I really appreicate you downloading GF Travel and your continued use of the produce.</Text>
                            <Text style={styles.text}>My wife was diagnosed with Coeliac disease 2 years ago and we both love to travel. I watched her struggle to explain her disease when ordering in restuarants abroad and what she could and could not eat.
                    I thought there had to be a better away.</Text>
                            <Text style={styles.text}>So I created GF Travel with help break down the language barrier. On our honeymoon to Thailand, Signapore, and Indonesia, she used an early prototype and was able to eat local street food and order in restuarants with greater confidence and ease. Not once did she have any symotoms.</Text>
                            <Text style={styles.text}>I really want to thank you for your continued help shaping GF Travel.</Text>
                            <Text style={styles.text}>Sincerely,</Text>
                            <Text style={styles.text}>Chris W.</Text>
                            <Text style={styles.text}>Creator of GF Travel and husband</Text>
                        </View>
                    </Body>

                </ScrollView>

            </View>
        );
    }

}
