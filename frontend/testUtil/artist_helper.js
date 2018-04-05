const artist1 = { id: 1, name: 'Darth Vader', email: 'dv@lucasfilms.com', bio: "best!" };
const artist2 = { id: 2, name: 'Luke Skywalker', email: 'ls@lucasfilms.com', bio: "great!" };

export const testArtist = {
  [artist1.id]: artist1,
  [artist2.id]: artist2
};