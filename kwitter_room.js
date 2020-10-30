// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBxhN5whshg6N9CdcB9BvsLvR1gWsGYUqw",
      authDomain: "class-test-81d6d.firebaseapp.com",
      databaseURL: "https://class-test-81d6d.firebaseio.com",
      projectId: "class-test-81d6d",
      storageBucket: "class-test-81d6d.appspot.com",
      messagingSenderId: "76465595814",
      appId: "1:76465595814:web:50205ecd3abcde4f215b67"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
