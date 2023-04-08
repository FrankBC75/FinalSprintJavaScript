fetch('people.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


fetch('people.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(record => console.log(record.name));
  })
  .catch(error => console.error(error));
  

  function getNames(data) {
    let names = '';
    data.forEach(record => {
      names += record.name + '\n';
    });
    return names;
  }
  
  function getAges(data) {
    let ages = '';
    data.forEach(record => {
      ages += record.age + '\n';
    });
    return ages;
  }
  function getHobbies(data) {
    let hobbies = '';
    data.forEach(record => {
      hobbies += record.hobbies.join(', ') + '\n';
    });
    return hobbies;
  }