

const API_KEY = process.env.REACT_APP_ACCESS_KEY;


const requests = {
    fetchTrending: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchDemonSlayer: `/tv/85937?api_key=${API_KEY}&language=en-US`,
    fetchDemonSlayerImages: `/tv/85937/images?api_key=${API_KEY}&language=en-US&include_image_language=en,ja,null`,
}
export default requests;