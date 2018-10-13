import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/sliderentry.style';
import { strings, isRTL } from '../utils/language';

export default class MainCard extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image() {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
                source={{ uri: illustration }}
                containerStyle={styles.imageContaine}
                style={styles.image}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
                <Image
                    source={{ uri: illustration }}
                    style={styles.image}
                />
            );
    }

    render() {
        return (
            <View style={styles.slideInnerContainer}>
                <View style={styles.shadow} />
                <View style={{ flex: 1 }}>
                    <View>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text style={[styles.text, isRTL() ? styles.rtlText : null]}>{strings('LINE1')}</Text> 
                                    <Text style={[styles.text, isRTL() ? styles.rtlText : null]}>{strings('LINE2')}</Text>
                                    <Text style={[styles.text, isRTL() ? styles.rtlText : null]}>{strings('LINE3')}</Text>
                                    <Text style={[styles.text, isRTL() ? styles.rtlText : null]}>{strings('LINE4')}</Text>
                                    <Text style={[styles.text, isRTL() ? styles.rtlText : null]}>{strings('LINE5')}</Text>
                                    <Text style={[styles.text, isRTL() ? styles.rtlText : null]}>{strings('THANKYOU')}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </View >
            </View>
        );
    }
}