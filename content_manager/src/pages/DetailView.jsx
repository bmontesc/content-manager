import { DataGrid } from "../components/DataGrid"
import { sampleData } from "../data/data"
import { useParams } from 'react-router-dom';
import './DetailView.css'

export const DetailView = () => {
    const {id} = useParams();
    const data = sampleData.filter(data => data.id == id)[0]

    return(
        <div className="detail-view-body">
            <DataGrid data={data}/>
        </div>
    )
}