import React from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import {Link} from 'react-router-native';
import GameList from '../assets/data/game_data.json';
import {
  AddItem,
  ChangeDown,
  ChangeUp,
  ChangeNone,
  SearchIcon,
  ChartIcon,
} from './IconBox';
import ErrorBoundary from 'react-native-error-boundary';

const errorHandler = (error, stackTrace) => {};

function Container() {
  const gameList = GameList;

  return (
    <ErrorBoundary onError={errorHandler}>
      <View style={styles.containers}>
        <HomeList list={gameList} />
      </View>
    </ErrorBoundary>
  );
}

function HomeList({list}) {
  const list_value = list.slice(0, 12).map((item, i) => {
    return (
      <Link key={i} style={styles.home_item} to={`/games/${item.name}`}>
        <Text style={styles.fwb}>{item.name}</Text>
      </Link>
    );
  });
  return (
    <View testId="homeList" style={styles.cont}>
      <IconWrap text="대표 게임" />
      <View style={styles.list}>{list_value}</View>
    </View>
  );
}

function SearchList({list}) {
  const find = '';

  const filteredList = list.filter(item => {
    return item.name.toLowerCase().includes(find.toLowerCase());
  });

  const list_value = filteredList.map((item, i) => {
    return (
      <Link key={i} style={styles.search_item} to={`/games/${item.name}`}>
        <Text style={styles.fwb}>{item.name}</Text>
      </Link>
    );
  });

  return (
    <View testId="searchList" style={styles.cont}>
      <View style={styles.search_wrap}>
        <Text style={styles.search_icon}>SIcon</Text>
        <TextInput
          style={styles.search_bar}
          placeholder="게임명을 입력해 주세요."
        />
      </View>
      <ScrollView style={styles.search_list}>{list_value}</ScrollView>
    </View>
  );
}

function FavoriteList() {
  /*
  editItem, setEditItem : 편집하기 용
  toggleBtn, setToggleBtn : (+)버튼 토글 용
    - on 일 때 보여주고, off일 때 가리기
  */
  let list = [];

  const list_value = list.map((item, i) => {
    return (
      <Link
        key={i}
        style={styles.favorite_item}
        to={`/games/${item[0]}/servers/${item[1]}`}>
        <Text style={styles.fwb}>{item[0] + '>' + item[1]}</Text>
      </Link>
    );
  });

  return (
    <View testId="favoriteList" style={styles.cont}>
      <IconWrap text="관심게임" />
      <ScrollView style={styles.favorite_list}>{list_value}</ScrollView>
      <View style={styles.favorite_config}>
        <View></View>
        <View></View>
      </View>
    </View>
  );
}

function RankList({list}) {
  const sort_list = [].concat(list).sort((a, b) => (a.rank > b.rank ? 1 : -1));

  const list_value = sort_list.map((item, i) => {
    const {rank, name, rank_before} = item;
    let change = Number(rank_before) - Number(rank);
    let sign;
    if (change > 0) {
      sign = <ChangeUp />;
    } else if (change < 0) {
      sign = <ChangeDown />;
    } else {
      sign = <ChangeNone />;
    }

    return (
      <View key={i} style={styles.rank_item}>
        <View style={styles.rItem_rank}>
          <Text style={styles.rItem_text}>{rank}</Text>
        </View>
        <View style={styles.rItem_name}>
          <Text style={styles.rItem_text}>{name}</Text>
        </View>
        <View style={styles.rItem_change}>
          <View style={styles.rItem_sign}>{sign}</View>
          <Text style={styles.rItem_text}>{change}</Text>
        </View>
      </View>
    );
  });

  return (
    <View testId="rankList" style={styles.cont}>
      <IconWrap text="2022년 06월 27일 순위" />
      <View style={styles.subtitle}>
        <Text style={styles.rList_rank}>순위</Text>
        <Text style={styles.rList_name}>게임명</Text>
        <Text style={styles.rList_change}>등락</Text>
      </View>
      <ScrollView style={styles.rank_list}>{list_value}</ScrollView>
    </View>
  );
}

export default Container;

function IconWrap({text}) {
  return (
    <View style={styles.icon_wrap}>
      <Text style={styles.fwb}>
        <ChartIcon style={styles.chart_icon} />
        {'  ' + text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    width: '100%',
    height: '100%',
  },
  cont: {},
  list: {
    width: '95%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    justifyContent: 'space-between',
  },
  /* 홈 */
  home_item: {
    width: '49%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor: '#C6DCE4',
    borderColor: '#9CB4CC',
    borderRadius: 8,
  },
  /* 게임 검색 */
  search_wrap: {
    width: '95%',
    height: '5%',
    // alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  search_icon: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search_bar: {
    width: '90%',
    height: '100%',
    padding: 10,
  },
  search_list: {
    width: '95%',
    height: '72%',
    flexDirection: 'column',
    borderBottomWidth: 2,
    borderBottomColor: '#aaa',
    margin: 10,
  },
  search_item: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    borderBottomWidth: 0.7,
    borderColor: '#ccc',
    paddingLeft: 10,
  },
  /* 관심게임 */
  favorite_list: {
    width: '100%',
    height: '70%',
  },
  favorite_item: {
    width: '100%',
    height: '4%',
  },
  favorite_config: {
    width: '13%',
    height: '8%',
    position: 'absolute',
    bottom: 14,
    right: 40,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    elevation: 3,
  },
  favorite_icon: {
    fontSize: 48,
    fontWeight: '100',
    lineHeight: 55,
    color: '#fff',
  },
  /* 거래순위 */
  subtitle: {
    width: '100%',
    height: 45,
    backgroundColor: '#ccc',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rList_rank: {
    flex: 1,
    textAlign: 'center',
  },
  rList_name: {
    flex: 2,
    textAlign: 'center',
  },
  rList_change: {
    flex: 1,
    textAlign: 'center',
  },
  rank_list: {
    width: '100%',
    height: '65%',
    marginTop: 20,
  },
  rank_item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rItem_rank: {
    flex: 1,
    height: 30,
  },
  rItem_name: {
    flex: 2,
    height: 30,
  },
  rItem_change: {
    flex: 1,
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rItem_sign: {
    position: 'absolute',
    top: 9,
    left: 20,
  },
  rItem_text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon_wrap: {
    marginLeft: 10,
  },
  fwb: {
    fontWeight: 'bold',
  },
  jcc: {
    justifyContent: 'center',
  },
  tac: {
    textAlign: 'center',
  },
});
