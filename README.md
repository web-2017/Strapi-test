# Strapi application

A quick description of your strapi application

## Create (generate) plugin api

`npm run strapi generate:plugin plugin-name`

or

`yarn strapi generate:plugin plugin-name`

- create folder = models, for example test.json

- yarn strapi build

### Plugin Folders and Files Architecture

```
plugin/
└─── admin/ # Contains the plugin's front-end
| └─── src/ # Source code directory
| └─── index.js # Entry point of the plugin
| └─── pluginId.js # Name of the plugin
| |
| └─── components/ # Contains the list of React components used by the plugin
| └─── containers/
| | └─── App/ # Container used by every others containers
| | └─── Initializer/ # This container is required, it is used to executed logic right after the plugin is mounted.
| └─── translations/ # Contains the translations to make the plugin internationalized
| └─── en.json
| └─── index.js # File that exports all the plugin's translations.
| └─── fr.json
└─── config/ # Contains the configurations of the plugin
| └─── functions/
| | └─── bootstrap.js # Asynchronous bootstrap function that runs before the app gets started
| └─── policies/ # Folder containing the plugin's policies
| └─── queries/ # Folder containing the plugin's models queries
| └─── routes.json # Contains the plugin's API routes
└─── controllers/ # Contains the plugin's API controllers
└─── middlewares/ # Contains the plugin's middlewares
└─── models/ # Contains the plugin's API models
└─── services/ # Contains the plugin's API services
```
