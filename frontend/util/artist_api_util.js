export const fetchArtist = id => (
    $.ajax({
      url: `api/artists/${id}`,
      method: 'GET',
      id
    })
  );
  
  export const fetchArtists = () => (
    $.ajax({
      url: `api/artists`,
      method: 'GET',
    })
  );
  
  export const updateArtist = artist => (
    $.ajax({
      url: `api/artist/${artist.id}`,
      method: 'PATCH',
      processData: false,
      contentType: false,
      data: artist,
    })
  );
  
  export const deleteArtist = id => (
    $.ajax({
      url: `api/artists/${id}`,
      method: 'DELETE',
      id
    })
  );