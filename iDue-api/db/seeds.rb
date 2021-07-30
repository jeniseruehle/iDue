# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

List.destroy_all
Item.destroy_all

dress = List.create(title: "Dress")
venue = List.create(title: "Venue")
flowers = List.create(title: "Flowers")
music = List.create(title: "Music")
food = List.create(title: "Food")

the_dress = Item.create(name: "Maggie Sottero", description: "Dublin mermaid gown, Ivory over Nude.", duedate: "08/04/2021", list_id: dress.id)
garden = Item.create(name: "Botanical Gardens", description: "Norfolk Botanical Gardens, Rose Garden package.", duedate: "10/11/2021", list_id: venue.id)
florist = Item.create(name: "Family friend", description: "Rachel does flowers and has offered to do them for free as a wedding gift!", duedate: "04/04/2022", list_id: flowers.id)
dj = Item.create(name: "Spectrum Events", description: "Possible contender for music and decor, need to interview djs.", duedate: "09/13/2021", list_id: music.id)
caterer = Item.create(name: "Ruehle Catering Co.", description: "So many options for food packages, including vegan options. Need to decide on buffet or plated dinner.", duedate: "12/14/2021", list_id: food.id)
