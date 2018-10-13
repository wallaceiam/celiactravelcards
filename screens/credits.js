import React from 'react';
import { View, Alert, Linking } from 'react-native';
import { Share } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Mailer from 'react-native-mail';
import { colors } from '../styles/index.style';

export class CreditsScreen extends React.Component {
    static navigationOptions = {
        title: 'Credits',
    };

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>Original Concept</Text>
                        </ListItem>
                        <ListItem icon onPress={() => this._openUrl('http://www.celiactravel.com')}>
                            <Body>
                                <Text>Celiac Travel</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="chevron-right" />
                            </Right>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text>Libraries</Text>
                        </ListItem>
                        <ListItem icon onPress={() => this._openUrl('https://facebook.github.io/react-native/')}>
                            <Body>
                                <Text>React Native</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="chevron-right" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => this._openUrl('https://reactnavigation.org')}>
                            <Body>
                                <Text>React Navigation</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="chevron-right" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => this._openUrl('https://github.com/archriss/react-native-snap-carousel')}>
                            <Body>
                                <Text>react-native-snap-carousel</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="chevron-right" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => this._openUrl('https://github.com/chirag04/react-native-mail')}>
                            <Body>
                                <Text>react-native-mail</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="chevron-right" />
                            </Right>
                        </ListItem>


                        <ListItem itemDivider>
                            <Text>Assets</Text>
                        </ListItem>
                        <ListItem icon onPress={() => this._openUrl('http://feathericons.com')}>
                            <Body>
                                <Text>Feather Icons</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="chevron-right" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => this._openUrl('https://www.istockphoto.com/')}>
                            <Body>
                                <Text>iStock</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="chevron-right" />
                            </Right>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text>Translations</Text>
                        </ListItem>
                        <ListItem icon onPress={() => this._openUrl('https://translate.google.co.uk')}>
                            <Body>
                                <Text>Google</Text>
                            </Body>
                            <Right>
                                <FeatherIcons name="chevron-right" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }

    _openUrl(url) {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert(`Dont't know how to open URI: ${url}`);
            }
        });
    }

}
