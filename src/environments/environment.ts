// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    ssl: false,
    projectId: 'movie-personal-catalog',
    appId: '1:971809600333:web:61e2c381f7bb1c8a287d04',
    storageBucket: 'movie-personal-catalog.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyBdk8-CY2u8aCyj9qGzdi44Ck8i5DJ6X7Q',
    authDomain: 'movie-personal-catalog.firebaseapp.com',
    messagingSenderId: '971809600333',
    measurementId: 'G-LKG61B8QKB',
  },
  production: false,
  emulators: {
    auth: 'http://127.0.0.1:9099'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
