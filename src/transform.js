function groupAdultsByAgeRange(people) {
  const over18 = people.filter(person => person.age >= 18);

  const grouping = over18.reduce((acc, person) => {
    if (person.age <= 20) {
      if (!acc["20 and younger"]) {
        acc = { ...acc, ["20 and younger"]: [] };
      }
      acc["20 and younger"].push(person);
      return acc;
    }
    if (person.age < 31) {
      if (!acc["21-30"]) {
        acc = { ...acc, ["21-30"]: [] };
      }
      acc["21-30"].push(person);
      return acc;
    }
    if (person.age < 41) {
      if (!acc["31-40"]) {
        acc = { ...acc, ["31-40"]: [] };
      }
      acc["31-40"].push(person);
      return acc;
    }
    if (person.age < 51) {
      if (!acc["41-50"]) {
        acc = { ...acc, ["41-50"]: [] };
      }
      acc["41-50"].push(person);
      return acc;
    } else {
      if (!acc[["51 and older"]]) {
        acc = { ...acc, [["51 and older"]]: [] };
      }
      acc["51 and older"].push(person);
    }
    return acc;
  }, {});

  return grouping;
}

module.exports = { groupAdultsByAgeRange };
