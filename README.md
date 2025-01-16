# Blogging Platform 🤳👋

A full-stack blogging platform where users can create, and view blog posts. Built using **React** for the frontend and **Firebase** for the backend to store and retrieve data. It also supports **dark mode** for better user experience and includes various UI enhancements to make it more attractive. 😇

## Features
- **Create Blog Post**: Add new blog posts with a title and content. 
- **Edit Blog Post**: Modify the title and content of existing blog posts. (On progress)
- **Delete Blog Post**: Remove blog posts from the platform. (On progress)
- **View Blog Posts**: View a list of all blog posts, ordered by date.
- **Dark Mode**: Toggle between light and dark themes to enhance the user experience.
- **Search**: Search for blog posts based on the title. (On progress)
- **Responsive Design**: Optimized for mobile and desktop screens.

## Technologies Used

- **Frontend**: 
  - React.js
  - React Router
  - React Hooks (useState, useEffect, etc.)
  - CSS (for styling and dark mode)
  - Vercel for hosting
- **Backend**: 
  - Firebase Firestore (for real-time data storage)
  - Firebase Authentication (if required, for user authentication)
- **Other Libraries**:
  - Font Awesome for icons
  - CSS variables for theme management

## Setup & Installation 👋

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/blogging-platform.git
```
### 2. Install Dependecies

Navigate into the project directory and install the required dependencies.

```bash
cd blogging-platform
npm install
```

### 3. Firebase Setup

- Create a project in Firebase Console. 
- Go to Firestore Database and create a collection named *blogs*.
- Now, go to your Firebase project *settings*.
- Find the _Your Applications_ section, which will probably be under the *General* tab.
- Create an *application* for your project on the desired platform. (In our case, a _Web App_)
- You will see your project configuration keys.
- Add your Firebase configuration to *firebase.js*.

```bash
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

### 4. Add Firebase API Keys to *.env* file

Create a *.env* file in the root of your project and add your Firebase API keys.

```bash
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### 5. Start the Development Server.

Once the dependencies are installed and the Firebase config is set up, start the development server. 

```bash
npm start
```

Your app should be live at http://localhost:3000

## Deployment

You can deploy the app using Vercel:

- Sign up or log in to [Vercel](https://vercel.com/)
- Click on New Project and import your GitHub repository.
- Follow the prompts and click Deploy.

After deployment, your project will be live on a unique Vercel URL.


## Dark Mode Toggle 

You can switch between Light Mode and Dark Mode by clicking the "Switch to Dark Mode" or "Switch to Light Mode" button located at the top. This will toggle the theme for the entire website.

## Screenshots 

![put](https://github.com/user-attachments/assets/6db5ff62-3a06-4437-ab27-073ef307520b)


## Contributing 

Feel free to fork the repository and make pull requests. If you find any bugs or issues, please open an issue on GitHub.

## License 

This project is open-source and available under the MIT License.

Built with ❤️ by [Abhayy](https://instagram.com/abhayy.___)
