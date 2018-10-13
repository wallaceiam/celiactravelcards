import React from 'react';
import { Platform, View, Text, Button, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { Header, Title, Body, Container, Content } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sliderWidth, itemWidth } from '../styles/sliderentry.style';
import SliderEntry from '../components/sliderentry';
import MainCard from '../components/main.card';
import WhatICanEat from '../components/whaticaneat.card';
import WhatICantEat from '../components/whaticanteat.card';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1 } from '../static/entries';
import { scrollInterpolators, animatedStyles } from '../utils/animations';
import { strings, setLocale, getCurrentLocale } from '../utils/language';

import * as Actions from '../redux/actions'; //Import your actions

const FIRST_ACTIVE_SLIDE = 0;

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'GF Travel',
    };

    constructor(props) {
        super(props);
        this.state = {
            activeSlide: FIRST_ACTIVE_SLIDE,
            locale: props ? props.locale : 'en'
        };
    }

    /*shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        const { params } = this.props.navigation.state;
        const locale = params ? params.locale : 'en';
        if (locale !== undefined && locale !== getCurrentLocale()) {
            setLocale(locale);
            return true;
        }

        return false;
    }*/

    carousel = this.renderCarousel();

    render() {
        // const { params } = this.props; // navigation.state;
        // const locale = params ? params.locale : 'en';
        const { activeSlide, locale } = this.state;

        // if (locale !== undefined && locale !== getCurrentLocale()) {
        //     setLocale(locale);
        // }
        // const header = this.renderHeader();
        const carousel = this.renderCarousel();

        if (Platform.OS !== 'android') {
            return (
                <Container style={styles.safeArea}>
                    <Content>
                        <View style={styles.exampleContainer}>
                            {carousel}

                            <Pagination
                                dotsLength={ENTRIES1.length}
                                activeDotIndex={activeSlide}
                                containerStyle={styles.paginationContainer}
                                // dotColor={'rgba(0, 0, 0, 0.92)'}
                                dotColor={colors.tomato}
                                dotStyle={styles.paginationDot}
                                inactiveDotColor={colors.black}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                                carouselRef={this.sliderRef}
                                tappableDots={!!this.sliderRef}
                            />
                        </View>
                    </Content>
                </Container>
            );
        } else {
            return (
                <Container style={styles.safeArea}>
                    <Content>
                        <View style={styles.exampleContainer}>
                            {carousel}
                        </View>
                    </Content>
                </Container>
            );
        }
    }

    renderItemWithParallax({ item, index }, parallaxProps) {
        if (index % 3 == 1) {
            return (
                <MainCard data={item} even={(index + 1) % 2 === 0} parallax={true} parallaxProps={parallaxProps} />
            );
        } else if (index % 3 === 2) {
            return (
                <WhatICantEat data={item} even={(index + 1) % 2 === 0} parallax={true} parallaxProps={parallaxProps} />
            );
        }
        return (
            <WhatICanEat data={item} even={(index + 1) % 2 === 0} parallax={true} parallaxProps={parallaxProps} />
        );
    }

    updateItem(index) {
        if (Platform.OS !== 'android') {
            this.setState({ activeSlide: index });
            // this.props.navigation.setParams({ title: ENTRIES1[index].title });
        }

    }

    renderCarousel() {
        console.log('render carousel');
        return (

            <Carousel
                ref={c => this.sliderRef = c}
                data={ENTRIES1}
                renderItem={this.renderItemWithParallax}
                sliderWidth={sliderWidth}
                slideStyle={{ flex: 1 }}
                itemWidth={itemWidth}
                hasParallaxImages={false}
                firstItem={FIRST_ACTIVE_SLIDE}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.4}
                inactiveSlideShift={20}
                enableMomentum={true}
                // containerCustomStyle={styles.slider}
                // contentContainerCustomStyle={styles.sliderContentContainer}
                loop={true}
                loopClonesPerSide={10}
                // autoplay={false}
                // autoplayDelay={500}
                // autoplayInterval={3000}
                onBeforeSnapToItem={(index) => this.updateItem(index)}
            />);
    }

    renderHeader() {
        if ((this.state.activeSlide - 2) % 3 === 0) {
            return (
                <Title style={[styles.title, styles.titleLight]}>{strings(ENTRIES1[this.state.activeSlide].title)}</Title>
            );
        }
        return (
            <Title style={[styles.title, styles.titleDark]}>{strings(ENTRIES1[this.state.activeSlide].title)}</Title>
        );
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        locale: state.localeReducer.locale
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
