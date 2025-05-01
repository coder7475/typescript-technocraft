// Not Primitive Data type
// 3. Object
// Implicit
const user = {
  firstName: "Robiul",
  middleName: "Hossain",
  lastName: "Chy"
}

// Explicit
let user2: {
  // readonly 
  readonly company: "None"; // type ===> Literal Type
  firstName: string;
  middleName?: string | undefined; // Optional Type
  lastName: string;
  isMarried: boolean;
} = {
  company: "None",
  firstName: "Robiul",
  lastName: "Chy",
  isMarried: false
};

user.lastName = "Fahad";
console.log(user);

user2.middleName = "Hossain";
console.log(user2);
// user2.company = "ddda"
