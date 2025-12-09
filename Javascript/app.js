// Get username from URL query parameter
const params = new URLSearchParams(window.location.search);
const login = params.get("login");

const detailsDiv = document.getElementById("details");

if (login) {
  fetch(`https://api.github.com/users/${login}`)
    .then((res) => res.json())
    .then((user) => {
      detailsDiv.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}" />
        <h2>UserId: ${user.id}</h2>
        <h2>Login: ${user.login}</h2>
        <h2>Name: ${user.name ? user.name : "N/A"}</h2>
        <h2>Type: ${user.type}</h2>
        <h2>Location: ${user.location ? user.location : "N/A"}</h2>
        <h2>Public Repos: ${user.public_repos}</h2>
        <h2>Followers: ${user.followers}</h2>
        <h2>Following: ${user.following}</h2>
      `;
    })
    .catch((err) => {
      detailsDiv.innerHTML = "Error loading user details.";
      console.log(err);
    });
} else {
  detailsDiv.innerHTML = "No user specified.";
}