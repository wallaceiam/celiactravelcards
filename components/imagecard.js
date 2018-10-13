import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { Card, CardItem, Body, Badge, Thumbnail } from 'native-base';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/sliderentry.style';
import { colors } from '../styles/index.style';
import { strings } from '../utils/language';

export default class ImageCard extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        isDanager: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    render() {
        const { data: { title, img }, isDanager } = this.props;

        const uppercaseTitle = title ? (
            <Text
                style={styles.title} >
                {strings(title).toUpperCase()}
            </Text>
        ) : false;

        const badge = isDanager ? (
            <FeatherIcons name={'x-circle'} size={25} color={colors.tomato} />
        ) : (
            <FeatherIcons name={'check-circle'} size={25} color={colors.lime} />
        );

        return (
            <View style={{ alignItems: 'center' }}>
                <View style={styles.badge}>
                    {badge}
                </View>
                <Thumbnail large source={img} />
                {uppercaseTitle}
            </View>

        );
    }
}