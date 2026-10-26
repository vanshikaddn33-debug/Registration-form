# Registration-form

A full-stack web application that allows students to submit their registration details through a simple and user-friendly interface. The application connects a React-based frontend with a Node.js and Express backend to process and store registration information.

## Features

- **Student Registration:** Collects personal, contact, and academic details.
- **Form Validation:** Validates user inputs before submission.
- **Contact Details:** Provides a dedicated page for entering contact information.
- **Success Page:** Displays a confirmation page after successful registration.
- **REST API Integration:** Connects the frontend to the backend for processing registration requests.
- **Database Integration:** Uses MongoDB to store registration records.
- **Security:** Includes reCAPTCHA protection and rate limiting to help reduce spam and excessive requests.

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| Vite | Frontend development and build tool |
| JavaScript (JSX) | Frontend logic and components |
| Node.js | Backend runtime |
| Express.js | Backend server and REST APIs |
| MongoDB | Database |
| Mongoose | Database modeling |
| Google reCAPTCHA | Bot protection |
| Vercel | Frontend hosting |
| Render | Backend hosting |

## Project Structure

```text
Registration-form-new/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── Components/
│   │   ├── Pages/
│   │   │   ├── ContactDetails.jsx
│   │   │   ├── Registration.jsx
│   │   │   └── SuccessPage.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Architecture

The application follows a client-server architecture:

- **Frontend:** Handles the user interface, registration form, and page navigation.
- **Backend:** Organizes API functionality through routes, controllers, middleware, models, and configuration.
- **Database:** Stores registration information using MongoDB.
- **Security:** Applies validation and protection mechanisms to help secure form submissions.

## Purpose

This project demonstrates the development of a full-stack registration system using modern web technologies, API integration, database management, and basic web security practices.
