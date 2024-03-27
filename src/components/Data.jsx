import './Data.css';
import { TextLabel } from './TextLabel';

export const Data = (props) => {
    const { title, content } = props;

    const renderContent = () => {
        if (Array.isArray(content)) {
            // Manejar el caso en que `content` es un array
            return content.map((item, index) => (
                <p key={index}>{item.country_code}: <a href={item.link} target="_blank" rel="noopener noreferrer">Link</a></p>
            ));
        } else if (typeof content === 'boolean') {
            // Caso para booleanos
            return content ? '✓' : 'No';
        } else if (title.toLowerCase() === 'link' && typeof content === 'string') {
            // Si el title es 'link' y content es una cadena, renderiza como enlace
            return <a href={content} target="_blank" rel="noopener noreferrer">{content}</a>;
        } else {
            // Caso por defecto
            return content || '-';
        }
    };

    return (
        <div className="data-card">
            <h4><TextLabel text={title} /></h4>
            <div>{renderContent()}</div>
        </div>
    );
};
