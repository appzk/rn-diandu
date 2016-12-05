import Platform from 'Platform'

module.exports = {
  //区分IOS和Android
  TabBar: getTabBar('antd-mobile/lib/tab-bar'),

  // antd-mobile
  Flex: require('antd-mobile/lib/flex'),
  Button: require('antd-mobile/lib/button'),
  WhiteSpace: require('antd-mobile/lib/white-space'),
  View: require('antd-mobile/lib/view'),
  Card: require('antd-mobile/lib/card'),
  Carousel: require('antd-mobile/lib/carousel'),
  Checkbox: require('antd-mobile/lib/checkbox'),
  DatePicker: require('antd-mobile/lib/date-picker'),
  Grid: require('antd-mobile/lib/grid'),
  Icon: require('antd-mobile/lib/icon'),
  Tabs: require('antd-mobile/lib/tabs'),

  //other components
  NavigationBar: require('react-native-navbar')
}


function getTabBar() {
  if (Platform.OS === 'android') {
    return require('antd-mobile/lib/tab-bar/index.android.js')
  } else {
    return require('antd-mobile/lib/tab-bar/index.ios.js')
  }
}
