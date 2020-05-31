import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Storage from './service/StorageService'
import Icon from 'react-native-vector-icons/Feather';
import UserInputModal from './components/UserInputModal';
import UsersDetailCard from './components/UsersDetailCard';

const App = () => {

  const [userDetails, setUserDetails] = useState([]);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function getUserData() {
      try {
        let data = await Storage.get("TEST3")
        if( data !== undefined || data !== null) {
          setUserDetails(data)
        }
        console.log("data retrived | user details = ", userDetails)
  
      } catch(err) {
        console.log("Error retriving data from local storage = ",err)
      }
    };
    
    getUserData();
    
  }, [])

  const addUserDetails = () => {
    // adding user details to the list
  }

  

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>Users Detail</Text>
      <View>
        <TouchableOpacity  onPress={() => setShowModal(true)}>
          <Icon name="plus" size={30} color="blue" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      </View>

      { userDetails !== null ? <ScrollView style={{ width: '100%' }}>
        {userDetails.map(item => (
          <UsersDetailCard 
            detail={item}
            key={item.key}
          />
        ))}
      </ScrollView> 
      :
      <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center'}}> 
        <Text style={{ fontSize: 20 , padding: 10, textAlign: 'center'}}>No user record found. {"\n"} Please press {'\"+\"'} sign to add new record.</Text>
      </View>
      }
    </View>

    <UserInputModal isVisible={showModal} onClose={(value) => setShowModal(value)} addData={(value) => {
      console.log("value to add = ", value);
      // console.log("initial value = ", ...userDetails);
      if(userDetails === null || userDetails === []) {
        setUserDetails([value]);
      } else{
        setUserDetails([value, ...userDetails]);
      }
    }} />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  header: {
    marginTop: '15%',
    fontSize: 20,
    color:'red',
    paddingBottom: 10
  }
});

export default App;
