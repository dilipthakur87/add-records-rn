import { View, Text } from 'react-native';
import React from 'react';
import UserDetails from '../src/components/UsersDetailCard';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

it('renders UserDetails ', () => {
    const detail = { user_name: 'johndoe', country_name: 'Nepal', phone_number: '999999999', phone_brand: 'iPhone' }
    const wrapper = shallow(
        <UserDetails
            detail={detail}
        />
    );

    expect(wrapper.contains(
        <View style={{ padding: 20 }}>
            <Text>Name: {detail.user_name}</Text>
            <Text>Country: {detail.country_name}</Text>
            <Text>Phone Number: {detail.phone_number}</Text>
            <Text>Phone Brand: {detail.phone_brand}</Text>
        </View>
    )).toBe(true);
})