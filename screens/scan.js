import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { SafeAreaView } from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner'

export default class Scan extends React.Component {
    render() {
        return (
            <SafeAreaView
                style = {{
                    flex: 1
                }}
            >
                <QRCodeScanner
                    onRead = {this.onSuccess}
                />
            </SafeAreaView>
        )
    }

    onSuccess = async(event) => {
        const latestScanned = JSON.parse(await AsyncStorage.getItem('LATEST_SCANNED') || '[]')

        latestScanned.push(event.data)

        await AsyncStorage.setItem('LATEST_SCANNED', JSON.stringify(latestScanned))
        
        this.props.navigation.goBack()
    }
}