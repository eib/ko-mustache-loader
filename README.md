Webpack Loader converting Mustache templates into Knockout syntax


Install via NPM:
```
> npm install --save[-dev] ko-mustache-loader
```

In your webpack.config.js:
```
module.exports = {
	...
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html!ko-mustache' },
			...
        ],
    },
	...
};
```

MIT license
