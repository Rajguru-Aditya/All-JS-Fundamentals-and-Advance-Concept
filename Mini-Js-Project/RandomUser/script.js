let userData = fetch("https://randomuser.me/api/");
console.log(userData);
userData.then((response) => {
    // console.log(response.json());
    return response.json();
}).then ((data) => {
    let name = (data.results[0].name.first + ' ' + data.results[0].name.last);
    console.log('Email: ',data.results[0].email);
    console.log('Gender: ',data.results[0].gender);
    console.log('Username: ',data.results[0].login.username);
    console.log('Password: ',data.results[0].login.password);
    console.log('Phone: ',data.results[0].phone);
    document.getElementById('name').innerText = name
    let profile = data.results[0].picture.large;
    document.getElementById('pic').src = profile;
}).catch((Error) => {
    
})