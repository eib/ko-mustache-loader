Webpack Loader converting Mustache templates into Knockout syntax


Install from NPM:
```
> npm install --save[-dev] knockout-mustache-loader
```

In your webpack.config.js:
```
module.exports = {
	...
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html!knockout-mustache' },
			...
        ],
    },
	...
};
```
