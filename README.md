# smartmirror
![image](https://user-images.githubusercontent.com/44328319/127725906-ec1f6296-204b-40b3-a93c-b94f689e93ef.png)

## Intial Setup
0. Get Raspberry pi
1. Follow installation instructions on [Install for Magic Mirror](https://docs.magicmirror.builders/getting-started/installation.html#manual-installation)
2. ```cd MagicMirror/```
3. ```npm run start```

## Configure so accessible from your network
* ```config.js``` 
* ```"localhost"``` to ```"0.0.0.0"``` this exposes your local network 
* change the ```ipwhitelist``` to ```["127.0.0.1", "<YOURPRIVATERANGE>"]"```
## Add World Clock
* [Cool world clock with flags module](https://github.com/ulrichwisser/worldclock)
## Configure weather
* Create a free account and grab your api key at [Openweathermap](https://home.openweathermap.org/api_keys)
* ```config.js```
* Look your city ```id``` from [weathmap](http://bulk.openweathermap.org/sample/city.list.json.gz)
* Replace ```<apikey>``` with your key and add in ```units: "imperial",```  in ```config.js``` 
Full list of [Weather Fields](https://docs.magicmirror.builders/modules/currentweather.html)

## Calendar Config
* [Custom Calendar](https://docs.magicmirror.builders/modules/calendar.html)

## Sport Team Widget
* [Jeff Clarke great custom  sport widget](https://github.com/jclarke0000/MMM-MyScoreboard)

## Resources
 1. [Magic Mirrors](https://magicmirror.builders/)
 2. [Install for Magic Mirror](https://docs.magicmirror.builders/getting-started/installation.html#manual-installation)
 3. [Tutorial in picture frame](https://www.instructables.com/DIY-Smart-Mirror-1/)
 4. [Configurations](https://docs.magicmirror.builders/getting-started/configuration.html#raspberry-specific)
 5. [Jeff Custom Moduels for Mirror](https://jeffsnerdyprojects.blogspot.com/2017/07/my-custom-modules-for-my-smart-mirror.html)
 6. [Custom Weather](https://github.com/jclarke0000/MMM-MyWeatherf)
 7. [Module Positions](https://docs.magicmirror.builders/modules/configuration.html#example)
 ![image](https://user-images.githubusercontent.com/44328319/127725218-55448298-ae01-4cb5-bbdc-842aa2369286.png)

