# smartmirror
## Intial Setup
0. Get Raspberry pi
1. Follow installation instructions on [Install for Magic Mirror](https://docs.magicmirror.builders/getting-started/installation.html#manual-installation)
2. ```cd MagicMirror/```
3. ```npm run start```

## Configure so accessible from your network
* ```config.js``` 
* change the ```ipwhitelist``` to ```["127.0.0.1", "<YOURPRIVATERANGE>"]"
## Configure weather
* ```config.js```
* Look your city ```id``` from [weathmap](http://bulk.openweathermap.org/sample/city.list.json.gz)

## Resources
 1. [Magic Mirrors](https://magicmirror.builders/)
 2. [Install for Magic Mirror](https://docs.magicmirror.builders/getting-started/installation.html#manual-installation)
 3. [Tutorial in picture frame](https://www.instructables.com/DIY-Smart-Mirror-1/)
 4. [Configurations](https://docs.magicmirror.builders/getting-started/configuration.html#raspberry-specific)
