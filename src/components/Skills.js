import SkillsNode from "../nodes/SkillsNode.js"
import SkillsData from "../data/Skills.js"

function Skills() {
    const ITNodes = SkillsData.map(data => {
        if(data.category === "IT"){
            return <SkillsNode 
                key={data.id}
                title={data.title}
                description={data.description}
            />
        } 
    })
    const PrgmNodes = SkillsData.map(data => {
        if(data.category === "PRGM"){
            return <SkillsNode 
                key={data.id}
                title={data.title}
                description={data.description}
            />
        } 
    })
    const DsnNodes = SkillsData.map(data => {
        if(data.category === "DSGN"){
            return <SkillsNode 
                key={data.id}
                title={data.title}
                description={data.description}
            />
        } 
    })
    const BizNodes = SkillsData.map(data => {
        if(data.category === "BIZ"){
            return <SkillsNode 
                key={data.id}
                title={data.title}
                description={data.description}
            />
        } 
    })
    return (
        <section className="node">
            <h1 className="opacity-0 head-fade">Skills</h1>
            <h2 className="opacity-0 sub-head-fade">IT</h2>
            <div className="opacity-0 grid grid-flow-rows grid-flow-cols sm:grid-cols-3 text-left gap-x-8 gap-y-2 content-fade pt-6 pb-8">
                {ITNodes}
            </div>
            
            <h2 className="opacity-0 sub-head-fade">Programming</h2>
            <div className="opacity-0 grid grid-flow-rows grid-flow-cols sm:grid-cols-3 text-left gap-x-8 gap-y-2 content-fade pt-6 pb-8">
                {PrgmNodes}
            </div>

            <h2 className="opacity-0 sub-head-fade">Design</h2>
            <div className="opacity-0 grid grid-flow-rows grid-flow-cols sm:grid-cols-3 text-left gap-x-8 gap-y-2 content-fade pt-6 pb-8">
                {DsnNodes}
            </div>

            <h2 className="opacity-0 sub-head-fade">Business</h2>
            <div className="opacity-0 grid grid-flow-rows grid-flow-cols sm:grid-cols-3 text-left gap-x-8 gap-y-2 content-fade pt-6 pb-8">
                {BizNodes}
            </div>
        </section>
    );
  }
  
  export default Skills;
  