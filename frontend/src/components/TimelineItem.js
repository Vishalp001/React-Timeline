import React, { useEffect, useState } from 'react'

const TimelineItem = () => {
    const [data, setData] = useState([{
        name: "",
        date: "",
        tag: "",
        color: "",
        url: "",
        text: "",
    }])


    useEffect(() => {
        fetch("/create").then(res => {
            if (res.ok) {
                return res.json()
            } else {
                console.log("cant fetch the data")
            }
        }).then(jsonRes => setData(jsonRes))
    })


    return (
        <div className="timeline-container">
            {data.map(datas =>
                <div className="timeline-item">
                    <div className="timeline-item-content">
                        <span className="tag" style={{ background: datas.color }}>{datas.tag}</span>
                        <time>{datas.date}</time>
                        <p>{datas.name}</p>
                        <a href={`https://${datas.url}`} target="_blank" rel="noreferrer">{datas.text}</a>
                        <span className="circle"></span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TimelineItem
