import { useState, useContext, createContext } from "react";
import {getPostsRequest} from '../api/posts';

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    await getPostsRequest()
  };

  return (
    <postContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
