{
  ///
  type ID = number | string;

  type Person = {
    id: ID;
    name: string;
    age: number;
  };

  // use intersection
  type Employee = Person & {
    role: "employee";
    salary: number;
  };

  type Customer = Person & {
    role: "customer";
    balance: number;
  };

  const user: Customer = {
    id: 21,
    name: "John",
    age: 30,
    role: "customer",
    balance: 3331,
  };

  // React example
  type BaseProps = {
    id: string;
    className?: string;
  };

  type ButtonProps = BaseProps & {
    label: string;
    onClick: () => void;
  };

  type InputProps = BaseProps & {
    value: string;
    OnChange: (value: string) => void;
  };

  ///
}
