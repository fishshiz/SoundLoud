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
    image: 'http://s3-us-west-1.amazonaws.com/soundloud-pro/artists/images/000/000/001/original/15327809_1460202317342934_2101598170_n.jpg?1515611712'
) 

demo = Artist.create!(
    name: 'demo',
    password: 'password',
    email: 'demo',
    bio: 'Hope you enjoy this demo session!'
)

remo_drive = Artist.create!(
    name: 'Remo Drive',
    password: 'rem0drive',
    email: 'remo@mail.com',
    bio: 'We\'re just a small group with a big sound.',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/artists/images/000/000/036/original/a0734144769_10.jpg'
)

wilco = Artist.create!(
    name: 'Wilco',
    password: 'wearewilc0',
    email: 'wilco@wilco.com',
    bio: 'From Chicago',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/artists/images/000/000/037/original/Wilco_MassMoca_AustinNelson.png'
)

angel_olsen = Artist.create!(
    name: 'Angel Olsen',
    password: 'angelOls3n',
    email: 'angel@gmail.com',
    bio: 'My voice is flawless.',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/artists/images/000/000/030/original/angel_olsen_by_alicia_j._rose-4_wide-dea4f4edb7703d039fae6f1bb5990fa232c18d43.jpg'
)

sufjan = Artist.create!(
    name: 'Sufjan Stevens',
    password: 'carrie&lowell',
    email: 'sufjan@gmail.com',
    bio: 'My name is Sufjan. Right now, I\'m sipping tea, petting a kitten, and typing this sentence.',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/artists/images/000/000/031/original/img_8841-1-_wide-dc1a22792a0f57e400aae94e94ec54541b9158e6.jpg'
)

big_thief = Artist.create!(
    name: 'Big Thief',
    password: 'lilcr00k',
    email: 'bigthief@gmail.com',
    bio: 'A hip new folk rock band out of Brooklyn.',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/artists/images/000/000/032/original/3_(9).jpeg'
)

sisyphus = Artist.create!(
    name: 'Sisyphus',
    password: 'sisyphus',
    email: 'isyphus@gmail.com',
    bio: 'Check out our hot new single, Calm It Down!',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/artists/images/000/000/049/original/Sisyphus-Band-Picture.jpg'
)

Track.delete_all

deer_brother = Track.create!(
    artist_id: edan.id,
    title: 'Deer Brother',
    description: '🦌',
    image: 'http://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/images/000/000/007/original/deer_brother.jpg?1515527512',
    audio: 'http://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/audios/000/000/007/original/deer_brother.mp3?1515527512',
    play_count: 10
)

no_doctor = Track.create!(
    artist_id: remo_drive.id,
    title: 'I\'m My Own Doctor',
    description: 'Let\' punk it up.',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/images/000/000/024/original/0007723125_10.jpg',
    audio: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/audios/000/000/009/original/Remo_Drive_-_Im_My_Own_Doctor.mp3',
    play_count: 8
)

art_of_almost = Track.create!(
    artist_id: wilco.id,
    title: 'Art of Almost',
    description: 'It\'s funny, we almost never made this song.',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/images/000/000/025/original/https__2F_2Fimages.genius.com_2F8a6c4605e6466df88478155f11bb44d1.320x320x1.jpg',
    audio: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/audios/000/000/025/original/Wilco_-_Art_of_almost.mp3',
    play_count: 3
)

handshake_drugs = Track.create!(
    artist_id: wilco.id,
    title: 'Handshake Drugs',
    description: 'It\'s funny, we almost never made this song.',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/images/000/000/026/original/bike-bros.png',
    audio: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/audios/000/000/026/original/Handshake_Drugs.mp3',
    play_count: 7
)

jesus_etc = Track.create!(
    artist_id: wilco.id,
    title: 'Jesus Etc.',
    description: 'You can come by anytime you want.',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/images/000/000/027/original/51YqwwndzYL._SS500.jpg',
    audio: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/audios/000/000/027/original/Wilco_-_Jesus_Etc._(Lyrics).mp3',
    play_count: 13
)

special = Track.create!(
    artist_id: angel_olsen.id,
    title: 'Special',
    description: 'Groovy ✌️',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/images/000/000/028/original/olsen_a.png',
    audio: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/audios/000/000/028/original/Angel_Olsen_-_Special_(Official_Audio).mp3',
    play_count: 12
)

ufo = Track.create!(
    artist_id: sufjan.id,
    title: 'Concerning the UFO Sighting Near Highland Illinois',
    description: 'I think the title explains itself...',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/images/000/000/029/original/060aded27bb8fbdbff6bdcda3a688fd192b3f9f6.jpeg',
    audio: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/audios/000/000/029/original/Concerning_the_UFO_Sighting_Near_Highland_Illinois_--_Sufjan_Stevens.mp3',
    play_count: 11
)

real_love = Track.create!(
    artist_id: big_thief.id,
    title: 'Real Love',
    description: 'Real love is a heart attack!',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/images/000/000/030/original/maxresdefault.jpg',
    audio: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/audios/000/000/030/original/Big_Thief_-_Real_Love.mp3',
    play_count: 10
)

calm_it_down = Track.create!(
    artist_id: sisyphus.id,
    title: 'Calm It Down',
    description: 'Please, just calm it down.',
    image: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/images/000/000/031/original/a1874439598_10.jpg',
    audio: 'https://s3-us-west-1.amazonaws.com/soundloud-pro/tracks/audios/000/000/031/original/Sisyphus_-_Calm_It_Down_(Lyric_Video).mp3',
    play_count: 9
)

Comment.delete_all

50.times do 
    Comment.create!(
    author_id: Artist.order("RANDOM()").first.id,
    track_id: Track.order("RANDOM()").first.id,
    body: Faker::RickAndMorty.quote,
    )
end


