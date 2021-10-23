import React from 'react'
import { SafeAreaView, TextInput, View } from 'react-native'

import QRCode from 'react-native-qrcode-svg'

export default class Generate extends React.Component {
    state = {
        QRCodeText: ''
    }

    render() {
        return (
            <SafeAreaView
                style = {{
                    flex: 1
                }}
            >
                <View
                    style = {{
                        flex: 1,
                        padding: 20
                    }}
                >
                    <TextInput
                        onChangeText = {newValue => this.setState({QRCodeText: newValue})}
                        placeholder = 'Input your text...'
                        style = {{
                            backgroundColor: 'white',
                            borderColor: 'lightgray',
                            borderRadius: 10,
                            padding: 10,
                            borderWidth: 1
                        }}
                    />

                    <View
                        style = {{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1
                        }}
                    >
                        <QRCode
                            value = {this.state.QRCodeText || ' '}
                            size = {300}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}