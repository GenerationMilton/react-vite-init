//async-away

export const getImage = async()=> {

    try{
        const apiKey='834FTFTf5MjAyOHdmFCHq9wkXbWP5IlJ';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
    
        const { url } = data.images.original; 
    
        return url;

    }catch(error){
        
        return 'No se encontro la imagen';
    }

    
}

getImage();


