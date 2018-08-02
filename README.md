```npm install -g create-react-app
yarn install
yarn start
yarn add mobx mobx-react  react-app-rewire-mobx react-app-rewired
```


#### 'Flip' the existing calls to `react-scripts` in `npm` scripts
```diff
  /* package.json */

  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom"
}
```

#### add config-overrides.js file
```js
const rewireMobX = require('react-app-rewire-mobx');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  return config;
}
```

#### add  tsconfig.json file
````js
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
}
```

yarn start 


additional info:

https://github.com/timarney/react-app-rewired/tree/master/packages/react-app-rewire-mobx

https://ihatetomatoes.net/how-to-remove-experimentaldecorators-warning-in-vscode/ 


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

