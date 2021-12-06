import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

describe('test pages', () => {
  it('testing home page', () => {
    render(<App />);
    const Home = screen.getByText('Home');
    fireEvent.click(Home);
    expect(screen.getByText('Welcome to our page')).toMatchSnapshot();
  });
  it('test calculator page', () => {
    render(<App />);
    const Calculator = screen.getByText('Calculator');
    fireEvent.click(Calculator);
    expect(screen.getByText('Let\'s do some math!')).toMatchSnapshot();
  });
  it('test qoute page', () => {
    render(<App />);
    const Qoute = screen.getByText('Quote');
    fireEvent.click(Qoute);
    expect(screen.getByText('"Mathematics is language that God used to write the world" : Galileo Galilei')).toMatchSnapshot();
  });
});
