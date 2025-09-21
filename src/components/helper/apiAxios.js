/** @format */

import axios from "axios";

const TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDlkMGY5MDkxNDVmY2UzZGJkYzc5OTUzYzUzMjViOSIsIm5iZiI6MTY3NjQwMDU3MC4wNiwic3ViIjoiNjNlYmQ3YmFmOTI1MzIwMGMzZmY4Y2U5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KVDkP98qbVjKFqrUhatyhO8pcAbc267OkS8VwdWKxmc`;


const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
});

export default api
