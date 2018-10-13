import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Header, Title, Right } from 'native-base';
import PropTypes from 'prop-types';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/sliderentry.style';
import globalStyles, { colors } from '../styles/index.style';
import { ENTRIES1 } from '../static/entries';
import ImageCard from '../components/imagecard';
import { WHATICANEAT } from '../static/entries';
import { strings } from '../utils/language';

export default class WhatICanEatCard extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };


    render() {
        const parallaxProps = this.props.parallaxProps;

        return (
            <View style={styles.slideInnerContainer}>
                <View style={styles.shadow} />
                <Card>
                    <CardItem header>
                        <Title style={[globalStyles.title, globalStyles.titleLight]}>
                            {strings(ENTRIES1[2].title)}
                        </Title>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <View style={styles.cardContainer}>
                                        <ImageCard data={WHATICANEAT[0]} isDanager={false} parallax={true} parallaxProps={parallaxProps} />
                                    </View>
                                    <View style={styles.cardContainer}>
                                        <ImageCard data={WHATICANEAT[1]} isDanager={false} parallax={true} parallaxProps={parallaxProps} />
                                    </View>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <View style={styles.cardContainer}>
                                        <ImageCard data={WHATICANEAT[2]} isDanager={false} parallax={true} parallaxProps={parallaxProps} />
                                    </View>
                                    <View style={styles.cardContainer}>
                                        <ImageCard data={WHATICANEAT[3]} isDanager={false} parallax={true} parallaxProps={parallaxProps} />
                                    </View>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <View style={styles.cardContainer}>
                                        <ImageCard data={WHATICANEAT[4]} isDanager={false} parallax={true} parallaxProps={parallaxProps} />
                                    </View>
                                    <View style={styles.cardContainer}>
                                        <ImageCard data={WHATICANEAT[5]} isDanager={false} parallax={true} parallaxProps={parallaxProps} />
                                    </View>
                                </View>
                            </View >
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}