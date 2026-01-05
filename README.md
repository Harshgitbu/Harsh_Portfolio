Harsh Shah - Data Science Portfolio

A modern, responsive portfolio website showcasing data science expertise, machine learning projects, and technical skills. Designed with recruiters and hiring managers in mind, featuring professional UI/UX, smooth animations, and comprehensive project demonstrations.

✨ Live Demo
🔗 [View Live Portfolio](https://harshportfolio612.netlify.app/)

🚀 Features
🎨 Modern UI/UX
Clean, professional design with consistent blue gradient theme

Smooth scroll animations and transitions

Responsive design optimized for all devices

Interactive elements with hover effects

Accessibility-focused implementation

📱 Interactive Components
Dynamic Hero Section with typing animation for role descriptions

Professional Experience Timeline with interactive cards

Skills Matrix with color-coded proficiency levels

Project Showcase with filtering by technology category

Contact Form with real-time validation

⚡ Performance Optimized
95+ Lighthouse performance score

Fast loading times (< 2 seconds)

Optimized assets and efficient animations

SEO-friendly structure

Mobile-first responsive design

🛠️ Technology Stack
Frontend
React 19 - Modern JavaScript library for building user interfaces

CSS3 - Advanced styling with Grid, Flexbox, and CSS Variables

JavaScript ES6+ - Modern JavaScript features and syntax

UI/UX Features
Intersection Observer API - Scroll-triggered animations

Custom React Hooks - Reusable animation and state logic

CSS Animations - Smooth transitions and micro-interactions

Responsive Design - Mobile-first approach with multiple breakpoints

Development Tools
Create React App - Development environment setup

npm - Package management

Git - Version control

Netlify - Deployment and hosting

Design System
Color Scheme: Professional blue gradient (#1a73e8 to #4dabf5)

Typography: Inter font family for readability

Spacing: Consistent spacing scale (8px base)

Components: Modular, reusable React components

📁 Project Structure
text
harsh-portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── hooks/
│   │   └── useFadeInOnScroll.js
│   ├── styles/
│   │   ├── Global.css
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
├── README.md
├── .gitignore
└── netlify.toml
🎯 Key Components
1. Hero Section
Animated typing effect showcasing roles

Professional profile image

Call-to-action buttons

Social media links with hover effects

2. About Section
Professional introduction

Statistics grid (experience, projects, technologies)

Education timeline

Core competencies with categorized skills

3. Experience Timeline
Interactive timeline of professional experience

Role details with achievement highlights

Technology tags for each position

Smooth hover animations

4. Projects Showcase
Filterable project cards by category (ML, Analytics, Engineering, Web)

Detailed project descriptions

Technology stack display

GitHub and demo links

5. Skills Matrix
Color-coded proficiency levels (Advanced/Intermediate/Beginner/Novice)

Categorized skills (Programming, ML, Data Engineering, Cloud, Tools)

Animated progress bars

Interactive skill tags

6. Contact Section
Contact methods with icons

Professional contact form with validation

Availability indicator

Social media integration

🔧 Installation & Setup
Prerequisites
Node.js (v16 or higher)

npm (v8 or higher)

Local Development
Clone the repository

bash
git clone https://github.com/Harshgitbu/Harsh-Portfolio.git
cd Harsh-Portfolio
Install dependencies

bash
npm install
Set up environment variables

bash
echo "HOST=localhost" > .env
Start the development server

bash
npm start
The app will open at http://localhost:3000

Production Build
bash
npm run build
Creates an optimized production build in the build/ folder.

🚀 Deployment
Netlify (Recommended)
Push your code to GitHub

Connect your repository to Netlify

Set build command: npm run build

Set publish directory: build

Deploy!

GitHub Pages
Install gh-pages:

bash
npm install --save-dev gh-pages
Update package.json:

json
"homepage": "https://Harshgitbu.github.io/Harsh-Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy:

bash
npm run deploy
🎨 Customization
Update Personal Information
Profile Info: Update Hero.jsx and About.jsx

Experience: Modify data in Experience.jsx

Projects: Update projects array in Projects.jsx

Skills: Adjust skills data in Skills.jsx

Contact: Update contact details in Contact.jsx

Change Theme Colors
Edit CSS variables in Global.css:

css
:root {
  --primary-dark: #1a237e;
  --primary-main: #283593;
  --primary-light: #5c6bc0;
  /* ... other variables */
}
Add New Projects
Add to the projects array in Projects.jsx:

javascript
{
  title: 'Project Title',
  period: 'Date Period',
  description: 'Project description',
  category: 'ml', // or 'analytics', 'engineering', 'web'
  technologies: ['Tech1', 'Tech2'],
  features: ['Feature 1', 'Feature 2'],
  githubLink: 'https://github.com/your-repo',
  demoLink: 'https://demo-url.com',
  icon: <YourIcon />
}
📊 Performance Metrics
Metric	Score	Status
Performance	95+	✅ Excellent
Accessibility	100	✅ Perfect
Best Practices	100	✅ Perfect
SEO	100	✅ Perfect
Mobile Responsiveness	100	✅ Perfect
🤝 Contributing
Contributions are welcome! If you have suggestions for improvements:

Fork the repository

Create a feature branch (git checkout -b feature/improvement)

Commit your changes (git commit -m 'Add some improvement')

Push to the branch (git push origin feature/improvement)

Open a Pull Request

📬 Contact
Name: Harsh Shah

Email: shahharsh0612@gmail.com

LinkedIn: linkedin.com/in/harsh612

GitHub: github.com/Harshgitbu

⭐ If you find this portfolio helpful, please give it a star on GitHub! ⭐

Built by Harsh Shah