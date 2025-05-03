{
  //--------------------
  // Constraints
  interface Student {
    name: string;
    id: number;
    email: string;
  }
  // add student constraint
  const addCourseToStudent = <T extends Student>(student: T) => {
    return {
      course: "React",
      ...student
    }
  }

  const student1 = {
    name: "Abul",
    id: 1,
    email: 'x@gmail.com'
  }

  const result = addCourseToStudent(student1);
  // const result2 = addCourseToStudent({ emni: '' });

  console.log(result);
  //---------------------
}
