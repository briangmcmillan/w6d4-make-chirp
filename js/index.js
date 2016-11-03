var signup = document.querySelector('#signup')

signup.addEventListener('click', signupHandler)

function signupHandler() {
    var firstName = document.querySelector('#firstName').value
    var lastName = document.querySelector('#lastName').value
    var username = document.querySelector('#username').value
    var password = document.querySelector('#password').value

    fetch('https://9326a318.ngrok.io/users', {
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(signedupHandler)
}

function signedupHandler(response){
    if (typeof response.user != 'undefined'){
    //Saving return API data
    sessionStorage.setItem('chirp', response.user.api_token)
    //Redirecting user to new page
    window.location.href = '/photos.html'
    }
    else {
        response.forEach(function(error) {
            var errorDiv = document.createElement('div')
            errorDiv.classList.add('alert', 'alert-danger')
            errorDiv.innerHTML = error
            document.querySelector('#errors').appendChild(errorDiv)
        })
    }
}
