import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SpinnerView from '../components/SpinnerView.js';
import {getAsteroidDetails} from '../api/SharedApi.js';

const AsteroidDetails = (props) => {
  const {route} = props;
  const asteroidId = route.params.asteroid;

  const [showSpinner, setShowSpinner] = useState(true);
  const [asteroidInfo, setAsteroidInfo] = useState(undefined);

  useEffect(() => {
    getAsteroidDetailsCall();
  }, []);

  const getAsteroidDetailsCall = async () => {
    const results = await getAsteroidDetails(asteroidId);
    setShowSpinner(false);
    setAsteroidInfo(results);
  };

  return (
    <View style={styles.conatiner}>
      {showSpinner ? <SpinnerView /> : null}
      {asteroidInfo ? (
        <View>
          <View style={styles.row}>
            <Text style={styles.heading}>Name: </Text>
            <Text style={styles.value}>{asteroidInfo.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Nasa JPL URL: </Text>
            <Text style={styles.value}>{asteroidInfo.nasa_jpl_url}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>
              Is Potentially Hazardous Asteroid:{' '}
            </Text>
            <Text style={styles.value}>
              {asteroidInfo.is_potentially_hazardous_asteroid.toString()}
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
});

export default AsteroidDetails;
