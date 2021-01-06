import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react-native';


it('Should create an item', () => {
  const { getByText , getByPlaceholderText} = render(<App />);

  const addItemButton = getByText('+');
  const textInput =  getByPlaceholderText('Write something');

  const createdItemText = 'first todo';
  
  fireEvent.changeText(textInput, createdItemText);
  fireEvent.press(addItemButton);

  const createdItem = getByText(createdItemText);

  expect(createdItem).not.toBeNull();
})

it('Should create multiple items', () => {
  const { getByText , getByPlaceholderText} = render(<App />);

  const addItemButton = getByText('+');
  const textInput =  getByPlaceholderText('Write something');

  const createdItemText = 'first todo';
  const createdItemText_2 = 'second todo';
  
  fireEvent.changeText(textInput, createdItemText);
  fireEvent.press(addItemButton);
  
  fireEvent.changeText(textInput, createdItemText_2);
  fireEvent.press(addItemButton);

  const firstCreatedItem = getByText(createdItemText);
  const secondCreatedItem = getByText(createdItemText_2);


  expect(firstCreatedItem).not.toBeNull();
  expect(secondCreatedItem).not.toBeNull();
})

it('Should delete an item', () => {
  const { getByText , getByPlaceholderText, queryByText } = render(<App />);

  const addItemButton = getByText('+');
  const textInput =  getByPlaceholderText('Write something');

  const createdItemText = 'first todo';
  
  fireEvent.changeText(textInput, createdItemText);
  fireEvent.press(addItemButton);

  const deleteItemButton = getByText('X');

  fireEvent.press(deleteItemButton);

  const deletedItem = queryByText(createdItemText);

  expect(deletedItem).toBeNull();

})

it('Should display an error when trying to create an item without any text', () => {
  const { getByText } = render(<App />);

  const addItemButton = getByText('+');

  fireEvent.press(addItemButton);

  const errorMessage = getByText('Please insert a valid text');

  expect(errorMessage).not.toBeNull();
})

it('Should remove the error message after creating a valid item', () => {
  const { getByText, getByPlaceholderText, queryByText } = render(<App />);

  const addItemButton = getByText('+');

  fireEvent.press(addItemButton);

  const textInput =  getByPlaceholderText('Write something');

  const createdItemText = 'first todo';
  
  fireEvent.changeText(textInput, createdItemText);
  fireEvent.press(addItemButton);

  const errorMessage = queryByText('Please insert a valid text');
  expect(errorMessage).toBeNull();
})
