
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import Quote from '../components/Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
