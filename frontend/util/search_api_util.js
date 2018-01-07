export const searchDB = (query) => (
    $.ajax({
      method: 'GET',
      url: 'api/search',
      data: { search: { query }}
    })
  );