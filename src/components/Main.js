import '../stylesheets/Main.css';
import { useNavigate} from "react-router-dom";

function Main() {
    const navigate = useNavigate()

    function animEnd() {
        navigate("/About")
    }

    return(
        <div className="grid grid-flow-row grid-flow-col justify-center items-center gap-x-4 ">
            <div className="row-span-2 col-span-1">
                <span className="hi-font">Hi!</span>
            </div>
            <div className="row-start-1 row-span-1 col-span-2 h-18 overflow-hidden">
                <div className="iam-item">
                    <span className="iam-top">I'm</span>
                </div>
            </div>
            <div className="row-start-2 row-span-1 col-span-2 h-18 overflow-hidden">            
                <div className="iam-wrap">
                    <div className="iam-move" onAnimationEnd={animEnd}>
                        <div className="iam-item">&nbsp;</div>
                        <div className="iam-item">an &nbsp;<span className="it-font text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-purple-800">IT ADMIN.</span></div>
                        <div className="iam-item">a &nbsp;<span className="dev-font text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-orange-700">DEVELOPER.</span></div>
                        <div className="iam-item">a &nbsp;<span className="dsn-font text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-500 to-rose-600">DESIGNER.</span></div>
                        <div className="iam-item">a &nbsp;<span className="biz-font text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-800">BUSINESSMAN.</span></div>
                        <div className="iam-item"><span className="name-font text-transparent bg-clip-text bg-gradient-to-b from-violet-400 to-emerald-500">GLENN BARKER.</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;