export const GetMovieData = async () => {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?i=tt389619&apikey=${
        import.meta.env.VITE_API_KEY
      }&s=titanic&page=1`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
