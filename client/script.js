// Fetch users from the server and display them in a styled HTML list
async function fetchAndDisplayUsers() {
  try {
  
    const url = "http://localhost:3000/users"; // Server URL


    const response = await fetch(url); // GET request using fetch()

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); 
    }

    // Parse the JSON response
    const users = await response.json();
    console.log(users);


    // Call the function to create the user list
    createUserList(users);
  } catch (error) {
    // Log errors
    console.error("Error fetching users:", error);
  }
}

// Function to create a list of users
function createUserList(users) {
  // Create a ul element
  const userList = document.createElement("ul");
  userList.className = "user-list"; // Add a class for styling

  // Loop through the users array
  users.forEach((user) => {
    // Create an li element for each user
    const userItem = document.createElement("li");
    userItem.className = "user-item";
    userItem.style.backgroundColor = user.color; // Use user's color as background

    // Add user details to the li element using a template string
    userItem.innerHTML = `
          <div>
              <h3>${user.firstName} ${user.lastName}</h3>
              <p><strong>Username:</strong> ${user.username}</p>
              <p><strong>Favorite Color:</strong> ${user.color}</p>
          </div>
      `;

    // Append the li element to the ul element
    userList.appendChild(userItem);
  });

  // Append the ul element to the section element
  const dynamicContent = document.getElementById("dynamic-content");
  dynamicContent.innerHTML = ""; // Clear any existing content
  dynamicContent.appendChild(userList);
}

// Call the fetchAndDisplayUsers function to fetch and display the users
fetchAndDisplayUsers();
