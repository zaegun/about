import { useEffect } from 'react';
import { useNavigate} from "react-router-dom";

function TY() {
    const navigate = useNavigate()

    function goToMain() {
        navigate("/About")
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            goToMain()
        }, 4000);
        return () => clearTimeout(timer)
    })
    return(
        <section className="node min-h-screen w-3/4 mx-auto mb-10 sm:w-1/2 timer-class">
            <h1 className='head-fade text-center opacity-0'>Thank You!</h1>
            <h2 className='sub-head-fade text-center opacity-0'>I will get back to you as soon as I can!</h2>
            <p className='sub-head-fade text-center opacity-0'>Redirecting to Main Page...</p>
        </section>

    );
}

export default TY;