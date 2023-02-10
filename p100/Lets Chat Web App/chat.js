// Your web app's Firebase configuration

//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyA9d_MZoCQ25GwSu3q6cBaUu5w70XeBdok",
    authDomain: "kwitter-72e01.firebaseapp.com",
    databaseURL: "https://kwitter-72e01-default-rtdb.firebaseio.com",
    projectId: "kwitter-72e01",
    storageBucket: "kwitter-72e01.appspot.com",
    messagingSenderId: "180980812756",
    appId: "1:180980812756:web:00d163145285a11f8fe441"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
}



