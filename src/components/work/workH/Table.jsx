export default ({ columns, dataSource = [] }) => (
    <table>
        <thead>
            <tr>
                {columns.map(({ Header, className }) => (<th key={className}><Header /></th>))}
            </tr>
        </thead>
        <tbody>
            {dataSource.map((row, i) => (
                <tr key={i}>
                    {columns.map(({ className, accessor, render }) => (
                        <td className={className} key={className}>{ render ? render(row) : row[accessor] }</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
)