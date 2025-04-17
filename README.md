# 🤖 FRC Watchlist

A web tool to track matches for your favorite FRC teams at the World Championship!

Built with:
- React + Material UI (frontend)
- Express + node-fetch (backend)
- FRC API (https://frc-events.firstinspires.org/services/API)

## 🚀 Features

- Input a ranked list of FRC team numbers
- View all upcoming matches involving those teams
- Automatically hides past matches
- Highlights your teams in each match
- Displays match time, division, and teams
- Powered by the official FRC API

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

## ✨ Future Features

- Show match countdown timers
- Sort matches by priority or team rank
- Export watchlist to CSV or text
- Red/blue alliance split
- Live match scores?

## 🛠 Built by Danny Smith

MIT License. Contributions welcome!
