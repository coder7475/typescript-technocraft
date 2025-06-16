{
  // transform js to ts - first look at function arguments
  type CustomerUser = {
    id: number;
    firstName: string;
    lastName?: string;
    age: number;
    score?: number;
  };

  type CustomerKeys = keyof CustomerUser;

  type FilteredCriteria = {
    [K in CustomerKeys]?: CustomerUser[K];
  };

  type FieldToAggregate = "score" | "age";

  type TransformedUser = {
    id: number;
    fullName: string;
    score: number;
    age: number;
  };

  function processData(
    users: CustomerUser[],
    criteria: FilteredCriteria = {},
    fieldToAggregate: FieldToAggregate,
  ) {
    const filteredUsers = users.filter((user) => {
      return Object.entries(criteria).every(
        ([key, value]) => user[key as CustomerKeys] === value,
      );
    });

    const aggregatedData = fieldToAggregate.reduce(
      (acc, field) => {
        acc[field] = filteredUsers.reduce(
          (sum, user) => sum + user[field as FilteredCriteria]!,
          0,
        );
        return acc;
      },
      {} as Record<FieldToAggregate, number>,
    );
  }
}
