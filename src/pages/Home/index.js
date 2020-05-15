import React, {useState, useEffect, useRef} from 'react';

import {StyleSheet, FlatList, View, Text, StatusBar} from 'react-native';

import http from '../../utils/http';
import MyStatusBar from '../../components/MyStatusBar';
import Tabs from './components/Tabs';
import NewsItem from './components/NewsItem';

const getList = (columnId = 0, minId = 0) => {
  const params = {
    columnId,
    minId,
    pageSize: 10,
    column: 'id,post_id,title,author_name,cover,published_at,comments_count',
  };
  return http.get('/news', {params});
};

function Home() {
  const [list, setList] = useState([]);
  const [selectedNewsId, setSelectedNewsId] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const ref = useRef();
  useEffect(() => {
    getList(selectedNewsId).then((data) => {
      setList(data);
      ref.current.scrollToIndex({index: 0, animated: false});
    });
  }, [selectedNewsId]);
  const onRefresh = () => {
    setRefreshing(true);
    getList(selectedNewsId).then((data) => {
      setList(data);
      setRefreshing(false);
    });
  };
  const onEndReached = () => {
    if (list.length < 1) {
      return;
    }
    getList(selectedNewsId, list[list.length - 1].id).then((data) => {
      setList(list.concat(data));
      setRefreshing(false);
    });
  };
  return (
    <View style={styles.container}>
      <MyStatusBar barStyle="light-content" backgroundColor="#2f85fc" />
      <View style={styles.header}>
        <Text style={styles.title}>新闻资讯</Text>
      </View>
      <Tabs selectedNewsId={selectedNewsId} onChange={setSelectedNewsId} />
      <FlatList
        ref={ref}
        data={list}
        onRefresh={onRefresh}
        onEndReachedThreshold={0.2}
        onEndReached={onEndReached}
        refreshing={refreshing}
        renderItem={({item}) => <NewsItem news={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  header: {
    height: 44,
    backgroundColor: 'rgb(47, 133, 252)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)',
  },
});

export default Home;
