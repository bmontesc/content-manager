import './DataGrid.css';
import { Data } from "./Data";

export const DataGrid = (props) => {
    const { data } = props;
    // Asegurándose de que data es un objeto y tiene claves para trabajar
    let headers = data && typeof data === 'object' ? Object.keys(data) : [];

    // Filtrando 'id' y 'Title' de las cabeceras
    headers = headers.filter(header => header !== 'id' && header !== 'title');

    const renderContent = (header) => {
        // Ya no necesitas una lógica especial aquí para `translations`
        const content = data[header];
        return <Data key={header} title={header} content={content} />;
    };

    return (
        <>
        <div className='container'>
            <h1>{data['title']}</h1>
            <button>Content cascade</button>
        </div>
            <div className='data-grid'>
                {headers.map(header => (
                    <div key={header}>
                        {renderContent(header)}
                    </div>
                ))}
            </div>
        </>
    );
};
