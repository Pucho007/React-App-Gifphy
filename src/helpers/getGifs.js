

export const getGifs= async (categoria)=>{

    const url=`http://api.giphy.com/v1/gifs/search?api_key=utrsDfOqVrmLr75PrafRFpVioLlv9hFZ&q=${categoria}&limit=10`;
    const res=await fetch(url);
    const {data}=await res.json();

    const gifs=data.map(images=>{
        return {
            id: images.id,
            title: images.title,
            url: images.images?.downsized_medium.url
        }
    });

    return gifs;

}
