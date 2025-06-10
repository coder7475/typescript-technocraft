{
  ///
  // union type - multiple union
  type ID = string | number;

  type Admin = {
    id: ID;
    role: "admin";
    fullControl: boolean;
  };

  type Manager = {
    id: ID;
    role: "manager";
  };

  type USER = Admin | Manager;

  function doSomething(user: USER) {
    if (user.role === "admin") {
      user.fullControl = true;
    } else {
      console.log("I don't have fullControl");
    }
  }

  // Error Response
  type ErrorResponse = {
    error: true;
    message: string;
  };

  type SuccessResponse = {
    error: false;
    message: string;
  };

  type ApiResponse = ErrorResponse | SuccessResponse;

  function handleRespone(response: ApiResponse) {
    if (response.error) {
      console.log(response.message);
    } else {
      console.log(response.message);
    }
  }

  ////
}
