const { RESTDataSource } = require("apollo-datasource-rest");

class fishAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://www.fishwatch.gov/api/species";
  }

  // write the async function to receive all fish

  // write the reducer function to store all of the needed fish properties
  // for the defined type definitions

  // write any other functions needed for recieving specific fish data
}
