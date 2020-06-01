import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UserInputModal from '../components/UserInputModal'

it('renders correctly', () => {
    const tree = renderer.create(
        <UserInputModal />
    ).toJSON();   
    expect(tree).toMatchSnapshot();
});
// describe('truth', () => {
//     it('is ture', () => {
//         expect(true).toEqual(true);
//     });
// })