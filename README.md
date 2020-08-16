## Chime-clone

Amazon chime clone basic idea of this app is to be able to create new chat rooms move between chats without reloading page, authentication using google(security), and post messages into chat.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Hosted`
This is app is using Google's Firebase to host the app as well as storing the database.
[chime-clone](https://slack-clone-e0e94.web.app/)

### `Functions used`

During this build I was able to take advantage of Reacts; state and props passing user data between files and database.
I also implemented Reacts, Router and Switch to keep track of 'chat rooms' and switching between rooms and pulling that Id to match the current URL.
Also implemented Reacts; context API to always lisen and fire when ex. a new chat room is created or a new message is posted taking advantage of reducer, initialState, and children(App)

## Built With

* [React](https://github.com/facebook/create-react-app) - The front-end framework used
* [Material UI](https://material-ui.com/) - CSS modules
* [Firebase](https://firebase.google.com/) - noSQL database storage
* [Firebase Hosting](https://firebase.google.com/) - Hosting provider

## Authors
* **Alfredo Barillas** - *Programmer*