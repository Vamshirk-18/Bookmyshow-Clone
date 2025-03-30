# BookMyShow-2.0

BookMyShow-2.0 is a frontend clone of the popular online ticket booking platform **BookMyShow**, built using **React.js** and **Bootstrap**. This project includes movie listings, event bookings, and sports ticket reservations.

## 🚀 Features
- **Movies Page**: Displays currently available movies with trailers and ticket prices.
- **Events Section**: Lists upcoming events with a "Book Ticket Now" button.
- **Sports Section**: Coming soon section for sports events.
- **Movie Trailers**: Embedded YouTube trailers.
- **Dark Mode Toggle**: Light/Dark theme switching.
- **Search Functionality**: Search movies or events.
- **Navigation Bar**: Easily navigate between sections.
- **Sign-up Modal**: Pop-up sign-up form.
- **Ticket Booking Pop-up**: Confirms booking on button click.

## 🛠 Tech Stack
- **React.js**
- **Bootstrap** (React-Bootstrap)
- **React Router**

## 📂 Project Structure
```
bookmyshow-2.0/
├── public/
│   ├── index.html
│   ├── movie posters and assets
│
├── src/
│   ├── components/
│   │   ├── NavigationBar.js
│   │   ├── MoviesPage.js
│   │   ├── EventPage.js
│   │   ├── Sports.js
│   │   ├── DarkModeToggle.js
│   │   ├── MovieTrailer.js
│   │   ├── MovieList.js
│   │   ├── MovieCarousel.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│
├── .gitignore
├── package.json
├── README.md
```

## 🔧 Installation & Setup
1. **Clone the repository**:
   ```sh
   git clone https://github.com/Vamshirk-18/Bookmyshow-Clone.git
   cd bookmyshow-2.0
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the project**:
   ```sh
   npm start
   ```

The app will run on `http://localhost:3000/`.

## 📸 Screenshots
![Home Page](https://via.placeholder.com/800x400?text=Screenshot+Placeholder)

## 🎬 Movie Trailer Example
Embedded YouTube trailers using `iframe`:
```jsx
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/YNZ5o6R0jGw"
  title="Movie Trailer"
  allowFullScreen
></iframe>
```

## 🤝 Contributing
Feel free to contribute by creating a pull request! 🚀

## 📜 License
This project is for educational purposes only and does not have a license


