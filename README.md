 Traditional Login
Traditional Login is a clean and responsive web-based login and registration system built using HTML, CSS, JavaScript, and integrated with Firebase Authentication. It offers a user-friendly interface, smooth transitions, and secure authentication, perfect for modern web applications.

📁 Project Structure
graphql
Copy
Edit
📦 traditional-login
├── index.html               # Login and Sign-Up Page
├── login_welcome.html       # Welcome Page after login
├── style.css                # Styling for the login/sign-up UI
└── script.js                # Firebase authentication logic
🚀 Features
🔐 Firebase Authentication Integration

📝 Signup form with validations (password match, required fields)

🔄 Seamless toggle between login & signup panels

🌈 Stylish and responsive UI with gradients and animations

📄 Welcome screen showing the logged-in username

📱 Mobile-first design approach

🛠️ Technologies Used
HTML5

CSS3

JavaScript (ES6+)

Firebase Authentication (v11.8.1)

🔧 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/traditional-login.git
cd traditional-login
2. Set Up Firebase
Go to Firebase Console

Create a project and enable Email/Password Authentication

Replace the configuration in script.js:

js
Copy
Edit
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  ...
};
3. Launch the App
Open index.html in your browser or run on a local/live server.

🤝 Collaboration
Contributions are welcome! Here's how you can collaborate:

Fork this repository

Create a new branch: git checkout -b feature-name

Commit your changes: git commit -m "Add feature"

Push to your branch: git push origin feature-name

Submit a Pull Request

You can help by:
Fixing bugs

Enhancing UI/UX

Adding support for social logins (Google, GitHub)

Improving accessibility

✅ Conclusion
Traditional Login by Gaurav Dixit provides a quick-start framework for Firebase-authenticated login systems with modern design and smooth usability. Whether you’re building a new project or learning web authentication, this setup will save you hours of effort.

📬 Contact
Name: Gaurav Dixit

Email: gd36990@gmail.com

GitHub: github.com/gaurav-dixit (update if different)
