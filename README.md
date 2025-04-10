# Robot.txt Configuration API

This service provides a RESTful API endpoint to dynamically manage and update your robots.txt file through a simple, standardized configuration schema.

## Configuration Schema

The configuration accepts a JSON structure that allows you to:
- Define user-agent rules
- Set crawl delays
- Specify allow/disallow paths
- Configure sitemaps

### Local Development
For local testing, you can use ngrok to create a secure tunnel to your development server:
1. Start your local server
2. Run ngrok (e.g., `ngrok http 3000`)
3. Use the generated ngrok URL to test your API endpoints
