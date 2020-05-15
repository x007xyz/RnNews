import React from 'react';
import {View, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const MyStatusBar = ({backgroundColor, ...props}) => {
  const height = getStatusBarHeight();
  return (
    <View style={[{height}, {backgroundColor}]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default MyStatusBar;
