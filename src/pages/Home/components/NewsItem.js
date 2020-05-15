import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Link} from 'react-router-native';

function NewsItem(props) {
  const {news} = props;
  return (
    <View style={styles.container}>
      <Link to="/detail">
        <View style={styles.main}>
          <Image style={styles.image} source={{uri: news.cover}} />
          <View style={styles.titleWrapper}>
            <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
              {news.title}
            </Text>
          </View>
        </View>
      </Link>
      <View style={styles.info}>
        <Text style={styles.infoItem}>{news.author_name}</Text>
        <Text style={styles.infoItem}>发布于</Text>
        <Text style={styles.infoItem}>{news.published_at}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'relative',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 112,
    height: 73,
    marginRight: 10,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    color: '#555',
    fontSize: 15,
    lineHeight: 20,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  infoItem: {
    fontSize: 12,
    color: '#999',
    marginRight: 10,
  },
});

export default NewsItem;
