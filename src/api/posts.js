import axios from 'axios';

export const getPostsRequest = async () =>{
    return await axios.get('/posts')
}