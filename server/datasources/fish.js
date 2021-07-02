const { RESTDataSource } = require("apollo-datasource-rest");

class fishAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://www.fishwatch.gov/api/";
  }

  // write the async function to receive all fish
  async getAllFish() {
    const response = await this.get("species");
    return Array.isArray(response)
      ? response.map((fish) => this.fishReducer(fish))
      : [];
  }

  // write the reducer function to store all of the needed fish properties
  // for the defined type definitions

  fishReducer(fish) {
    return {
<<<<<<< HEAD
      // id: launch.flight_number || 0,
      Name: fish["Species Name"],
      Rate: fish["Fishing Rate"],
      Region: fish["NOAA Fisheries Region"],
=======
      Name: fish['Species Name'],
      Rate: fish['Fishing Rate'],
      Region: fish['NOAA Fisheries Region'],
      State: fish['Quote'],
      Photo: fish['Species Illustration Photo'].src
>>>>>>> dc119ca952b474993e8bc52dc11c93299a38e640
    };
  }

  // write any other functions needed for recieving specific fish data
}

module.exports = fishAPI;
