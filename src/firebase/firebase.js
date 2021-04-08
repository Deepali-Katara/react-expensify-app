import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyC8nXf-8AIbX0giFOPyq8-Z6M217JFsgH4",
  authDomain: "expensify-2b6e1.firebaseapp.com",
  databaseURL: "https://expensify-2b6e1-default-rtdb.firebaseio.com",
  projectId: "expensify-2b6e1",
  storageBucket: "expensify-2b6e1.appspot.com",
  messagingSenderId: "465127340950",
  appId: "1:465127340950:web:913f0e9c259d905969bbb7",
  measurementId: "G-373SVDNF78",
};
firebase.initializeApp(config);

const database = firebase.database();
// child_removed
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 976123498763,
// });

// database.ref("notes").push({
//   title: "what are you doing",
//   body: "Go FOR DINNER",
// });

// database.ref("notes").set(notes);
// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// firebase
//   .database()
//   .ref()
//   .set({
//     name: "Deepali Katara",
//     age: 21,
//     stressLevel: 6,
//     job: {
//       title: "Software Engineer ",
//       company: "Source soft",
//     },
//     isSingle: true,
//     location: {
//       city: "Mathura",
//       country: "India",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((e) => {
//     console.log("this failed", e);
//   });

// database.ref("isSingle").set(null);

// database.ref().update({
//   stressLevel: 6,
//   "job/company": "amazon",
//   "location/city": "Delhi",
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Did not remove");
//   })
//   .catch((e) => {
//     console.log("This will remove ", e);
//   });
