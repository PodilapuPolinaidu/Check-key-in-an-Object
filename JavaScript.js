const person = {
  name: "Polinaidu",
  Age: 21,
};
// const hasKey = 'name' in person;

const hasKey = person.hasOwnProperty("Age");
if (hasKey) {
  document.write("The Key exists");
} else {
  document.write("The key does not exists");
}
