import React from "react"
import WorkNode from "../nodes/WorkNode.js"
import WorkData from "../data/Work.js"

function Work() {
    const workNodes = WorkData.map(data => {
        return <WorkNode 
            key={data.id}
            title={data.title}
            description={data.description}
        />
    })
    return (
        <section className="node">
            <h1 className="opacity-0 head-fade">Work</h1>
            <h2 className="opacity-0 sub-head-fade">WMC Business Services</h2>
            <h3 className="opacity-0 sub-head-fade">Systems Administration/ Management</h3>
            <h3 className="opacity-0 sub-head-fade mb-6">(2006-Present)</h3>
            <div className="opacity-0 grid grid-flow-rows grid-flow-cols sm:grid-cols-2 text-left gap-8 content-fade">
                {workNodes}
            </div>
        </section>
    );
}

export default Work;