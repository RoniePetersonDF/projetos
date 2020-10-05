const peoples = [
    {name: 'Luiz', age: 62 },
    {name: 'Maria', age: 23 },
    {name: 'Eduardo', age: 55 },
    {name: 'Letícia', age: 19 },
    {name: 'Rosana', age: 32 },
    {name: 'Wallace', age: 47 },
];

const older = peoples.reduce(function(acc, value){
    console.log(acc, value);
    // if(acc.idade > value.idade) return acc
    // return value;
});

console.log(older);