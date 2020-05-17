import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import HTMLView from 'react-native-render-html';

import http from '../../utils/http';
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: '100%',
  },
});
function Detail(props) {
  const [detail, setDetail] = useState({});
  const {params} = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    http.get(`/news/36kr/${params.id}`).then((data) => setDetail(data));
  }, [params]);
  useEffect(() => {
    navigation.setOptions({title: detail.title});
  }, [navigation, detail]);
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#2f85fc" />
      <ScrollView style={styles.main}>
        <HTMLView
          html={detail.content}
          tagsStyles={{img: {maxWidth: Dimensions.get('window').width}}}
        />
      </ScrollView>
    </View>
  );
}

export default Detail;
