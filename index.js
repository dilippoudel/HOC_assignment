function checkEquality(a, b) {
  return a === b ? 'equal' : 'not equal'
}
console.log(checkEquality(10, 12))
let math = {
  pi: 3.14,
}
Object.freeze(math)
math.pi = 'abc'
console.log(math.pi)
// arrow functions
let largeNum = (a, b) => (a > b ? a : a == b ? 'equal' : b)
console.log(largeNum(5, 5))
let nums = [1, 3, 4, 2, 5, 7]
let sum = nums.reduce((a, b) => a + b)
console.log(sum)
// rest operator
let sumInRestOperator = (...args) => {
  return args.reduce((a, b) => a + b)
}
console.log(sumInRestOperator(1, 2, 3, 8, 5))
// spread operator
// spread operator is used to combine one or more arrays whithout modifying the original arrays
let names = ['Dilip', 'Samita', 'Harray']
console.log([...names, 3, 4])
// destructuring with object
let elements = {
  firstValue: 'abc',
  secondValue: 'pqr',
}
let { firstValue, secondValue } = elements
console.log(firstValue, secondValue)
let temp = {
  today: { min: 10, max: 20 },
  tomorrow: {
    min: 100,
    max: 120,
    location: {
      lat: 24.38,
      lon: 14.12,
    },
  },
}
let {
  tomorrow: { max: maxTemp },
} = temp

console.log(maxTemp)
// for each method
let numsInAry = [2, 3, 4, 5, 6, 7, 8]
let output = []
numsInAry.forEach((item) => {
  if (item % 2 === 0) output.push(item)
})
console.log(output)
// filter method
let results = numsInAry.filter((item) => item % 2 === 0)
console.log(results)

// find method
let findData = numsInAry.find((item) => item % 2 === 0)
console.log(findData)

// map method
let mapData = numsInAry.map((item) => {
  return { item: item % 2 === 0 }
})
console.log(typeof mapData)

// class task
let employees = [
  {
    id: 1,
    name: 'John',
    age: 28,
    designation: 'accountant',
    salary: 27000,
    phone: '+97798457852',
  },
  {
    id: 2,
    name: 'Jack',
    age: 38,
    designation: 'designation',
    salary: 39000,
    phone: '+97798454622',
  },
  {
    id: 3,
    name: 'Roshan',
    age: 22,
    designation: 'accountant',
    salary: 42000,
    phone: '+97798535252',
  },
  {
    id: 4,
    name: 'Amir',
    age: 39,
    designation: 'designation',
    salary: 79000,
    phone: '+97798457455',
  },
  {
    id: 5,
    name: 'Dilip',
    age: 27,
    designation: 'developer',
    salary: 47000,
    phone: '+97798457502',
  },
  {
    id: 6,
    name: 'Pooja',
    age: 28,
    designation: 'developer',
    salary: 87000,
    phone: '+977984578442',
  },
  {
    id: 7,
    name: 'Samir',
    age: 42,
    designation: 'designer',
    salary: 67000,
    phone: '+97798457101',
  },
  {
    id: 8,
    name: 'Samita',
    age: 23,
    designation: 'developer',
    salary: 52000,
    phone: '+97798457003',
  },
  {
    id: 8,
    name: 'Jess',
    age: 23,
    designation: 'developer',
    salary: 52000,
    phone: '+97798457003',
  },
]
// filtering all developers
let developers = employees.filter(
  (employee) => employee.designation === 'developer',
)
console.log('All developers', developers)

// filtering employee below age 30
let emplyee_underage_thirty = employees.filter((employee) => employee.age < 30)
console.log('employee under age 30', emplyee_underage_thirty)

// getting all employeees below age 30 and salary above 70K
let employee_list = employees.filter((e) => e.age < 30 && e.salary > 70000)
console.log('employee under age 30 and salary above 70K', employee_list)

// finding an accountant with salary below 40K
let acc = employees.filter(
  (acc) => acc.salary < 40000 && acc.designation === 'accountant',
)
console.log('accountant having salary more than 40K', acc)
// finding an employee with ID 5
let employee = employees.find((e) => e.id === 5)
console.log(employee)

// get the employee with name Jess
let findingJess = employees.filter((e) => e.name === 'Jess')
console.log('all employee whose name is Jess', findingJess)
