angular.module('appModule.models', []).factory('appFactory', ['$http',

    function($http) {
        return {

            getRaceResults: function() {
               	return $http.get('http://ergast.com/api/f1/2004/1/results.json').then(function(d){
                        return d.data.MRData.RaceTable.Races[0].Results;
               	});
            },	
            getRaceResultsHardCode: function() {
                return {
                    "Results": [{
                        "number": "1",
                        "position": "1",
                        "positionText": "1",
                        "points": "10",
                        "Driver": {
                            "driverId": "michael_schumacher",
                            "code": "MSC",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Michael_Schumacher",
                            "givenName": "Michael",
                            "familyName": "Schumacher",
                            "dateOfBirth": "1969-01-03",
                            "nationality": "German"
                        },
                        "Constructor": {
                            "constructorId": "ferrari",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari",
                            "name": "Ferrari",
                            "nationality": "Italian"
                        },
                        "grid": "1",
                        "laps": "58",
                        "status": "Finished",
                        "Time": {
                            "millis": "5055757",
                            "time": "1:24:15.757"
                        },
                        "FastestLap": {
                            "rank": "1",
                            "lap": "29",
                            "Time": {
                                "time": "1:24.125"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "226.933"
                            }
                        }
                    }, {
                        "number": "2",
                        "position": "2",
                        "positionText": "2",
                        "points": "8",
                        "Driver": {
                            "driverId": "barrichello",
                            "code": "BAR",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Rubens_Barrichello",
                            "givenName": "Rubens",
                            "familyName": "Barrichello",
                            "dateOfBirth": "1972-05-23",
                            "nationality": "Brazilian"
                        },
                        "Constructor": {
                            "constructorId": "ferrari",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari",
                            "name": "Ferrari",
                            "nationality": "Italian"
                        },
                        "grid": "2",
                        "laps": "58",
                        "status": "Finished",
                        "Time": {
                            "millis": "5069362",
                            "time": "+13.605"
                        },
                        "FastestLap": {
                            "rank": "2",
                            "lap": "8",
                            "Time": {
                                "time": "1:24.179"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "226.788"
                            }
                        }
                    }, {
                        "number": "8",
                        "position": "3",
                        "positionText": "3",
                        "points": "6",
                        "Driver": {
                            "driverId": "alonso",
                            "permanentNumber": "14",
                            "code": "ALO",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Fernando_Alonso",
                            "givenName": "Fernando",
                            "familyName": "Alonso",
                            "dateOfBirth": "1981-07-29",
                            "nationality": "Spanish"
                        },
                        "Constructor": {
                            "constructorId": "renault",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Renault_F1",
                            "name": "Renault",
                            "nationality": "French"
                        },
                        "grid": "5",
                        "laps": "58",
                        "status": "Finished",
                        "Time": {
                            "millis": "5090430",
                            "time": "+34.673"
                        },
                        "FastestLap": {
                            "rank": "3",
                            "lap": "10",
                            "Time": {
                                "time": "1:25.088"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "224.365"
                            }
                        }
                    }, {
                        "number": "4",
                        "position": "4",
                        "positionText": "4",
                        "points": "5",
                        "Driver": {
                            "driverId": "ralf_schumacher",
                            "code": "SCH",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Ralf_Schumacher",
                            "givenName": "Ralf",
                            "familyName": "Schumacher",
                            "dateOfBirth": "1975-06-30",
                            "nationality": "German"
                        },
                        "Constructor": {
                            "constructorId": "williams",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering",
                            "name": "Williams",
                            "nationality": "British"
                        },
                        "grid": "8",
                        "laps": "58",
                        "status": "Finished",
                        "Time": {
                            "millis": "5116180",
                            "time": "+1:00.423"
                        },
                        "FastestLap": {
                            "rank": "5",
                            "lap": "11",
                            "Time": {
                                "time": "1:25.824"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "222.441"
                            }
                        }
                    }, {
                        "number": "3",
                        "position": "5",
                        "positionText": "5",
                        "points": "4",
                        "Driver": {
                            "driverId": "montoya",
                            "code": "MON",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Juan_Pablo_Montoya",
                            "givenName": "Juan",
                            "familyName": "Pablo Montoya",
                            "dateOfBirth": "1975-09-20",
                            "nationality": "Colombian"
                        },
                        "Constructor": {
                            "constructorId": "williams",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering",
                            "name": "Williams",
                            "nationality": "British"
                        },
                        "grid": "3",
                        "laps": "58",
                        "status": "Finished",
                        "Time": {
                            "millis": "5124293",
                            "time": "+1:08.536"
                        },
                        "FastestLap": {
                            "rank": "4",
                            "lap": "42",
                            "Time": {
                                "time": "1:25.286"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "223.844"
                            }
                        }
                    }, {
                        "number": "9",
                        "position": "6",
                        "positionText": "6",
                        "points": "3",
                        "Driver": {
                            "driverId": "button",
                            "permanentNumber": "22",
                            "code": "BUT",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Jenson_Button",
                            "givenName": "Jenson",
                            "familyName": "Button",
                            "dateOfBirth": "1980-01-19",
                            "nationality": "British"
                        },
                        "Constructor": {
                            "constructorId": "bar",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/British_American_Racing",
                            "name": "BAR",
                            "nationality": "British"
                        },
                        "grid": "4",
                        "laps": "58",
                        "status": "Finished",
                        "Time": {
                            "millis": "5126355",
                            "time": "+1:10.598"
                        },
                        "FastestLap": {
                            "rank": "7",
                            "lap": "24",
                            "Time": {
                                "time": "1:25.982"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "222.032"
                            }
                        }
                    }, {
                        "number": "7",
                        "position": "7",
                        "positionText": "7",
                        "points": "2",
                        "Driver": {
                            "driverId": "trulli",
                            "code": "TRU",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Jarno_Trulli",
                            "givenName": "Jarno",
                            "familyName": "Trulli",
                            "dateOfBirth": "1974-07-13",
                            "nationality": "Italian"
                        },
                        "Constructor": {
                            "constructorId": "renault",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Renault_F1",
                            "name": "Renault",
                            "nationality": "French"
                        },
                        "grid": "9",
                        "laps": "57",
                        "status": "+1 Lap",
                        "FastestLap": {
                            "rank": "9",
                            "lap": "9",
                            "Time": {
                                "time": "1:26.275"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "221.278"
                            }
                        }
                    }, {
                        "number": "5",
                        "position": "8",
                        "positionText": "8",
                        "points": "1",
                        "Driver": {
                            "driverId": "coulthard",
                            "code": "COU",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/David_Coulthard",
                            "givenName": "David",
                            "familyName": "Coulthard",
                            "dateOfBirth": "1971-03-27",
                            "nationality": "British"
                        },
                        "Constructor": {
                            "constructorId": "mclaren",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/McLaren",
                            "name": "McLaren",
                            "nationality": "British"
                        },
                        "grid": "12",
                        "laps": "57",
                        "status": "+1 Lap",
                        "FastestLap": {
                            "rank": "11",
                            "lap": "13",
                            "Time": {
                                "time": "1:26.328"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "221.142"
                            }
                        }
                    }, {
                        "number": "10",
                        "position": "9",
                        "positionText": "9",
                        "points": "0",
                        "Driver": {
                            "driverId": "sato",
                            "code": "SAT",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Takuma_Sato",
                            "givenName": "Takuma",
                            "familyName": "Sato",
                            "dateOfBirth": "1977-01-28",
                            "nationality": "Japanese"
                        },
                        "Constructor": {
                            "constructorId": "bar",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/British_American_Racing",
                            "name": "BAR",
                            "nationality": "British"
                        },
                        "grid": "7",
                        "laps": "57",
                        "status": "+1 Lap",
                        "FastestLap": {
                            "rank": "8",
                            "lap": "43",
                            "Time": {
                                "time": "1:26.077"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "221.787"
                            }
                        }
                    }, {
                        "number": "11",
                        "position": "10",
                        "positionText": "10",
                        "points": "0",
                        "Driver": {
                            "driverId": "fisichella",
                            "code": "FIS",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Giancarlo_Fisichella",
                            "givenName": "Giancarlo",
                            "familyName": "Fisichella",
                            "dateOfBirth": "1973-01-14",
                            "nationality": "Italian"
                        },
                        "Constructor": {
                            "constructorId": "sauber",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Sauber",
                            "name": "Sauber",
                            "nationality": "Swiss"
                        },
                        "grid": "14",
                        "laps": "57",
                        "status": "+1 Lap",
                        "FastestLap": {
                            "rank": "10",
                            "lap": "39",
                            "Time": {
                                "time": "1:26.282"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "221.260"
                            }
                        }
                    }, {
                        "number": "15",
                        "position": "11",
                        "positionText": "11",
                        "points": "0",
                        "Driver": {
                            "driverId": "klien",
                            "code": "KLI",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Christian_Klien",
                            "givenName": "Christian",
                            "familyName": "Klien",
                            "dateOfBirth": "1983-02-07",
                            "nationality": "Austrian"
                        },
                        "Constructor": {
                            "constructorId": "jaguar",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Jaguar_Racing",
                            "name": "Jaguar",
                            "nationality": "British"
                        },
                        "grid": "19",
                        "laps": "56",
                        "status": "+2 Laps",
                        "FastestLap": {
                            "rank": "16",
                            "lap": "6",
                            "Time": {
                                "time": "1:27.840"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "217.336"
                            }
                        }
                    }, {
                        "number": "16",
                        "position": "12",
                        "positionText": "12",
                        "points": "0",
                        "Driver": {
                            "driverId": "matta",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Cristiano_da_Matta",
                            "givenName": "Cristiano",
                            "familyName": "da Matta",
                            "dateOfBirth": "1973-09-19",
                            "nationality": "Brazilian"
                        },
                        "Constructor": {
                            "constructorId": "toyota",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Toyota_Racing",
                            "name": "Toyota",
                            "nationality": "Japanese"
                        },
                        "grid": "13",
                        "laps": "56",
                        "status": "+2 Laps",
                        "FastestLap": {
                            "rank": "15",
                            "lap": "41",
                            "Time": {
                                "time": "1:27.820"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "217.385"
                            }
                        }
                    }, {
                        "number": "17",
                        "position": "13",
                        "positionText": "13",
                        "points": "0",
                        "Driver": {
                            "driverId": "panis",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Olivier_Panis",
                            "givenName": "Olivier",
                            "familyName": "Panis",
                            "dateOfBirth": "1966-09-02",
                            "nationality": "French"
                        },
                        "Constructor": {
                            "constructorId": "toyota",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Toyota_Racing",
                            "name": "Toyota",
                            "nationality": "Japanese"
                        },
                        "grid": "18",
                        "laps": "56",
                        "status": "+2 Laps",
                        "FastestLap": {
                            "rank": "14",
                            "lap": "35",
                            "Time": {
                                "time": "1:27.807"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "217.417"
                            }
                        }
                    }, {
                        "number": "19",
                        "position": "14",
                        "positionText": "14",
                        "points": "0",
                        "Driver": {
                            "driverId": "pantano",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Giorgio_Pantano",
                            "givenName": "Giorgio",
                            "familyName": "Pantano",
                            "dateOfBirth": "1979-02-04",
                            "nationality": "Italian"
                        },
                        "Constructor": {
                            "constructorId": "jordan",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Jordan_Grand_Prix",
                            "name": "Jordan",
                            "nationality": "Irish"
                        },
                        "grid": "16",
                        "laps": "55",
                        "status": "+3 Laps",
                        "FastestLap": {
                            "rank": "18",
                            "lap": "15",
                            "Time": {
                                "time": "1:28.523"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "215.659"
                            }
                        }
                    }, {
                        "number": "12",
                        "position": "15",
                        "positionText": "R",
                        "points": "0",
                        "Driver": {
                            "driverId": "massa",
                            "permanentNumber": "19",
                            "code": "MAS",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Felipe_Massa",
                            "givenName": "Felipe",
                            "familyName": "Massa",
                            "dateOfBirth": "1981-04-25",
                            "nationality": "Brazilian"
                        },
                        "Constructor": {
                            "constructorId": "sauber",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Sauber",
                            "name": "Sauber",
                            "nationality": "Swiss"
                        },
                        "grid": "11",
                        "laps": "44",
                        "status": "Engine",
                        "FastestLap": {
                            "rank": "12",
                            "lap": "11",
                            "Time": {
                                "time": "1:26.846"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "219.823"
                            }
                        }
                    }, {
                        "number": "18",
                        "position": "16",
                        "positionText": "R",
                        "points": "0",
                        "Driver": {
                            "driverId": "heidfeld",
                            "code": "HEI",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Nick_Heidfeld",
                            "givenName": "Nick",
                            "familyName": "Heidfeld",
                            "dateOfBirth": "1977-05-10",
                            "nationality": "German"
                        },
                        "Constructor": {
                            "constructorId": "jordan",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Jordan_Grand_Prix",
                            "name": "Jordan",
                            "nationality": "Irish"
                        },
                        "grid": "15",
                        "laps": "43",
                        "status": "Transmission",
                        "FastestLap": {
                            "rank": "13",
                            "lap": "27",
                            "Time": {
                                "time": "1:27.503"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "218.173"
                            }
                        }
                    }, {
                        "number": "20",
                        "position": "17",
                        "positionText": "N",
                        "points": "0",
                        "Driver": {
                            "driverId": "bruni",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Gianmaria_Bruni",
                            "givenName": "Gianmaria",
                            "familyName": "Bruni",
                            "dateOfBirth": "1981-05-30",
                            "nationality": "Italian"
                        },
                        "Constructor": {
                            "constructorId": "minardi",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Minardi",
                            "name": "Minardi",
                            "nationality": "Italian"
                        },
                        "grid": "20",
                        "laps": "43",
                        "status": "Not classified",
                        "FastestLap": {
                            "rank": "19",
                            "lap": "10",
                            "Time": {
                                "time": "1:30.161"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "211.741"
                            }
                        }
                    }, {
                        "number": "14",
                        "position": "18",
                        "positionText": "R",
                        "points": "0",
                        "Driver": {
                            "driverId": "webber",
                            "code": "WEB",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Mark_Webber",
                            "givenName": "Mark",
                            "familyName": "Webber",
                            "dateOfBirth": "1976-08-27",
                            "nationality": "Australian"
                        },
                        "Constructor": {
                            "constructorId": "jaguar",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Jaguar_Racing",
                            "name": "Jaguar",
                            "nationality": "British"
                        },
                        "grid": "6",
                        "laps": "29",
                        "status": "Transmission",
                        "FastestLap": {
                            "rank": "6",
                            "lap": "15",
                            "Time": {
                                "time": "1:25.952"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "222.110"
                            }
                        }
                    }, {
                        "number": "21",
                        "position": "19",
                        "positionText": "R",
                        "points": "0",
                        "Driver": {
                            "driverId": "baumgartner",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Zsolt_Baumgartner",
                            "givenName": "Zsolt",
                            "familyName": "Baumgartner",
                            "dateOfBirth": "1981-01-01",
                            "nationality": "Hungarian"
                        },
                        "Constructor": {
                            "constructorId": "minardi",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Minardi",
                            "name": "Minardi",
                            "nationality": "Italian"
                        },
                        "grid": "17",
                        "laps": "13",
                        "status": "Electrical",
                        "FastestLap": {
                            "rank": "20",
                            "lap": "8",
                            "Time": {
                                "time": "1:30.621"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "210.666"
                            }
                        }
                    }, {
                        "number": "6",
                        "position": "20",
                        "positionText": "R",
                        "points": "0",
                        "Driver": {
                            "driverId": "raikkonen",
                            "permanentNumber": "7",
                            "code": "RAI",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/Kimi_R%C3%A4ikk%C3%B6nen",
                            "givenName": "Kimi",
                            "familyName": "Räikkönen",
                            "dateOfBirth": "1979-10-17",
                            "nationality": "Finnish"
                        },
                        "Constructor": {
                            "constructorId": "mclaren",
                            "url": "http:\/\/en.wikipedia.org\/wiki\/McLaren",
                            "name": "McLaren",
                            "nationality": "British"
                        },
                        "grid": "10",
                        "laps": "9",
                        "status": "Engine",
                        "FastestLap": {
                            "rank": "17",
                            "lap": "7",
                            "Time": {
                                "time": "1:27.936"
                            },
                            "AverageSpeed": {
                                "units": "kph",
                                "speed": "217.098"
                            }
                        }
                    }]
                };
            }
        };
    }
]);