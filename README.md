<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  EasyRead - Docs
</h1>

## Deployment 
### Simply run the deploy command and build to gh-pages:
`yarn deploy`
### Further configuration in .env.production and path-prefixing in gatsby-config.js


## Local - Testing
### In order for mobile devices to make use of userMedia, the web-app has to be hosted on SSL. Use the following to generate a SSL cert and host a local SSL preview:

### 1. Build the static SPA with gatsby:
`yarn build`
### 2. Generate the SSL cert inside the /public dir:
`openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`
### 3. Host on http-server:
#### Installation of http-server:
`npm install -g http-server`
#### Hosting with 1-command inside /public:
`http-server -S -C cert.pem -o`

## Localstorage Usage
captures: [
  {
    date,
    recognitionResult,
    cachedText,
    renderImage 
    originalDimensions: {
      width,
      height
    }
  }
]
