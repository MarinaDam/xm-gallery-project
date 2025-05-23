# xm-gallery-project
 

# I.  Introduction:

#### Project Overview:
This project is a Gallery Web Application built with Angular 18, utilizing NgRx for robust state management and Karma/Jasmine for unit testing. The application allows users to explore an infinite scroll of random photos and curate a personalized collection of favorite images. It provides a smooth and modern user experience through responsive design, state persistence, and a modular architecture that follows Angular’s best practices

#### Features

- **Infinite Scroll Photo Stream**
  - Loads random images from [Picsum Photos](https://picsum.photos/)
  - Simulates real-world API delays (200–300ms)
  - Infinite scroll with loader animation

- **Favorites Library**
  - Save any photo to your Favorites collection
  - Persistent storage using NgRx state + localStorage
  - Accessible via header navigation

- **Full-Screen Photo View**
  - Click any photo in Favorites to view in full screen
  - Option to remove from Favorites

- **Header Navigation**
  - Toggle between "Photos" and "Favorites"
  - Active state indicator for selected tab

- **State Management**
  - Powered by **NgRx Store**, **Effects**, and **Entity**

- **Testing**
  - Unit tests with **Karma** and **Jasmine**

---
### Requirements

- **Node.js** version >= 18.19.0
- **npm** (comes bundled with Node.js)

---
### Installation

    # 1. Clone the project
    git clone 
    cd gallery-app
    
    # 2. Install dependencies
    npm install

    # 3. Run the app
    ng serve
    # or
    npm start
    # Then open http://localhost:4200/ in your browser.
  
    # 4. Run unit tests
    ng test

---
# II.  Pipeline:

#### Pipeline Stages:
In order to ensure quality and reliable builds for the Angular 18 Gallery App, the following pipeline steps are performed:

- **Checkout Code**
  - Retrieves the latest project code from the GitHub repository.

- **Install Dependencies**
  - Runs npm install to install all required packages.

- **Run Unit Tests**
  - Executes tests using Karma and Jasmine in headless Chrome to verify functionality and prevent regressions.

- **Build Application**
  - Runs ng build --configuration=production to compile the Angular app for production deployment.

- **Upload Artifacts**
  - Saves the compiled build (dist/) as an artifact for later use or deployment.

- **(Optional) Deployment**
  - Automatically deploys the built app to hosting platforms like Firebase, GitHub Pages, or others, if configured.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

 
