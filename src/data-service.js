let people = [];

// this is basically initializing the data in the application
export const loadAllPeople = async () => {
  // using promises
  let url = "http://localhost:3000/users";
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      people = result;
      return people;
    });
};

// this is getting all of the people we have loaded
export const getAllPeople = () => {
  return people;
};
// this is getting a specific person based on the
// id specified by the caller
export const getPersonById = _id => {
  return people.find(person => {
    return person.id == _id;
  });
};

// this is getting a specific person based on the
// id specified by the caller from the database
export const getPersonById_db = _id => {
  // using promises
  let url = "http://localhost:3000/users/" + _id;
  return fetch(url).then(response => {
    return response.json();
  });
};

// this is deleting a specific person based on the
// id specified by the caller from the database
export const deletePersonById_db = _id => {
  // using promises
  let url = "http://localhost:3000/users/" + _id;
  return fetch(url, { method: "delete" }).then(response => {
    return response.json();
  });
};

// updatePersonById_db
export const updatePersonById_db = _person => {
  // using promises
  let url = "http://localhost:3000/users/" + _person.id;
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    // body data type must match "Content-Type" header
    body: JSON.stringify(_person)
  }).then(response => {
    return response.json();
  });
};

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d
