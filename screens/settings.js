import React from 'react';
import { Platform, View, Alert } from 'react-native';
import { Share } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Title, Icon, Left, Right, Body } from 'native-base';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Mailer from 'react-native-mail';
import styles, { colors } from '../styles/index.style';

export class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'More'
    };

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text></Text>
                        </ListItem>
                        <ListItem icon onPress={() => this._showThankYou()}>
                            <Left>
                                <FeatherIcons name="heart" color={colors.tomato} />
                            </Left>
                            <Body>
                                <Text>Thank You!</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="chevron-right" />
                            </Right>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text></Text>
                        </ListItem>
                        <ListItem icon onPress={() => this._shareApp()}>
                            <Body>
                                <Text>Share</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="share-2" color={colors.black} />
                            </Right>
                        </ListItem>


                        <ListItem itemDivider>
                            <Text></Text>
                        </ListItem>
                        <ListItem icon onPress={() => this._provideFeedback()}>
                            <Body>
                                <Text>Feedback</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="mail" color={colors.black} />
                            </Right>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text></Text>
                        </ListItem>
                        <ListItem icon onPress={() => this._showCredits()}>
                            <Body>
                                <Text>Credits</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="chevron-right" />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Body>
                                <Text>Version</Text>
                            </Body>
                            <Right>
                                <Text>1.0.0</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }

    _showThankYou() {
        this.props.navigation.navigate('ThankYou');
    }

    _showCredits() {
        this.props.navigation.navigate('Credits');
    }

    _shareApp() {
        if (Platform.OS === 'ios') {
            Share.share({
                message: 'BAM: we\'re helping your business with awesome React Native apps',
                url: 'https://itunes.apple.com/us/app/gf-travel/id1412513294?ls=1&mt=8',
                title: 'Wow, did you see that?'
            }, {
                    // Android only:
                    dialogTitle: 'Share GF Travel',
                    // iOS only:
                    excludedActivityTypes: [

                    ]
                });
        } else {
            Share.share({
                message: 'BAM: we\'re helping your business with awesome React Native apps',
                url: 'https://itunes.apple.com/us/app/gf-travel/id1412513294?ls=1&mt=8',
                title: 'Wow, did you see that?'
            }, {
                    // Android only:
                    dialogTitle: 'Share GF Travel',
                    // iOS only:
                    excludedActivityTypes: [

                    ]
                });
        }
    }

    _provideFeedback() {
        Mailer.mail({
            subject: 'GF Travel Feedback',
            recipients: ['support@example.com'],
            body: '',
            isHTML: true,
        }, (error, event) => {
            if (event === 'sent') {
                Alert.alert('Thanks for the feedback!');
            } /*else {
                Alert.alert(
                    error,
                    event,
                    [
                        { text: 'Ok', onPress: () => console.log('OK: Email Error Response') },
                        { text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response') }
                    ],
                    { cancelable: true }
                )
            }*/
        });
    }

}
