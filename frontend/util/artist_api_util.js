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
  
  export const updateArtist = (formData, id) => (
    $.ajax({
      url: `/api/artists/${id}`,
      method: 'PATCH',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData
    })
  );
  
  
  export const deleteArtist = id => (
    $.ajax({
      url: `api/artists/${id}`,
      method: 'DELETE',
      id
    })
  );