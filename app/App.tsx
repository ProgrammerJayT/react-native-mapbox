import {SafeAreaView, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './src/globals/styles';
import MapView from './src/components/MapView';
import LocationListener from './src/utilities/LocationListener';

const App = () => {
  const [location, setLocation] = useState(null);

  const handleCoords = (latitude, longitude) => {
    setLocation({lat: latitude, lng: longitude});
  };

  return (
    <SafeAreaView style={styles.container}>
      <LocationListener onCoordsReceived={handleCoords} />

      {location && (
        <MapView
          coords={location}
          animation={'easeto'}
          animationDuration={1000}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
