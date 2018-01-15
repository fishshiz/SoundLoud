# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.delete_all

edan = Artist.create!(
    name: 'Edan',
    password: 'winslow',
    email: 'edan@lewisarts.com',
    bio: 'Hey there, my name is Edan. I\'m an engineer and musician and I <3 music.',
    image: 'http://s3-us-west-1.amazonaws.com/soundloud-dev/artists/images/000/000/001/original/15327809_1460202317342934_2101598170_n.jpg?1515611712'
)

demo = Artist.create!(
    name: 'demo',
    password: 'password',
    email: 'demo',
    bio: 'Hope you enjoy this demo session!'
)

Track.delete_all

deer_brother = Track.create!(
    artist_id: edan.id,
    title: 'Deer Brother',
    description: '🦌',
    image: 'http://s3-us-west-1.amazonaws.com/soundloud-dev/tracks/images/000/000/007/original/deer_brother.jpg?1515527512',
    audio: 'http://s3-us-west-1.amazonaws.com/soundloud-dev/tracks/audios/000/000/007/original/deer_brother.mp3?1515527512',
    play_count: 10
)