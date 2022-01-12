# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
breeds = Breed.create([
    {
        name: "Scottish Fold",
        description: "floppy ears",
        rare: true,
        image_url: "http://placekitten.com/g/200/300"
    },
    {
        name: "Sphynx",
        description: "nekked",
        rare: true,
        image_url: "http://placekitten.com/g/200/300"
    },
    {
        name: "Persian",
        description: "Smush",
        rare: true,
        image_url: "http://placekitten.com/g/200/300"
    },
    
])

cats = Cat.create([
    {
        name: "Roger",
        age: 5,
        gender: "male",
        breed: breeds.first,
        image_url: "http://placekitten.com/g/200/300"
    },
    {
        name: "Stacy",
        age: 3,
        gender: "female",
        breed: breeds.first,
        image_url: "http://placekitten.com/g/200/300"
    },
])