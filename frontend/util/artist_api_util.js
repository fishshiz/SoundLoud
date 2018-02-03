export const fetchArtist = id =>
  $.ajax({
    url: `api/artists/${id}`,
    method: "GET"
  });

export const fetchArtists = ids =>
  $.ajax({
    url: `api/artists`,
    method: "GET",
    data: ids
  });

export const updateArtist = (formData, id) =>
  $.ajax({
    url: `/api/artists/${id}`,
    method: "PATCH",
    processData: false,
    contentType: false,
    dataType: "json",
    data: formData
  });

export const deleteArtist = id =>
  $.ajax({
    url: `api/artists/${id}`,
    method: "DELETE",
    id
  });
