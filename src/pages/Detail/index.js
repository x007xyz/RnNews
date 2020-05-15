import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {useHistory} from 'react-router-native';
import MyStatusBar from '../../components/MyStatusBar';

const styles = StyleSheet.create({
  header: {
    height: 44,
    backgroundColor: 'rgb(47, 133, 252)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerMain: {
    paddingHorizontal: 80,
  },
  headerMainText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  backBtn: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 44,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
function Detail(props) {
  const history = useHistory();
  const onBack = () => {
    history.goBack();
  };
  return (
    <View>
      <MyStatusBar barStyle="light-content" backgroundColor="#2f85fc" />
      <View style={styles.header}>
        <TouchableHighlight style={styles.backBtn} onPress={onBack}>
          <Text>返回</Text>
        </TouchableHighlight>
        <View style={styles.headerMain}>
          <Text style={styles.headerMainText}>详情</Text>
        </View>
      </View>
      <Text>Detail</Text>
    </View>
  );
}

export default Detail;
