import profile from "../images/profile.jpg"
import pdf from "../data/Resume 2023 (Online).pdf"

function About() {
    const name = "Glenn Barker"
    return (
        <section className="node min-h-screen">
            <div className="sm:grid sm:grid-cols-2 sm:m-auto sm:pb-20 text-left mb-12 sm:m-auto head-fade">
                <div className="hidden sm:flex sm:col-span-1">
                    <img src={profile} className="rounded-full sm:w-60 sm:h-60 sm:mt-24 sm:ml-4 lg:w-80 lg:h-80 lg:m-auto" />
                </div>
                <div className="sm:col-span-1 sm:col-start-2">
                    <h1 className="text-left head-fade">Hi, I'm {name}</h1>
                    <p className="text-left mb-4 content-fade opacity-0">I am experienced IT professional, developer, graphic designer, and businessman with over 15 years of experience in those fields.</p>
                    <p className="text-left mb-4 content-fade opacity-0">Feel free to look around this site to find information on my education, certification, work history, and current skillset. If you would like a condensed version of my resume, you can download a PDF version by clicking below.</p>
                    <p className="text-left mb-12 content-fade opacity-0">Feel free to contact me and I will get back to you as soon as I can. Thank you!</p>
                    <a href={pdf} className="px-6 py-4 text-lg font-semibold bg-emerald-500 text-white rounded-xl hover:bg-emerald-700 content-fade opacity-0">Download Resume</a>
                </div>
            </div>
            <div className="grid grid-flow-rows grid-flow-cols sm:grid-cols-2 text-left gap-x-8 gap-y-2 pt-6 pb-8">
                <div>
                    <h1 className="head-fade">Education</h1>
                    <div className="grid grid-rows-2 grid-flow-cols text-left gap-y-10 mb-14 ">
                        <div className="content-fade opacity-0">
                            <h2>Bachelor of Science, Business Management</h2>
                            <h3>Brigham Young University</h3>
                        </div>
                        <div className="content-fade opacity-0">
                            <h2>Bachelor of Science, Applied Technology</h2>
                            <h3>Brigham Young University Idaho</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="head-fade">Certification</h1>
                    <div className="content-fade opacity-0">
                        <h3 className="mb-2">TestOut Client Pro</h3>
                        <h3 className="mb-2">TestOut Switching Pro</h3>
                        <h3 className="mb-2">TestOut Network Pro</h3>
                        <h3 className="mb-2">TestOut PC Pro</h3>
                    </div>

                </div>
            </div>

        </section>
    );
  }
  
  export default About;