import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}
// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file

  private async read() {
    try {
      const data = await fs.promises.readFile('searchHistory.json', 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading from searchHistory.json:', error);
      return [];
    }
  }

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
  try {
    await fs.promises.writeFile('searchHistory.json', JSON.stringify(cities, null, 2));
    } catch (error) {
      console.error('Error writing to searchHistory.json:', error);
    }
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    try {
      const cities = await this.read();
      return cities.map((city: City) => new City(city.name, city.id));
      } catch (error) {
        console.error('Error getting cities:', error);
    }
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    try {
      const cities = await this.read();
      const id = uuidv4();
      cities.push({ name: city, id });
      await this.write(cities);
      } catch (error) {
        console.error('Error adding city:', error);
    }
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    try {
      const cities = await this.read();
      const updatedCities = cities.filter((city: City) => city.id !== id);
      await this.write(updatedCities);
      } catch (error) {
        console.error('Error removing city:', error);
    }
  }
}

export default new HistoryService();
