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




NEXT_PUBLIC_SANITY_PROJECT_ID="wqb0p6im"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-10-28" # Optional - The API version provided to the Sanity Client
NEXT_PUBLIC_SANITY_STUDIO_URL="" #Optional, defaults to http://localhost:3333
SANITY_API_READ_TOKEN="sk7Fr5wIFK9Uq7A07Nm3vx2PrCbAt25xq1XhwyeIdVxHjAiCHI3hwvEjNeSL2Z05LXqERiHFhPLnLREg0IKCvlkOgf8XWskbxz6M8JVQON6gD4umasfME5OwThQ6kPH45ZTkGXM4V2O6oXlzSAksE8WMJyQltoxOpIF68fq92Pi7tgtJzJ5S"

SANITY_STUDIO_PROJECT_ID="wqb0p6im"
SANITY_STUDIO_DATASET="production"
SANITY_STUDIO_PREVIEW_URL="" #Optional - defaults to http://localhost:3000
SANITY_STUDIO_STUDIO_HOST="" #Optional