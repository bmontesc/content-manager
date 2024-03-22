import { useState, useEffect } from "react";
import { DataGrid } from "../components/DataGrid"
import { getContents } from "../data/getData"
import { useParams } from 'react-router-dom';
import './DetailView.css'

export const DetailView = () => {
    const {id} = useParams();

    const [data, setData] = useState([])
    const [ dataLoaded, setDataLoaded ] = useState(false)

    const fetchData = async () => {
        try {
            let data = await getContents();
            data = data.filter(data => data.id == id)[0]
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
        <div className="detail-view-body">
            <DataGrid data={data}/>
        </div>
    )
}