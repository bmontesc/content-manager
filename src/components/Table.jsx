import './Table.css'
import { Link } from 'react-router-dom'
import { TextLabel } from './TextLabel';

export const Table = (props) => {
    let { headers, data } = props
    if (!headers){
        headers = data.length > 0 ? Object.keys(data[0]) : [];
    }
    
    return (
        <table>
            <thead>
                <tr>
                    {headers.map(header => (
                        <th key={header}><TextLabel text={header}/></th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map(header => (
                                <td key={`${header}-${rowIndex}`}><Link to={`/parentContent/${row['id']}`}>{row[header]}</Link></td>
                            ))}
                        </tr>
                ))}
            </tbody>
        </table>
    )
}