# Emoji Rain Interactive

**Emoji Rain Interactive** is a simple client-server web application that lets users trigger an animated "emoji rain" on a separate screen by clicking on emojis in a client view. It’s ideal for live events, installations, or interactive displays.

## Overview

The project is split into two main components:

- **Client view** (`/client`): A web page where users can click on emojis to trigger animations.
- **Server view** (`/server`): A display that shows the raining emoji animation in real-time, based on user interactions.

Communication between clients and the server is handled using WebSockets.

## Features

- Real-time WebSocket-based communication
- Simple client interface to trigger emojis
- Live display with falling emojis
- Easy to deploy and run locally

## Requirements

- Node.js (version 18 or later recommended)
- npm (comes with Node.js)

## Getting Started

### 1. Clone the repository
`git clone https://github.com/Lorentious/emoji-rain-interactive.git`

`cd emoji-rain-interactive`

emoji-rain-interactive/  
├── public/  
│   ├── client.html       # User interface for sending emojis
│   ├── server.html       # Display showing the falling emoji animation
│   └── style.css         # Shared styling
├── server.js             # WebSocket and Express server
├── package.json
└── README.md

### 2. Install dependencies
`npm install`

### 3. Start the server
`npm start`

The server will run by default on [http://localhost:3000](http://localhost:3000).

### 4. Open in browser
Client view: [http://localhost:3000/client](http://localhost:3000/client)

Server view: [http://localhost:3000/server](http://localhost:3000/server)
