import React from 'react';
import { View, Text, FlatList, SectionList, ScrollView, TouchableOpacity, H1 } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { Container, Header, Content, List, ListItem, Left, Right, Body, Title, Input, Icon, Item, Button } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles, { colors } from '../styles/index.style';
import { availableLanguages } from '../static/i18n.consts';
import { setLocale } from '../utils/language';

import * as Actions from '../redux/actions'; //Import your actions

export class LanguageScreen extends React.Component {
    static navigationOptions = {
        title: 'Change language',
    };

    constructor(props) {
        super(props);

        const all = availableLanguages.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        });

        this.state = {
            data: all,
            recent: [],
            text: '',
            selectedLanguage: 'en'
        };
    }

    setCurrentLanaguageAndNavigate(item) {
        const { text } = this.state;

        this.props.updateLocale(item.code);
        setLocale(item.code);
        this.setState({ selectedLanguage: item.code });
        this.doFilter(text);
        this.props.navigation.navigate('Home', { locale: item.code });
    }

    renderHeader() {
        const clearBtn = this.state.text !== '' ?
            (<Button transparent onPress={() => this.doFilter('')}>
                <FeatherIcons button name={'x'} size={20} color={colors.tomato} />
            </Button>) :
            null;
        return (
            <Header searchBar rounded androidStatusBarColor={colors.header} style={styles.header}>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" onChangeText={(val => this.doFilter(val))} value={this.state.text} />
                </Item>
                {clearBtn}
            </Header>
        );
    }

    doFilter(val) {
        const { recentLocales } = this.props;

        console.log(recentLocales);

        const newData = availableLanguages.filter((item) => {
            const itemData = item.name.toUpperCase()
            const textData = val.toUpperCase()
            return itemData.indexOf(textData) > -1
        }).sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        const newRecentData = recentLocales && recentLocales.length > 0 ? 
        availableLanguages.filter(function (item) {
            return recentLocales.includes(item.code)
        }).filter((item) => {
            const itemData = item.name.toUpperCase()
            const textData = val.toUpperCase()
            return itemData.indexOf(textData) > -1
        }).sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        }) : [];
        this.setState({
            data: JSON.parse(JSON.stringify(newData)),
            recent: JSON.parse(JSON.stringify(newRecentData)),
            text: val
        });
    }

    renderRow(item) {
        const selected = item.code === this.state.selectedLanguage ?
            (<Right><FeatherIcons name="check" color={colors.tomato} /></Right>) :
            (<Right />);

        const text = item.code === this.state.selectedLanguage ?
            (<Text style={{ color: colors.tomato }}>{item.name}</Text>) :
            (<Text>{item.name}</Text>);

        return (<ListItem button onPress={() => this.setCurrentLanaguageAndNavigate(item)} >
            <Body>
                {text}
            </Body>
            {selected}
        </ListItem>);
    }

    render() {
        const { text, data, recent } = this.state;

        let list;

        if (recent && recent.length > 0) {
            list = <SectionList
                renderItem={({ item, index, section }) => this.renderRow(item)}
                renderSectionHeader={({ section: { title } }) => (
                    <ListItem>
                        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                    </ListItem>

                )}
                sections={[
                    { title: 'Recent', data: recent },
                    { title: 'All', data: data }
                ]}
                keyExtractor={(item, index) => item.code}
            />;
        } else {
            list = <FlatList data={this.state.data}
                renderItem={({ item }) => this.renderRow(item)}
                keyExtractor={(item, index) => item.code}
            />
        }

        return (
            <Container>
                {/* <Header androidStatusBarColor={colors.header} style={styles.header}>
                    <Body>
                        <Title style={styles.headerText}>Switch Language</Title>
                    </Body>
                </Header> */}
                {this.renderHeader()}
                <Content style={{ flex: 1 }}>
                    {list}
                    {/* <SectionList
                        renderItem={({ item }) => this.renderRow(item)}
                        renderSectionHeader={({ section }) => <H1 title={section.key} />}
                        keyExtractor={(item, index) => item.code}
                        sections={[ // homogeneous rendering between sections
                            { data: recent ? recent : [], key: 'Recent' },
                            { data: data, key: 'All' }
                        ]}
                    />
                     */}
                </Content>
            </Container>
        );
    }
}


// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        locale: state.localeReducer.locale,
        recentLocales: state.localeReducer.recentLocales
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(LanguageScreen);
