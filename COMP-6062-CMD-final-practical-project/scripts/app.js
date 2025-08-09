const app = Vue.createApp({
    // Data properties for user, weather, and dictionary
    data() {
        return {
            user: [],
            weather: {
                city: 'London',
                province: 'Ontario',
                country: 'Canada'
            },
            dictionary: []
        };
    },

    // Run methods automatically when app is created
    created() {
        this.User();
        this.Weather();
        this.Dictionary();
    },

    methods: {
        // Fetch random user data
        User() {
            fetch('https://comp6062.liamstewart.ca/random-user-data')
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.log('');
                    }
                })
                .then(data => {
                    this.user = data;
                })
                .catch(error => {
                    console.log('');
                });
        },

        // Fetch weather data using city, province, country
        Weather() {
            fetch(`https://comp6062.liamstewart.ca/weather-data?city=${this.weather.city}&province=${this.weather.province}&country=${this.weather.country}`)
                .then(response => {   
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.log('');
                    }
                })
                .then(data => {
                    this.weather.temp = data.weather_data.temperature;
                    this.weather.wind = data.weather_data.wind_speed;
                    this.weather.desc = data.weather_data.weather_description;
                })
                .catch(error => {
                    console.log('');
                });
        },

        // Fetch dictionary definition for given word
        Dictionary() {
            fetch(`https://comp6062.liamstewart.ca/api/define?word=${this.dictionary.word}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.log('');
                    }
                })
                .then(data => {
                    this.dictionary = data;
                })
                .catch(error => {
                    console.log('');
                });
        }
    }
});

app.mount('#app');
