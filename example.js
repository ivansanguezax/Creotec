let values = {
    "dependencies": {
      "bootstrap-icons": "^1.7.2",
      "firebase": "^9.6.10"
    },
    "devDependencies": {
      "webpack": "^5.70.0",
      "webpack-cli": "^4.9.2"
    },
    "name": "assets",
    "version": "1.0.0",
    "main": "webpack.config.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "person":{
      "name": "Rodrigo",
      "characteristics": {
        "skin color": "never seen the sun",
        "eyes": {
          "size": "big",
          "color": "brown"
        }
      }
    }
};

console.log(values.person.characteristics.eyes.color);
  