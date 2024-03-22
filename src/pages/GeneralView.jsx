import { useEffect, useState } from "react"
import { Table } from "../components/Table"
import { getContents } from "../data/getData"
import './GeneralView.css'

export const GeneralView = () => {

    const [data, setData] = useState([])
    const [ dataLoaded, setDataLoaded ] = useState(false)

    const fetchData = async () => {
        try {
            const data = await getContents();
            setData(data)
            setDataLoaded(true)
        } catch (error) {
            console.error('Error al obtener los datos', error);
        }
    };

    useEffect(() =>{
        setDataLoaded(false)
        fetchData()
    },[])

    if(!dataLoaded) return <h1>Loading...</h1>

    return(
        <div className="general-view-body">
            <input type="text" name="" id="" placeholder="🔎 Buscar por título..." />
            <Table data={data}/>
        </div>
    )
}