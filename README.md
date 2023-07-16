# React Native Mapbox Setup

This guide provides instructions on how to set up Mapbox in a React Native project. Mapbox is a powerful mapping platform that allows you to integrate interactive maps into your mobile applications.

## Prerequisites

Before you begin, make sure you have the following:

- React Native development environment set up
- Mapbox account (Sign up at [https://www.mapbox.com/](https://www.mapbox.com/))
- Mapbox access token (You can obtain an access token from the Mapbox account dashboard)

## Installation

1. Create a new React Native project (skip this step if you already have a project).
-npx react-native@latest init appName


## Configuration

1. Obtain a Mapbox access token from your Mapbox account dashboard.

2. In your React Native project, navigate to the file where you want to use Mapbox (e.g., App.js).

3. Import the necessary components and the Mapbox access token:

```javascript
import Mapbox from '@rnmapbox/maps';
import { mapboxAccessToken } from './path/to/mapboxAccessToken';

Resources
Mapbox Documentation (https://docs.mapbox.com/)

Mapbox React Native SDK - (https://github.com/react-native-mapbox/maps)
