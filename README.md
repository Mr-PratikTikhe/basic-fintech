# Fintech Platform

## Overview

This project is a basic fintech platform that allows users to manage their accounts and perform simple transactions such as deposits and withdrawals. It utilizes Node.js for the backend, Hasura for the GraphQL API, and a simple frontend with HTML, CSS, and JavaScript.

## Features

- **User Management**: Create new users and view existing users.
- **Transactions**: Perform transactions such as deposits and withdrawals.
- **User Interface**: Simple and intuitive UI for user interaction.

## Technology Stack

- **Backend**: Node.js, Express
- **GraphQL API**: Hasura
- **Database**: PostgreSQL
- **Frontend**: HTML, CSS, JavaScript

## Screenshots

![Create and Fetch users](![Screenshot 2024-07-26 123355](https://github.com/user-attachments/assets/1067b2b2-f014-45aa-8071-4a1a1d508c15)
)
![Create transaction and Fetch transaction](![Screenshot 2024-07-26 123514](https://github.com/user-attachments/assets/99a1793a-039c-4d4e-ad5a-2418138966fc)
)


## Setup Instructions

### Backend

1. **Clone the Repository**

   ```sh
   git clone https://github.com/username/repository-name.git
   cd repository-name
   
2. **Install Dependencies**
   
   Navigate to the backend directory and install the necessary packages:
   ```sh
   cd backend
   npm install

3. **Create a '.env' File**
   
   Create a .env file in the backend directory with the following content:
    ```sh
    HASURA_URL='https://your-hasura-instance/v1/graphql'
    HASURA_ADMIN_SECRET='your-admin-secret'
    PORT=3000

4. **Start the Server**

   ```sh
   npm start

  The server will start on port 3000 by default.

### Frontend

1.**Navigate to the Frontend Directory**

    
     cd frontend


2.**Open index.html**

 Open index.html in your preferred web browser. No additional setup is required for the frontend.

