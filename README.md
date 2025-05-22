
# Todo-Summary-Assistant
AI-powered to-do list manager with real-time Slack integration, built using React and Spring Boot.
=======
# Todo Summary Assistant - Sushma Patel N - Destination Technologies

This is a full-stack project that allows users to manage their to-dos, generate summaries using OpenAI, and send the summaries to a Slack channel.

## Tech Stack
- **Frontend**: React
- **Backend**: Spring Boot
- **Database**: PostgreSQL (can be hosted on Supabase)
- **LLM**: OpenAI API
- **Slack**: Incoming Webhooks

## Project Structure
- `frontend/` — React app
- `backend/` — Spring Boot app with LLM & Slack integration

## Setup Instructions

### Backend
1. Go to the `backend/` directory.
2. Rename `.env.example` to `.env` and fill in your API keys.
3. Run the Spring Boot app (`TodoSummaryApplication.java`).

### Frontend
1. Go to the `frontend/` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the frontend.
4. Ensure the backend is running at `http://localhost:8080`.

## Slack & OpenAI Setup
- **Slack**: Create an incoming webhook at [Slack API](https://api.slack.com/messaging/webhooks).
- **OpenAI**: Get your API key from [OpenAI API Keys](https://platform.openai.com/account/api-keys).

## Author
Sushma Patel  N 
Destination Technologies
