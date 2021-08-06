import Table from './Table'
import './photo.css'
import React from 'react'


function ProjectList2() {
    const columns = [
        {
            className: 'company',
            Header: () => <span>Company</span>,
            accessor: 'company'
        },
        {
            className: 'publish',
            Header: () => <span>Published</span>,
            render: ({ renderTech }) => renderTech()
        },
        {
            className: 'link',
            Header: () => <span>Link</span>,
            accessor: 'link'
        }
    ]

    return <Table
        columns={columns}
        dataSource={[
            {
                company: 'Yaa Samar Dance Theatre',
                renderTech: () => <>
                    <span>NY TIMES</span>
                    <span>Dance Magazine</span>
                    <span>Dance Enthusiast</span>
                    <span>Battery Dance Festival</span>
                </>,
                link: <a href="https://ysdt.org/"> <i class="iconLink fas fa-external-link-alt"></i> </a>
            },
            {
                company: 'Peridance Capezio',
                renderTech: () => <>
                    <span>Summer Intensive Program</span>
                    <span>au-di-tions</span>
                </>,
                link: <a href="https://www.peridance.com/"> <i class="iconLink fas fa-external-link-alt"></i> </a>
            },
            {
                company: 'Korean Dance Abroad',
                renderTech: () => <>
                    <span>92Y</span>
                    <span>Younpuleum Project Group</span>
                    <span>Dance & People</span>
                    <span>Ministry Of Culture, Sports and Tourism</span>   
                </>,
                link: <a href="https://koreadanceabroad.wixsite.com/koreadanceabroad"> <i class="iconLink fas fa-external-link-alt"></i> </a>
            }
        ]}
    />
    
}

export default function Photo() {
    return (
        <div className="table">
            <div className="tableContainer">
                <ProjectList2/>
            </div>
        </div>
    )
}
