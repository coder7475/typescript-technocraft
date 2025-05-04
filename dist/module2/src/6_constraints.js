"use strict";
{
    // add student constraint
    const addCourseToStudent = (student) => {
        return Object.assign({ course: "React" }, student);
    };
    const student1 = {
        name: "Abul",
        id: 1,
        email: 'x@gmail.com'
    };
    const result = addCourseToStudent(student1);
    // const result2 = addCourseToStudent({ emni: '' });
    console.log(result);
    const useVehicle = "bike";
    console.log(useVehicle);
    //---------------------
}
