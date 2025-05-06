{
  //
  // type guard - type narrowing
  type ParamAdd = string | number

  const add = (param1: ParamAdd, param2: ParamAdd) => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString()
    }
  }


  console.log(add(1, 2));
  console.log(add('1', 2));
  console.log(add('1', '2'));

  // in guard
  type user = {
    name: string;
  }

  type admin = {
    name: string;
    role: "admin";
  }

  type User = user | admin;

  const getUser = (user: User) => {
    if ("role" in user) {
      console.log(`${user.name} is ${user.role}`)
    } else {
      console.log(`${user.name} is normal user`)
    }
    return user.name;
  }

  const user1 = {
    name: 'fahad',
    role: 'admin'
  }

  console.log(getUser(user1))

  const user2 = {
    name: 'asif',
  }

  console.log(getUser((user2)))



  //
}
