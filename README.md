# StudyMate AI

## Setup
1. Extract this ZIP and open the folder in VS Code.
2. Install Node.js if it is not already installed.
3. Open the terminal and run:
   `cd server`
   `npm install`
4. Copy `server/.env.example` to a new file named `server/.env`.
5. Put your OpenAI API key in `server/.env`.
6. Run `npm start`.
7. Open http://localhost:3000 in your browser.

If `gpt-5.5` is unavailable to your API account, change `OPENAI_MODEL` in `server/.env` to a model available to your account.

Keep your API key private. Never upload `server/.env` to GitHub. API usage may incur separate charges; a ChatGPT subscription does not automatically include API credits.
