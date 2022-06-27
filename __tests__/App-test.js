import 'react-native';
import React from 'react';
import App from '../App';
import HeaderTop from '../pages/HeaderTop';
import Main from '../pages/Main';
import Container from '../pages/Container';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import {Link} from 'react-router-native';

describe('첫 화면 렌더링 확인', () => {
  test('Menutab이 정상적으로 렌더링 되는가?', async () => {
    const {getByText} = render(<Main />);

    const home = getByText('홈');
    const search = getByText('게임검색');
    const favorite = getByText('관심게임');
    const rank = getByText('거래순위');

    expect(home).toBeDefined();
    expect(search).toBeDefined();
    expect(favorite).toBeDefined();
    expect(rank).toBeDefined();
  });
  test('Container가 정상적으로 렌더링 되는가?', async () => {
    const {getByText} = render(<Main />);

    expect(getByText('리니지W')).toBeDefined();
  });
});
