const API_KEY = 'fb3581d06c9dc8ca94d78dea9e9523ac'

const requests = {
    fetchTrending: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchTheMandalorian: `/tv/82856?api_key=${API_KEY}&language=en-US`,
    fetchTheMandalorianImages: `/tv/82856/images?api_key=${API_KEY}&language=en-US&include_image_language=en,ru,null`,
}
export default requests;