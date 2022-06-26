import 'react-native';
import React from 'react';
import App from '../App';
import {
  render,
  fireEvent,
} from '@testing-library/react-native';

describe('첫 화면 렌더링 확인', () => {
  test('HeaderTop이 정상적으로 렌더링 되는가?', () => {
    const screen = render(<App />);
    expect(screen.getByTestId('header_top')).toBeDefined();
  });
});
