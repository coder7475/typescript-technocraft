{
  // promise
  const createPromise = () => {
    // return 
    return new Promise((resolve, reject) => {
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
