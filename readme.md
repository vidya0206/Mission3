Car Value API
This is a REST API that takes a car model and year as input and returns the suggested value for the car based on certain business rules.

Requirements
Node.js (version 14 or higher)
npm (version 6 or higher)
Installation
Clone the repository or download the source code
Open a terminal or command prompt and navigate to the project directory
Install the dependencies by running the following command:

npm install

Usage

Start the server by running the following command:

npm run start

Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvement, please create a new issue or submit a pull request.
The server will start on port 3000 by default.

Send a POST request to the /car-value endpoint with the car model and year in the request body in JSON format. For example:

POST http://localhost:3000/car-value
Content-Type: application/json

{
"model": "Civic",
"year": 2014
}

The response will be in JSON format and will contain the suggested value for the car. For example:

HTTP/1.1 200 OK
Content-Type: application/json

{
"car_value": 6614
}

If there is an error with the input values, the server will respond with a JSON object that includes an error message, like this:

{
"error": "there is an error"
}
