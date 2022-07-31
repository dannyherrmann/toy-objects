const toys = [

    {
        id: 1,
        name: "Legos",
        manufacturer: "The Lego Group",
        price: 10,
        weight: 1.2
    }
    ,
    {
        id: 2, 
        name: "The Play Gym",
        manufacturer: "Lovevery",
        price: 140,
        weight: 2
    }
    ,
    {
        id: 3,
        name: "Explore & More Baby's View 3- Stage Activity Center",
        manufacturer: "Skip Hop",
        price: 141.99,
        weight: 15
    }

]

console.log('\nToys #1\n');
console.log(toys)

const newToy = {
    id: 4, 
    name: "Buzz Lightyear",
    manufacturer: "Disney",
    price: 50,
    weight: 5
}

toys.push(newToy)

console.log('\nToys #2\n');
console.log(toys);


console.log('\n**loop**\n')
for (const toyName of toys) {
    console.log(toyName.name)
}