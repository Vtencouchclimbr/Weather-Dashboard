
  ![License](https://img.shields.io/badge/license-mit-blue.svg)
  
# Weather Dashboard

## Description
The Weather Dashboard is a web application built using TypeScript and integrates a weather API to provide users with real-time weather data. It allows users to search for any city and receive detailed weather information, including temperature, wind speed, humidity, and weather conditions, presented with clear icons and descriptions. The application fetches location and weather data through API calls, processes the data using TypeScript for type safety, and displays current weather along with forecasts. This project showcases how TypeScript enhances code structure and reliability when working with external APIs and dynamic data.

## Deployed
[On Render](https://weather-dashboard-uu5q.onrender.com)

## Table of Contents
- [Description](#description)
- [Deployed Site](#deployed)
- [Installation](#installation)
- [Usage](#usage)
- [Featured](#featured)
- [Contributing](#contributing)
- [Video](#video)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
1. Clone the repository: `git clone <your-repo-url>` and navigate to the project directory: `cd <your-repo-directory>`
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Start the application: `npm start`

## Usage
To use the Weather Dashboard, simply enter the name of a city in the search bar, and the application will fetch and display the current weather information, including temperature, wind speed, humidity, and weather conditions, using data from a weather API. The dashboard will also provide a forecast for upcoming days. Make sure to have the necessary API key set up in the environment variables to ensure proper functionality of the app.

## Featured 
### Get cities by name/id
``` Typescript to get cities by name/id
async getCities() {
    try {
      const cities = await this.read();
      return cities.map((city: City) => new City(city.name, city.id));
      } catch (error) {
        console.error('Error getting cities:', error);
    }
  }
```

## Contributing
There are no contributors for this project currently

## Video
[Watch the video](https://drive.google.com/file/d/1TpUxEiMGQCNCyQj9JyXM1UfpbcUt93d9/view)

## License
This project is licensed under the MIT license.

## Tests
No tests are provided at this time.

## Questions
If you have any questions, please reach out to me:
- Github: [Vtencouchclimbr](http://github.com/Vtencouchclimbr)
- Email: lmntrylmnt@gmail.com
  