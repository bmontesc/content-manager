import './DataGrid.css'
import { Data } from "./Data";

export const DataGrid = (props) => {
    const { data } = props
    let headers = data ? Object.keys(data) : [];

    headers = headers.filter(header => header !== 'id' && header !== 'title')

    return (
        <>
            <h1>{data['title']}</h1>
            <div className='data-grid'>
                {headers.map(header => <Data key={header} title={header} content={data[header]}/>)}
            </div>
        </>
        )
}

