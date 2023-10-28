import { createContext, useState, useEffect } from "react";

export const LikeContext = createContext('');

const LikeProvider = ({ children }) => {
  const storage = localStorage.getItem("like");
  const [liked, setLiked] = useState(JSON.parse(storage) || []);

  const setProductToStoragee = (data) => {
    setLiked([...liked, data]);
  };
  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  return (
    <LikeContext.Provider value={{setProductToStoragee, liked,setLiked}}>
      {children}
    </LikeContext.Provider>
  );
};

export default LikeProvider;
