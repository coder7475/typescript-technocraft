{
  //
  // Conditional Types
  // Types that depend on another type
  type a1 = null;
  type a2 = undefined;

  type b1 = a1 extends null ? true : false; // true
  type b2 = a2 extends null ? true : false; // false


  //
}
