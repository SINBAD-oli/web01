import "./work.css"
import Table from './Table'

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
                link: <a href="web.njit.edu/obc2~">l</a>
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
                link: <a href="https://toolkit.michelleforboston.com/">l</a>
            },
            {
                year: 2020,
                title: 'Blood Donor Android App',
                company: 'Dr. Osama Eljabiri',
                renderTech: () => <>
                    <span>JAVA</span>
                    
                    
                </>,
                link: <a href="https://toolkit.michelleforboston.com/">l</a>
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
                link: <a href="https://toolkit.michelleforboston.com/">l</a>
            }
        ]}
    />
    
}
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
                link: <a href=""></a>
            },
            {
                company: 'Peridance Capezio',
                renderTech: () => <>
                    <span>Summer Intensive Program</span>
                    <span>au-di-tions</span>
                </>,
                link: <a href=""></a>
            },
            {
                company: 'Korean Dance Abroad',
                renderTech: () => <>
                    <span>92Y</span>
                    <span>Younpuleum Project Group</span>
                    <span>Dance & People</span>
                    <span>Ministry Of Culture, Sports and Tourism</span>   
                </>,
                link: <a href=""></a>
            }
        ]}
    />
    
}
    
        
    
    


export default function Work() {
    return (
        
        <div className="work">
            <div className="header">
                <h1>Archive</h1>
            </div>
            <div className="miniHeader">
                <p>List of things I've work on</p>
                <p>List of thing I've photographed</p>
            </div>
            <div className="table">
                <div className="tableContainer">
                    <ProjectList />
                </div>
                <div className="divider"></div>
                
                <div className="tableContainer2">
                    <ProjectList2 />
                </div>
            </div>
        </div>
    )
}
