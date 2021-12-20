var firebaseConfig = {
      apiKey: "AIzaSyCjfaK4wfcr_G3SBjQyAQ46KEciIt7yb2Q",
      authDomain: "ktwitter-cd46b.firebaseapp.com",
      databaseURL: "https://ktwitter-cd46b-default-rtdb.firebaseio.com",
      projectId: "ktwitter-cd46b",
      storageBucket: "ktwitter-cd46b.appspot.com",
      messagingSenderId: "558034473418",
      appId: "1:558034473418:web:71b4c7dcce61e74ea4bf33"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names );
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData(); 

function addRoom()
{
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout ()
{
      localStorage.removeItem ("user_name");
      localStorage.removeItem ("room_name");
      window.location = "index.html" ;
}