import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
            <SafeAreaView
                style = {{
                    flex: 1
                }}
            >
                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate('Generate')}
                    style = {{
                        backgroundColor: 'white',
                        borderColor: 'lightgray',
                        borderBottomWidth: 1,
                        padding: 20
                    }}
                >
                    <Text
                        style = {{
                            fontSize: 18
                        }}
                    >
                        Generate QR Code
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate('ScanList')}
                    style = {{
                        backgroundColor: 'white',
                        borderColor: 'lightgray',
                        borderBottomWidth: 1,
                        padding: 20
                    }}
                >
                    <Text
                        style = {{
                            fontSize: 18
                        }}
                    >
                        Scan QR Code
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}