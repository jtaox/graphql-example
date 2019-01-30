const API_GRAPHQL = "http://localhost:3000/graphql";

export default (params, options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
}) => {
  return fetch(API_GRAPHQL, {
    ...options,
    body: JSON.stringify(params)
  })
    .then(r => r.json())
    .then(json => json.data);
}

