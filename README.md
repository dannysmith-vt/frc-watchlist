# 🤖 FRC Watchlist

A web tool to track matches for your favorite FRC teams at the World Championship, 2025

## 🔧 Local Setup

1. Clone the repository
   ```
   git clone https://github.com/your-username/frc-watchlist.git
   cd frc-watchlist
   ```

2. Add FRC API credentials
   Create a `.env` file inside the `server/` folder:
   ```
   FRC_USER=yourFRCUsername
   FRC_KEY=yourFRCAuthKey
   ```
   You can get these from: https://frc-events.firstinspires.org/services/API

3. Run the backend
   ```
   cd server
   npm install
   node index.js
   ```
   This starts your Express server at http://localhost:3001

4. Run the frontend
   In a new terminal tab:
   ```
   cd client
   npm install
   npm start
   ```
   Opens the React app at http://localhost:3000

## 📦 Deployment

Coming soon — eventually you'll be able to use this live without installing anything!

## 🛠 Built by Danny Smith

MIT License. Contributions welcome!
