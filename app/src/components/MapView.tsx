/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
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
  return (
    <View style={styles.container}>
      {coords && (
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

          <Mapbox.PointAnnotation
            id="location"
            coordinate={[coords.lng, coords.lat]}
          />
        </Mapbox.MapView>
      )}
    </View>
  );
};

export default MapView;
