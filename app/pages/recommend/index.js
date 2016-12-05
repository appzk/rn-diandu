import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Flex from 'antd-mobile/lib/flex'
import Banner from './banner'

export default class Recommend extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Banner />
                <View style={styles.main}>
                    <Flex style={styles.items}>
                        <Flex.Item>
                            <Text style={{ textAlign: 'center' }}>
                                demo
                            </Text>
                        </Flex.Item>
                        <Flex.Item>
                            <Text style={{ textAlign: 'center' }}>
                                demo
                            </Text>
                        </Flex.Item>
                        <Flex.Item>
                            <Text style={{ textAlign: 'center' }}>
                                demo
                            </Text>
                        </Flex.Item>
                    </Flex>
                    <Flex style={styles.products}>
                        <Text>
                            产品列表
                      </Text>
                    </Flex>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        height: 200
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    items: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    products: {
        flex: 1,
        backgroundColor: '#9DD6EB',
    }
})
