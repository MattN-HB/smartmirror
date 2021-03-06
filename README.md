# smartmirror
![image](https://user-images.githubusercontent.com/44328319/127748662-7a729feb-3b98-46c2-8fbd-2382da42af04.png)

## Initial Setup
0. Get Raspberry pi
1. Follow installation instructions on [Install for Magic Mirror](https://docs.magicmirror.builders/getting-started/installation.html#manual-installation)
2. ```cd MagicMirror/```
3. To Start the mirror ```npm run start```

## Configure so accessible from your network
* Locate file ```nano config.js``` 
* Change ```"localhost"``` to ```"0.0.0.0"``` this exposes your local network 
* Change the ```ipwhitelist``` to ```["127.0.0.1", "<YOURPRIVATERANGE>"]```
* Open up firewall on rasppi for that port to your local network ```sudo ufw allow from <YOURIPRANGE> to any port 8080 proto tcp```
* Test it by going to web browser from different device and http://<yourrasberrypiipaddress>:8080
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
* [Gcal to ical to mirror](https://hada-tech.com/index.php/2020/09/03/google-calendar-events-display-using-magicmirror-in-raspberry-pi/)

## Sport Team Widget
![image](https://user-images.githubusercontent.com/44328319/127729459-108fa8f1-1e1c-46e4-9daf-72f149569a59.png)

* [Jeff Clarke great custom  sport widget](https://github.com/jclarke0000/MMM-MyScoreboard)

## Commute Time Widget
![image](https://user-images.githubusercontent.com/44328319/127729470-705f1f1d-4f34-4626-9fe9-7dec4b9c0cc2.png)
* [Directions from Jeff Github](https://github.com/jclarke0000/MMM-MyCommute)
* Tips for the Google API: create billing account, link billing account to project, ENABLE and restrict following APIs:
![image](https://user-images.githubusercontent.com/44328319/127744719-dd83cd81-bf9b-4d53-8a06-de512cc74bf9.png)

## Wifi QR Code
* [Directions for QR code from TeraTech](https://github.com/TeraTech/MMM-WiFiPassword)
 ![image](https://user-images.githubusercontent.com/44328319/132155849-ccd23526-3a6b-4d19-8f00-ce048c18aa03.png)

## Custom Background
* navigate to ```cd MagicMirror/css/main.css``` and add to the body ```background-image: url("name.jpeg");```

## Steps putting on mirror
 1. [Tutorial in picture frame](https://www.instructables.com/DIY-Smart-Mirror-1/)
 2. <YourraspIP>:8080 in Chromium Browser on raspberrypi and cast to Chromecast. This allows you to have multiple mirrors or displays

## Resources
 1. [Magic Mirrors](https://magicmirror.builders/)
 2. [Install for Magic Mirror](https://docs.magicmirror.builders/getting-started/installation.html#manual-installation)
 3. [Tutorial in picture frame](https://www.instructables.com/DIY-Smart-Mirror-1/)
 4. [Configurations](https://docs.magicmirror.builders/getting-started/configuration.html#raspberry-specific)
 5. [Jeff Custom Moduels for Mirror](https://jeffsnerdyprojects.blogspot.com/2017/07/my-custom-modules-for-my-smart-mirror.html)
 6. [Custom Weather](https://github.com/jclarke0000/MMM-MyWeatherf)
 7. [Module Positions](https://docs.magicmirror.builders/modules/configuration.html#example)
 ![image](https://user-images.githubusercontent.com/44328319/127725218-55448298-ae01-4cb5-bbdc-842aa2369286.png)
 8. [Cast alternative: raspicast](https://www.hackster.io/sbcomponentsuk/diy-chromecast-alternative-using-raspberry-pi-c71c57)
 9. TRICK: F11 toggles the full screen on the pi
 10. Setup SSH to your by raspiconfig enable via interface. ```sudo ufw allow from <YOURLOCALIPRANGE>/24 to any port 22 proto tcp``` to open up firewall to your local network
 11. How to VNC from remmina into your pi: 
   * ```sudo ufw allow from <yourlocaliprange>/24 to any port 5900 proto tcp``` and ```sudo raspi-config``` interfaces and enable VNC server. 
   * Open the ```/root/.vnc/config.d/vncserver-x11``` config file.
   * Replace ```Authentication=SystemAuth``` with ```Authentication=VncAuth``` and save the file.
   * In the command line, run ```sudo vncpasswd -service```. This will prompt you to set a password, and will insert it for you in the right config file for VNC Server running in Service Mode.
   * Restart VNC Server.
   * ONLY first 8 characters of password work in REMMINA the ip field is: ```<yourpiip>:5900```
 12. [Profile Switcher repo](https://github.com/tosti007/MMM-ProfileSwitcher)



