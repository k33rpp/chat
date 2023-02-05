const firebaseConfig = {
    apiKey: "AIzaSyD6KQTmgubfmVwVOJJivd6MVc-BBFmeyVg",
    authDomain: "kwitter-5d740.firebaseapp.com",
    databaseURL: "https://kwitter-5d740-default-rtdb.firebaseio.com",
    projectId: "kwitter-5d740",
    storageBucket: "kwitter-5d740.appspot.com",
    messagingSenderId: "184638720527",
    appId: "1:184638720527:web:0c5d2f2fb5600d3e1ff17a"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
 function addRoom(){
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"adding room name"
       });
       localStorage.setItem("room_name",room_name);
       window.location="kwitterpage.html";
 }
 function getdata()
 {
       firebase.database().ref("/").on('value',function (snapshot){
             document.getElementById("output").innerHTML=" ";
 snapshot.forEach(function(childsnapshot){
       childKey=childsnapshot.key;
       Room_names=childKey;
       console.log("room name -"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
       });
 });
 } 
 getData();
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitterpage.html";
 }
 
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="Index.html";
 }