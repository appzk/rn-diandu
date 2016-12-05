import React from 'react'
import { View, Text, StatusBar, Platform, StyleSheet } from 'react-native'

import { TabBar, NavigationBar } from '../common/components'

import Mine from '../pages/mine'
import Products from '../pages/products'
import Recommend from '../pages/recommend'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'blueTab',
      notifCount: 0,
      presses: 0,
    }
  }

  render() {
    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    };

    const leftButtonConfig = {
      title: 'Back',
      handler: () => alert('hello!'),
    };


    const titleConfig = {
      title: 'Hello, world',
    };

    return (
      <View style={styles.content}>
        <NavigationBar
          title={titleConfig}
          leftButton={leftButtonConfig}
          rightButton={rightButtonConfig} />

        <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="#ccc">
          <TabBar.Item title="推荐"
            icon={require('../img/TabBar_HomeBar.png')}
            selectedIcon={require('../img/TabBar_HomeBar_Sel.png')}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              })
            } }>
            <Recommend />
          </TabBar.Item>

          <TabBar.Item
            icon={require('../img/TabBar_Businesses.png')}
            selectedIcon={require('../img/TabBar_Businesses_Sel.png')}
            title="产品"
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
                notifCount: this.state.notifCount + 1,
              })
            } }>
            <Products />
          </TabBar.Item>

          <TabBar.Item
            icon={require('../img/TabBar_Assets.png')}
            selectedIcon={require('../img/TabBar_Assets_Sel.png')}
            title="我的" selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
                presses: this.state.presses + 1,
              })
            } }>
            <Mine />
          </TabBar.Item>

        </TabBar>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  }
});
