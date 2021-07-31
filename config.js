
/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1",["::ffff:XXX.XXX.X.X/24"]], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
		  module: 'worldclock',
		  position: 'bottom_left', // This can be any of the regions, best results in top_left or top_right regions
		  config: {
		    // See 'Configuration options' for more information.

		    timeFormat: 'hh:mm A', //defined in moment.js format()
		    style: 'top', //predefined 4 styles; 'top', 'left','right','bottom'
		    offsetTimezone: null, // Or you can set `Europe/Berlin` to get timegap difference from this timezone. `null` will be UTC timegap.
		    clocks: [
		      {
		        title: "Home",
		      	flag: "us",
			},
		      {
		        title: "LA", // Too long title could cause ugly text align.
		        timezone: "America/Los_Angeles", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
		        flag: "us",
		      },
		      {
			flag: "jp",
			timezone: "Japan",
		      },
		     { 
			flag: "gb",
			timezone: "Europe/London",
			},
		   {
			flag: "fr",
			timezone: "Europe/Paris",
			},
		    ]
		  }
		},

		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Washington, D.C.",
				locationID: "4140963", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				units: "imperial",
				apiKey: "<ENTERAPIKEY>"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Fredericksburg",
				locationID: "4760059", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				units: "imperial",
				apiKey: "<ENTERAPIKEY>"
			}
		},
		{
		  module: "MMM-MyScoreboard",
		  position: "top_center",
		  classes: "default everyone",
		  header: "My Scoreboard",
		  config: {
		    showLeagueSeparators: true,
		    colored: true,
		    viewStyle: "mediumLogos",
		    sports: [
		      {
		        league: "NBA",
		        teams: ["MIL"],
		        groups: ["Pacific", "Central"]
		      },
		      {
		        league: "MLB",
		        teams: ["MIL"]
		      },
		      {
		        league: "NFL",
		        teams: ["GB"]
		      },
		
		    ]

		  }
		},

	  	 {
		      module: 'MMM-MyCommute',
		      position: 'bottom_right',
		      header: 'Traffic',
		      classes: 'default everyone', 
		      config: {
		        	apikey: '<ENTERAPIGOOGLE>',
				origin: "<enter address matches google address>",
				startTime: "00:00",
				endTime: "23:59",
				colorCodeTravelTime: "true",
				nextTransitVehicleDepartureFormat: 'true',
			//	travelTimeFormat: "h[h] m[m]",
				destinations: [
					      {
					        destination: 'dest1',
					        label: 'Label1',
					        mode: 'driving',
					        color: '#0000ff'
					      },
					      {
					        destination: 'dest2',
					        label: 'label2',
					        mode: 'transit'
					      },
					      {
					        destination: 'dest3',
					        label: 'label3',
					        mode: 'driving'
					      }
				     ]
		      }
		    },

		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
