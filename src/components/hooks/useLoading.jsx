import { useState } from "react"
import SpinnerLoading from "./SpinnerLoading"


const useLoading = () => {
    const [loading, setLoading] = useState(false)

    const showLoading = () => setLoading(true)

    const hiddenLoading = () => setLoading(false)

    const loadingScreen = <SpinnerLoading />
    return { loading, showLoading, hiddenLoading, loadingScreen }
}

export default useLoading