## Worked Demo for using Webpack Module Federation


### Run

```shell
cd app1
yarn && yarn start

cd ..
cd app2
yarn && yarn start

```

App1 webpack config
```js
 new ModuleFederationPlugin({
        name: "app1",
        filename: "app1RemoteEntry.js",
        exposes: {
          "./AppTitle": "./src/AppTitle",
        }
      }),
```


App2 webpack config
```js
new ModuleFederationPlugin({
        name: "selfApp2",
        filename: "app2remoteEntry.js",
        exposes: {
          "./App2": "./src/App",
        },
        remotes: {
          app1: "app1@http://localhost:3006/app1RemoteEntry.js",
        }
      }),
```

### Stupid Noted, many demo ignore this

- Need to set **output publicPath: "http://localhost:3006/"** in App1 if you want to make remote


- Quite not understand why need do this Stupid action??? We already set in ModuleFederationPlugin remotes like: app1: "app1@http://localhost:3006/app1RemoteEntry.js",