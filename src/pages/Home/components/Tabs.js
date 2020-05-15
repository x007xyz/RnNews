import React, {useState, useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const tabs = [
  {
    id: 'tab01',
    name: '最新',
    newsid: 0,
  },
  {
    id: 'tab02',
    name: '大公司',
    newsid: 23,
  },
  {
    id: 'tab03',
    name: '内容',
    newsid: 223,
  },
  {
    id: 'tab04',
    name: '消费',
    newsid: 221,
  },
  {
    id: 'tab05',
    name: '娱乐',
    newsid: 225,
  },
  {
    id: 'tab06',
    name: '区块链',
    newsid: 208,
  },
];

const styles = StyleSheet.create({
  container: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  item: {
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  selected: {
    borderBottomColor: 'rgb(47, 133, 252)',
    borderBottomWidth: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

function Tabs(props) {
  const {selectedNewsId} = props;
  const {onChange} = props;
  const [layout, setLayout] = useState({});
  const scrollRef = useRef();
  const onLayout = (event, tab) => {
    const {x, y} = event.nativeEvent.layout;
    setLayout({...layout, [tab.newsid]: {x, y}});
  };
  const onClick = (newsid) => {
    onChange(newsid);
    scrollRef.current.scrollTo({x: layout[newsid].x, y: 0, animated: true});
  };
  return (
    <ScrollView
      ref={scrollRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {tabs.map((tab) => {
        return (
          <TouchableWithoutFeedback
            key={tab.id}
            onPress={() => onClick(tab.newsid)}>
            <View
              onLayout={(e) => onLayout(e, tab)}
              style={[
                styles.item,
                tab.newsid === selectedNewsId && styles.selected,
              ]}>
              <Text style={styles.itemText}>{tab.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </ScrollView>
  );
}

export default Tabs;
