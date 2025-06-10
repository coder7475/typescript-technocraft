{
  // type alias - type
  // create custom type
  // type Name = string;

  type ID = string | number;

  function printId(id: ID) {
    console.log(id);
  }

  // use
  printId("123");
  printId(123);

  // more used for object
  type User = {
    id: ID;
    name: string;
    skills: string[];
  };

  // function signature
  type CB = () => void;

  function tesCB(cd: CB) {
    return cd();
  }

  tesCB(() => console.log("test"));

  // second
  type callB = (arg1: string, arg2: number) => string;

  function cb2(cb: callB) {
    return cb("test", 1);
  }

  cb2((arg1, arg2) => {
    console.log(arg1, arg2);
    return "test";
  });
}
