import { useEffect, useState } from "react"
import { Table } from "../components/Table"
import { getContents, getCountries, getStatuses, getBuyerProfiles } from "../data/getData"
import './GeneralView.css'
import { FilterDropdown } from "../components/FilterDropdown"

export const GeneralView = () => {

    const [ data, setData ] = useState([])
    const [ countries, setCountries ] = useState([])
    const [ statuses, setStatuses ] = useState([])
    const [ buyerProfiles, setBuyerProfiles ] = useState([])
    const [ dataLoaded, setDataLoaded ] = useState(false)
    const [ country, setCountry ] = useState('---')
    const [ buyerProfile, setBuyerProfile ] = useState('---')
    const [ status, setStatus ] = useState('---')
    const [ titleFilter, setTitleFilter ] = useState('')
    const [ page, setPage ] = useState(0)

    const fetchData = async () => {
        try {
            const data = await getContents();
            const countries = await getCountries();
            const statuses = await getStatuses();
            const buyerProfiles = await getBuyerProfiles();
            setData(data)
            setCountries(countries)
            setStatuses(statuses)
            setBuyerProfiles(buyerProfiles)
            setDataLoaded(true)
        } catch (error) {
            console.error('Error al obtener los datos', error);
        }
    };

    const fetchFilteredData = async (country, buyerProfile, status, titleFilter, page = 0) => {
        try {
            const data = await getContents(country, buyerProfile, status, titleFilter, page);
            setData(data)
            setDataLoaded(true)
        } catch (error) {
            console.error('Error al filtrar los datos', error)
        }
    }

    const filterData = () => {
        setDataLoaded(false)
        setPage(0)
        fetchFilteredData(country, buyerProfile, status, titleFilter, page)
    }

    const selectOption = (attribute, option) => {
        console.log(option)
        switch (attribute){
            case 'Buyer_Profile':
                setBuyerProfile(option)
                setPage(0)
                break;
            case 'Country':
                setCountry(option)
                setPage(0)
                break;
            case 'Status':
                setStatus(option)
                setPage(0)
                break;
        }
    }

    const selectTitle = (event) => {
        console.log(event.target.value)
        setPage(0)
        setTitleFilter(event.target.value);
    }

    const goBack = () => {
        if (page > 0) {
            setDataLoaded(false)

            const newPage = page - 1
            setPage(newPage)
            fetchFilteredData(country, buyerProfile, status, titleFilter, newPage)
        }
    }

    const goForward = () => {
        setDataLoaded(false)

        const newPage = page + 1
        setPage(newPage)
        fetchFilteredData(country, buyerProfile, status, titleFilter, newPage)
    }

    useEffect(() =>{
        setDataLoaded(false)
        fetchData()
    },[])

    return(
        <div className="general-view-body">
            <h2>Parent Content</h2>
            <input type="text" name="" id="" placeholder="🔎 Search by title..." onChange={selectTitle}/>
            <div className="filters">
                <FilterDropdown attribute='Buyer_Profile' options={buyerProfiles} onSelect={selectOption}/>
                <FilterDropdown attribute='Country' options={countries} onSelect={selectOption}/>
                <FilterDropdown attribute='Status' options={statuses} onSelect={selectOption}/>
                <button onClick={filterData}>Apply filters</button>
            </div>
            { dataLoaded ? <Table data={data}/> : <h1>Loading...</h1>}
            <div className="pages">
                <button onClick={goBack}>&lt;</button>
                <p className="page-info">Page: {page}</p>
                <button onClick={goForward}>&gt;</button>
            </div>
        </div>
    )
}
