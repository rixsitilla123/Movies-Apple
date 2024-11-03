import { createContext, useState } from "react";
export const Context = createContext()
export const ActionContext = ({ children }) => {
	const [likedList, setLikedList] = useState([])
	const [savedList, setSavedist] = useState([])
	return <Context.Provider value={{ likedList, setLikedList, savedList, setSavedist }}>{children}</Context.Provider>
}