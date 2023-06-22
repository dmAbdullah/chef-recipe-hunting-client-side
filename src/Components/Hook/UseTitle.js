import { useEffect } from "react"

const useTitle= title=> {
    useEffect(()=> {
document.title= `${title}-CibO ItalianO`;
    }, [title])
}

export default useTitle;