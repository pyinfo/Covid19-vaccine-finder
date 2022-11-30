// Realtime Database
const pin = document.getElementById("pincode");
const date = document.getElementById("date");
const btnSubmit = document.getElementById("submit");

const database = firebase.database();
const rootRef = database.ref('/users/');

btnSubmit.addEventListener('click', (e)=> {
  const autoId = rootRef.push().key
  rootRef.child(autoId).set({
    pin: pin.value,
    date: date.value
  });
});

//