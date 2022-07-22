import { createContext, useContext } from 'react'

const MainContext = createContext ()

export const useDrawerContext = () => {
    return useContext(MainContext);

}

export function Context(props) {

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
        }, 200)
    }


    return (
        <MainContext.Provider value={{scrollToTop}}>
          {props.children}
        </MainContext.Provider>
    )
}