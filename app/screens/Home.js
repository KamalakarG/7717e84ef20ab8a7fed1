import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton.js';
import SpinnerView from '../components/SpinnerView.js';
import {getRandomAsteroids} from '../api/SharedApi.js';

const Home = (props) => {
  const {navigation} = props;

  const [asteroidId, setAsteroidId] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  const onChangeAsteroidId = (text) => {
    setAsteroidId(text);
  };

  const submitTapped = () => {
    moveToAsteroidDetails(asteroidId);
  };

  const randomAsteroidTapped = async () => {
    setShowSpinner(true);
    const results = await getRandomAsteroids();
    let objects = results.near_earth_objects;
    let firstAsteroid = objects[0];
    setShowSpinner(false);
    moveToAsteroidDetails(firstAsteroid.id);
  };

  const moveToAsteroidDetails = (asteroid) => {
    navigation.navigate('Asteroid Details', {
      asteroid: asteroid,
    });
  };

  return (
    <View style={styles.container}>
      {showSpinner ? <SpinnerView /> : null}
      <TextInput
        style={styles.input}
        placeholder="Enter Asteroid ID"
        value={asteroidId}
        onChangeText={(text) => onChangeAsteroidId(text)}
      />
      <CustomButton
        isDisable={!asteroidId}
        title="Submit"
        onSubmit={submitTapped}
      />
      <CustomButton
        isDisable={false}
        title="Random Asteroid"
        onSubmit={randomAsteroidTapped}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ececec',
    paddingHorizontal: 8,
  },
});

export default Home;
