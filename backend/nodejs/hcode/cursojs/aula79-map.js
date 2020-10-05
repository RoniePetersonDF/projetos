const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
function dobrar(value, index, array) {
    return value * 2;
}
const newNumbers = numbers.map(dobrar);
const newNumbers2 = numbers.map(function(value){
    return value * 2;
});
const newNumbers3 = numbers.map(value => value * 2);
console.log(newNumbers3);

const peoples = [
    {name: 'Luiz', age: 62 },
    {name: 'Maria', age: 23 },
    {name: 'Eduardo', age: 55 },
    {name: 'Letícia', age: 19 },
    {name: 'Rosana', age: 32 },
    {name: 'Wallace', age: 47 },
];

const names = peoples.map(people => people.name);
console.log(names);

const ages = peoples.map(value => ({age: value.age}));
console.log(ages);

const peoplesWithId = peoples.map(function(value, index){
    value.id = index + 1;
    return value;
});
console.log(peoplesWithId, peoples);

const peoplesWithId2 = peoples.map(function(value, index){
    const newValue = {... value};
    newValue.id = index + 1;
    return newValue;
});
console.log(peoplesWithId2, peoples);
