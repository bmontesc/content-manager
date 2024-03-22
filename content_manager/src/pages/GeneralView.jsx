import { Table } from "../components/Table"
import { sampleData } from "../data/data"
import './GeneralView.css'

export const GeneralView = () => {
    return(
        <div className="general-view-body">
            <Table data={sampleData}/>
        </div>
    )
}