# My Trails

My Trails is an interactive web application designed to enhance outdoor experiences by providing users with trail information, including location and user-generated content. This project aims to foster a community of trail enthusiasts by offering a platform where users can share their experiences and discover new trails.

## Features

- **User Authentication**: Allows users to create accounts, sign in, and sign out.
- **Trail Information**: Information about each trail, including location, and user-generated content.
- **User Wish-List**: Users can add trails to their wish list to keep track of the trails they are aiming towards.
- **User Completed List**: Users can add hiked trails to their own completed list for easy review of what they have trekked so far.

## Installation

To get a local copy of this project up and running, follow these steps:

1. **Clone the Repository**:
```  
git clone https://github.com/MarlonS419/My-Trails.git
```
2. **Navigate to the Project Directory**:
```
cd My-Trails
```
3. **Install Dependencies**:
```
yarn install
```
4. **Set Up Environment Variables**:
   - In the root of the `server` folder, create a `.env` file.
   - Include a `SESSION_SECRET` for session management, e.g., `SESSION_SECRET="your_secret_here"`.

5. **Create the Development Database**:
```
createdb my-trails_development
```
6. **Run Migrations**:
```
cd server yarn migrate:latest
```
7. **Start the Application**:
   - From the root folder, run:
```
yarn run dev
```
   - Navigate to `http://localhost:3000` in your web browser to see the application in action.

## Usage

Once the application is running, you can sign up, sign in, and start exploring trails. Users can also add reviews and search for trails based on various criteria.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to improve the application.

## License

This project is open source, under the MIT License.

## Acknowledgments

- Thanks to all contributors who have helped shape this project.
- Special thanks to the trail community for their support and feedback.

---
