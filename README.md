# Bus-Map-Challenge
> This is a coding challenge for ThousandEyes. I used [react-webpack-generators](https://github.com/react-webpack-generators/react-webpack-template) as a base.


## What is it?
This is a React project that uses the [NextBus](http://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf) api to map bus routes in San Francisco. Or it will. Redux is used to manage state.

## Using it
The template uses webpack as build tool to serve files and run tests. The following commands are available:

```bash
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Run the unit tests continuously (repeat the test when code changes are saved)
npm run test:watch

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

You can also use your globally installed version of webpack like this:

```bash
# Build or run the dev version:
webpack
webpack --env=dev

webpack-dev-server
webpack-dev-server --env=dev

# Build or run the dist version
webpack --env=dist
webpack-dev-server --env=dist
```

## License
Bus-Map-Challenge is available under MIT-License and can therefore be used in any project free of charge.

