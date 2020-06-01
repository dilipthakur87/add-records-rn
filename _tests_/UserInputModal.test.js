import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UserInputModal from '../src/components/UserInputModal'

// simple snapshot test 
it('UserInputModal renders correctly', () => {
    const tree = renderer.create(
        <UserInputModal />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});