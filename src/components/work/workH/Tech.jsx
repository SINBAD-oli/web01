import Table from './Table'
import './tech.css'
import React from 'react'

function ProjectList() {
    const columns = [
        {
            className: 'year',
            Header: () => <span>Year</span>,
            accessor: 'year'
        },
        {
            className: 'title',
            Header: () => <span>Title</span>,
            accessor: 'title'
        },
        {
            className: 'company',
            Header: () => <span>Company</span>,
            accessor: 'company'
        },
        {
            className: 'tech',
            Header: () => <span>Built with</span>,
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
                year: 2021,
                title: 'This Website',
                company: 'OliverC',
                renderTech: () => <>
                    <span>JSReact</span>
                    <span>JS</span>
                    <span>Styled Components</span>
                </>,
                link: <a href="web.njit.edu/obc2~"> <i class="iconLink fas fa-external-link-alt"></i> </a>
            },
            {
                year: 2020,
                title: 'JDTR E-Com Web',
                company: 'JD Truck Repair Corp',
                renderTech: () => <>
                    <span>JSReact</span>
                    <span>JS</span>
                    <span>Styled Components</span>
                </>,
                link: <a href="jdtrcorp.com/"> <i class="iconLink fas fa-external-link-alt"></i>  </a>
            },
            {
                year: 2020,
                title: 'Blood Donor Android App',
                company: 'Dr. Osama Eljabiri',
                renderTech: () => <>
                    <span>JAVA</span>
                    
                    
                </>,
                link: <a href="https://github.com/SINBAD-oli/androidapp-blood-donor"> <i class="iconLink fab fa-github-alt"></i> </a>
            },
            {
                year: 2019,
                title: 'Web Python Quizzer',
                company: 'NJIT',
                renderTech: () => <>
                    <span>JS</span>
                    <span>PHP</span>
                    <span>CSS</span>
                    <span>MYSQL</span>
                </>,
                link: <a href="https://github.com/SINBAD-oli/web-quiz"> <i class="iconLink fab fa-github-alt"></i> </a>
            }
        ]}
    />
    
}

export default function Tech() {
    return (
        <div className="table">
            <div className="tableContainer">
                <ProjectList/>
            </div>
        </div>
    )
}
