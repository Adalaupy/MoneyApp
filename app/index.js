import { ContextProvider } from "../contexts/ContextProvider"
import Home from "./Home"


const index = () => {

    return (

        <ContextProvider>
            <Home />
        </ContextProvider>
    )
}

export default index