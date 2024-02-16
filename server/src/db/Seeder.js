/* eslint-disable no-console */
import { connection } from "../boot.js";
import StateSeeder from "./seeders/StateSeeder.js";
import TrailSeeder from "./seeders/TrailSeeder.js";

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("Seeding States data")
    await StateSeeder.seed()

    console.log("Seeding Trails data")
    await TrailSeeder.seed()

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
