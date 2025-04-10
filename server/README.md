# Project Setup and Running Instructions

## Initial Setup
1. Install the required dependencies:
   ```bash
   npm install express
   ```

2. Start the server:
   ```bash
   node server.js
   ```
   The server will run on port 3002.

## Setting up HTTPS for Local Development
To test webhook functionality, you'll need to expose your local server via HTTPS. We use ngrok for this purpose.

1. Install ngrok globally (if not already installed):
   ```bash
   npm install -g ngrok
   ```

2. Configure ngrok with your authentication token:
   ```bash
   ngrok config add-authtoken 2vXpvhCXO99ISRqPmvnAshl4qu7_2t3ZGA3YUtBg8R4bgV12u
   ```

3. Start ngrok to create a tunnel to your local server:
   ```bash
   ngrok http 3002
   ```

This will provide you with a public HTTPS URL that forwards to your local development server.
