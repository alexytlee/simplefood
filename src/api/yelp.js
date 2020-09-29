import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer w5JLzY43ImVzeuEoa__myfuZPYHbTOgM54Iqm1c4ZBb-4fIEgT2FxbicWbhJ4Dq7fQJo78OThiNVbOaQ7ZlmwNKxvdeye8rydFTGxOC6KKEWEyZmahn2T6P3uEhKX3Yx",
  },
});
