const db = firebase.firestore();

// Fetch and display blog posts
function fetchBlogs() {
    const blogContainer = document.getElementById('blogs');

    db.collection('blogs').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            const blogData = doc.data();
            const blogElement = document.createElement('div');
            blogElement.innerHTML = `
                <h2>${blogData.title}</h2>
                <p>${blogData.content}</p>
                <small>Written by: ${blogData.author}</small>
            `;
            blogContainer.appendChild(blogElement);
        });
    });
}
