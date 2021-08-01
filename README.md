# smartmirror
![image](https://user-images.githubusercontent.com/44328319/127748662-7a729feb-3b98-46c2-8fbd-2382da42af04.png)

## Intial Setup
0. Get Raspberry pi
1. Follow installation instructions on [Install for Magic Mirror](https://docs.magicmirror.builders/getting-started/installation.html#manual-installation)
2. ```cd MagicMirror/```
3. ```npm run start```

## Configure so accessible from your network
* ```config.js``` 
* ```"localhost"``` to ```"0.0.0.0"``` this exposes your local network 
* change the ```ipwhitelist``` to ```["127.0.0.1", "<YOURPRIVATERANGE>"]```
* Open up firewall for that port to your local network ```sudo ufw allow from <YOURIPRANGE> to any port 8080 proto tcp```
* Test it by going to web browser and ```<rasberrypiipaddress:8080>```
## Add World Clock
![image](https://user-images.githubusercontent.com/44328319/127729498-5b82c433-6245-4cdc-9e3b-d66055125830.png)
* [Cool world clock with flags module](https://github.com/ulrichwisser/worldclock)
## Configure weather
![image](https://user-images.githubusercontent.com/44328319/127729431-0bfa79a6-5bb0-417b-845e-9e5e0bde9915.png)
* Create a free account and grab your api key at [Openweathermap](https://home.openweathermap.org/api_keys)
* ```config.js```
* Look your city ```id``` from [weathmap](http://bulk.openweathermap.org/sample/city.list.json.gz)
* Replace ```<apikey>``` with your key and add in ```units: "imperial",```  in ```config.js``` 
Full list of [Weather Fields](https://docs.magicmirror.builders/modules/currentweather.html)

## Calendar Config
* [Custom Calendar](https://docs.magicmirror.builders/modules/calendar.html)
* [Gcal to ical](https://hada-tech.com/index.php/2020/09/03/google-calendar-events-display-using-magicmirror-in-raspberry-pi/)

## Sport Team Widget
![image](https://user-images.githubusercontent.com/44328319/127729459-108fa8f1-1e1c-46e4-9daf-72f149569a59.png)

* [Jeff Clarke great custom  sport widget](https://github.com/jclarke0000/MMM-MyScoreboard)

## Commute Time Widget
![image](https://user-images.githubusercontent.com/44328319/127729470-705f1f1d-4f34-4626-9fe9-7dec4b9c0cc2.png)
* [Directions from Jeff Github](https://github.com/jclarke0000/MMM-MyCommute)
* Tips for the Google API: create billing account, link billing account to project, ENABLE and restrict following APIs:
![image](https://user-images.githubusercontent.com/44328319/127744719-dd83cd81-bf9b-4d53-8a06-de512cc74bf9.png)

## Custom Background
* navigate to ```cd MagicMirror/css/main.css``` and add to the body ```background-image: url("name.jpeg");```
## Resources
 1. [Magic Mirrors](https://magicmirror.builders/)
 2. [Install for Magic Mirror](https://docs.magicmirror.builders/getting-started/installation.html#manual-installation)
 3. [Tutorial in picture frame](https://www.instructables.com/DIY-Smart-Mirror-1/)
 4. [Configurations](https://docs.magicmirror.builders/getting-started/configuration.html#raspberry-specific)
 5. [Jeff Custom Moduels for Mirror](https://jeffsnerdyprojects.blogspot.com/2017/07/my-custom-modules-for-my-smart-mirror.html)
 6. [Custom Weather](https://github.com/jclarke0000/MMM-MyWeatherf)
 7. [Module Positions](https://docs.magicmirror.builders/modules/configuration.html#example)
 ![image](https://user-images.githubusercontent.com/44328319/127725218-55448298-ae01-4cb5-bbdc-842aa2369286.png)

