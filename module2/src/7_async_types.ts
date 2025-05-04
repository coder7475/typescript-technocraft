{
  // fetch todos from jsonplaceholders
  const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
  }
  getTodos();

  // promise
  const createPromise = (): Promise<string> => {
    // return a new promise
    return new Promise<string>((resolve, reject) => {
      const data: string = 'hello promise';

      if (data) {
        resolve(data);
      } else {
        reject('error');
      }

    })
  }

  // show data
  const showData = async () => {
    const result = await createPromise();
    console.log(result);
  }

  // call show data function
  showData();

  //
}
