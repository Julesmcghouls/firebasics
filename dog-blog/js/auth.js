// Register a new user
function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User registered:', userCredential.user);
            window.location.href = 'login.html';  // Redirect to login page
        })
        .catch((error) => {
            console.error('Error registering user:', error.message);
        });
}

// Login an existing user
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
            window.location.href = 'blog.html';  // Redirect to blog creation page
        })
        .catch((error) => {
            console.error('Error logging in user:', error.message);
        });
}

// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('User is logged in:', user);
    } else {
        console.log('No user is logged in');
    }
});
