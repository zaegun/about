import logo from "../images/reverse-logo.svg"


function Foot() {
    const date = new Date().getFullYear();

    return(
        <footer className="bg-zinc-900 pt-10 pb-12 pl-8 sm:pl-0 w-full b-0 absolute">
            <div className="sm:m-auto sm:w-5/6">
                <img src={logo} alt="logo" className="opacity-80 w-16 h-16 m-auto float-left mr-6" />
                <div className="text-left text-sm opacity-50">Glenn Barker &copy; {date}.<br />
                    Designed using <a href="https://react.dev/">React</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>.<br />
                    Hosted using <a href="https://pages.github.com/">GitHub Pages</a>.
                </div>
            </div>
        </footer>
    );
}

export default Foot;