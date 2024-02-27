import { ContextProvider } from "../contexts/ContextProvider"
import Home from "./Home"
import { useFonts, Lato_700Bold } from '@expo-google-fonts/lato';


const index = () => {

    let [fontsLoaded] = useFonts({
        Lato_700Bold,
    });

    if (!fontsLoaded) {
        return null
    }

    return (

        <ContextProvider>
            <Home />
        </ContextProvider>
    )
}

export default index