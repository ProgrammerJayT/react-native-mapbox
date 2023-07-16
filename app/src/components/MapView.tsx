/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Mapbox from '@rnmapbox/maps';
import styles from '../globals/styles';
import {mapboxAccessToken} from '../constants/mapboxAcessToken';

Mapbox.setAccessToken(mapboxAccessToken);

const MapView = ({
  coords,
  animation,
  animationDuration,
  zoomLevel,
  zoomEnabled,
}) => {
  if (!coords) {
    return null;
  }

  // Define the URL of the online icon
  const onlineIconUrl =
    'https://cdn-icons-png.flaticon.com/128/11031/11031000.png';

  const alertCoords = () => {
    Alert.alert('Longitude: ' + coords.lng + '\nLatitude: ' + coords.lat);
  };

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        pitchEnabled={true}
        rotateEnabled={false}
        zoomEnabled={zoomEnabled ?? true}>
        <Mapbox.Camera
          animationMode={animation ?? 'easeTo'}
          animationDuration={animationDuration ?? 500}
          zoomLevel={zoomLevel ?? 17}
          centerCoordinate={[coords.lng, coords.lat]}
        />

        <Mapbox.ShapeSource
          id="location"
          shape={{type: 'Point', coordinates: [coords.lng, coords.lat]}}
          onPress={alertCoords}>
          <Mapbox.SymbolLayer
            id="locationSymbol"
            style={{
              iconImage: onlineIconUrl,
              iconSize: 0.4,
              iconAllowOverlap: true,
            }}
          />
        </Mapbox.ShapeSource>
      </Mapbox.MapView>
    </View>
  );
};

export default MapView;
