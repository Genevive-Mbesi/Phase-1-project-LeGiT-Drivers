document.addEventListener('DOMContentLoaded', function() {
    getData();
  
    const userList = document.getElementById('user-list');
    userList.addEventListener('click', handleButtonClick);
  });
  
  function getData() {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(usersData => usersData.forEach(createUserCard));
  }
  
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
    `;
  }
  
  function handleButtonClick(event) {
    const target = event.target;
  
    if (target.classList.contains('submit')) {
      handleFormSubmit(target);
    } else if (target.classList.contains('like')) {
      handleLikeButtonClick(target);
    }
  }
  
  function handleFormSubmit(button) {
    button.textContent = 'Submitted';
    alert('Selection is successful');
  }
  
  function handleLikeButtonClick(button) {
    button.textContent = 'Liked';
  }
  