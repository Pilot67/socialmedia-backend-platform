<div id="top"></div>  

[![License](https://img.shields.io/badge/Licence-MIT-brightgreen?style=plastic)](#licence)  
  
<br>

# Social Media Backend Platform  
<br>

## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#licence)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Links](#links)
  * [Questions](#questions)
  
<br>

## Description  
This is a backend server app well suited to a start-up Social Media platform. Utilising Mongo Database (NoSQL) for storing and retrieving data, the app shows the ease of use and the power of NoSQL databases.  
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Installation  
The installation of this software is as follows:  
* mongoose  
* express  
* date-fns  
* nodemon for development  
  
From the CLI enter 'npm install' to install all dependencies.  
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Usage
Start the app from the CLI using 'npm run start'.  
Using Insomnia or your browser, you can create, read, update and delete entries in the database. The database will contain 2 collections, users and thoughts. Usere are populated with user information and friend Id's stored in an array. This is a sample of typical JSON data to create a user using the `POST` method:  
`{ "username":"Nathan", "email": "nat@gmail.com" }`  
user routes are as follows:  
`GET http://localhost:3001/api/user` Get all users  
`GET http://localhost:3001/api/user/{user Id}` Display only 1 user by Id  
`POST http://localhost:3001/api/user` Create a new user  
`PUT http://localhost:3001/api/user/{user Id}` Update a user  
`DELETE http://localhost:3001/api/user/{user Id}` Delete a user  



<p align="right">(<a href="#top">back to top</a>)</p>
  
## Licence
Copyright 2021 Stuart Simmons  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files  
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  
    
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Contributing
When contributing to this repository, please first discuss the change you wish to make via email  
  with the owners of this repository before making a pull request<br>
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Tests
No test files yet, check again soon<br>
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Links
Github Link: https://github.com/Pilot67/socialmedia-backend-platform  
Demonstration Video #1 (Startup and Users): https://drive.google.com/file/d/12m5MiVYv2NT_sg5_Ma3A9pbNeX53apcp/view?usp=sharing  
Demonstration Video #2 (Thoughts and Reactions): https://drive.google.com/file/d/19QaF562FldAI_9V69JOj5bK53-rROG-K/view?usp=sharing  
<p align="right">(<a href="#top">back to top</a>)</p>
  
## Questions
Please direct any questions my Github profile or diret email.  
My github profile, Pilot67, can be found [here](https://github.com/Pilot67)  
If you would like to contact me directly please email me at developer@simmons1.net  
<p align="right">(<a href="#top">back to top</a>)</p>  
