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
firebase.analytics();

user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name1:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
  }