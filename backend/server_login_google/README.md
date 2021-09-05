# Log in with Google Example

## Getting started
Install dependencies:
```
yarn
```
or
```
npm i
```

Create a `.env` file:
```
touch .env
```

Add the following to your `.env` file:
```
PORT=8080
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET
SESSION_SECRET=SOME_STRING_THATS_IDEALLY_NOT_EASY_TO_GUESS
```
The Google variables are found on your Google Developer Console. Populate the session secret with a random string.

Start the server:
```
node server
```