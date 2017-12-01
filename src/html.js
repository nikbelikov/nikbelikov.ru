import React from 'react';
import logoImage from './images/favicon.png';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="Frontend developer"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta property="og:url" content="http://nikbelikov.ru/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="nikbelikov.ru"/>
          <meta property="og:image" content={logoImage}/>
          <meta property="og:description" content="Frontend developer"/>
          <meta property="og:site_name" content="nikbelikov.ru"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
          <meta name="apple-mobile-web-app-title" content="nikbelikov.ru" />
          {this.props.headComponents}
          <link href="https://fonts.googleapis.com/css?family=Changa" rel="stylesheet"/>
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
};
