export async function fetchTopTvSeries() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=728da900e98fea5404286dece66133fe')
        const result = await response.json()
        return result.results
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching Top Tv Series')
    }

}