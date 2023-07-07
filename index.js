// Execute the following code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    getData();
  
    const userList = document.getElementById('user-list');
    userList.addEventListener('click', handleButtonClick);
  });
  // Fetch user data from the specified URL and process it
  function getData() {
    fetch('https://legit-api.onrender.com/users')
      .then(res => res.json())
      .then(usersData => usersData.forEach(createUserCard));
  }
  // Create a user card element based on the provided user data
  function createUserCard(users) {
    let usersList = document.getElementById('user-list');
    let userDetails = document.createElement('div');
    userDetails.classList.add('user-card');
    usersList.append(userDetails);
    userDetails.innerHTML = `
      <h3>${users.name}</h3>
      <img src="${users.image}" alt="Profile Picture">
      <p>Age: ${users.age}</p>
      <p>Years of Experience: ${users.experience}</p>
      <p id="ratings-${users.id}">Rating: ${users.ratings}</p>
      <div class="buttons">
        <button class="submit" data-id="${users.id}">Submit</button>
        <button class="like" data-id="${users.id}">Like</button>
      </div>
    `;// Set the HTML content of the user card element
  }
  
// Handle button clicks within the user-list element
  function handleButtonClick(event) {
    const target = event.target;

  
    if (target.classList.contains('submit')) {
      handleFormSubmit(target);
    } else if (target.classList.contains('like')) {
      handleLikeButtonClick(target);
    }
  }

  // Handle form submission for the submit button
  function handleFormSubmit(button) {
    button.textContent = 'Submitted';
    alert('Selection is successful');
  }
  
  // Handle button clicks for the like button 
  function handleLikeButtonClick(button) {
    button.textContent = 'Liked';
  }
  
  