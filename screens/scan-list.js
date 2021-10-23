import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native'

export default class ScanList extends React.Component {
    state = {
        list: []
    }

    async componentDidMount() {
        const list = JSON.parse(await AsyncStorage.getItem('LATEST_SCANNED') || '[]')

        this.setState({list: list})
    }

    render() {
        return (
            <SafeAreaView
                style = {{
                    flex: 1
                }}
            >
                <Text
                    style = {{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginTop: 20,
                        marginHorizontal: 20
                    }}
                >
                    Latest Scanned QR Code
                </Text>

                <ScrollView
                    contentContainerStyle = {{
                        flexGrow: 1,
                        paddingTop: 20,
                        paddingHorizontal: 20,
                        paddingBottom: 100
                    }}
                    style = {{
                        flex: 1
                    }}
                >
                    {
                        this.state.list.map(item => {
                            return (
                                <Text
                                    style = {{
                                        fontSize: 18
                                    }}
                                >
                                    {item}
                                </Text>
                            )
                        })
                    }
                </ScrollView>

                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate('Scan')}
                    style = {{
                        alignItems: 'center',
                        backgroundColor: 'deepskyblue',
                        justifyContent: 'center',
                        height: 60,
                        width: 60,
                        borderRadius: 30,
                        position: 'absolute',
                        bottom: 20,
                        right: 20
                    }}
                >
                    <Text
                        style = {{
                            color: 'white',
                            fontSize: 32
                        }}
                    >
                        +
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}