const person = {
  birthyear: 1984,
  employedYear: 2013,

  calcAge: function () {
    this.age = 2023 - this.birthyear;
    return this.age;
  },

  retirementByAge: function () {
    this.retirementByAge = 60 - this.age;
    return this.retirementByAge;
  },

  calcYearsOfService: function () {
    this.YIS = 2023 - this.employedYear;
    return this.YIS;
  },

  retirementByYearsInService: function () {
    this.retirementByYearsInService = 35 - this.YIS;
    return this.retirementByYearsInService;
  }
};

console.log(
  `This person is ${person.calcAge()} years old and has spent ${person.calcYearsOfService()} years in service. He/She is to retire by age in ${person.retirementByAge() + 2023} in ${person.retirementByAge} year(s) time or retire by years in service in ${person.retirementByYearsInService() + 2023} in ${person.retirementByYearsInService} year(s) time.`
);

if (person.retirementByAge < 0 || person.retirementByYearsInService < 0) {
  console.log(`He/She should have retired`);
} else if (
  person.retirementByAge > 0 &&
  person.retirementByYearsInService > 0
) {
  console.log(`He/She is not retiring yet`);
} else if (
  person.retirementByAge > 0 &&
  person.retirementByYearsInService === 0
) {
  console.log(
    `He/She is retiring this year after spending ${person.YIS} years in service.`
  );
} else if (
  person.retirementByAge === 0 &&
  person.retirementByYearsInService > 0
) {
  console.log(
    `He/She is retiring this year beacuse he/she ${person.age} years old.`
  );
} else if (
  person.retirementByAge === 0 &&
  person.retirementByYearsInService === 0
) {
  console.log(
    `He/She is retiring this year beacuse he/she is ${person.age} years old and has spent ${person.YIS} years in service.`
  );
} else {
  console.log("--");
}
