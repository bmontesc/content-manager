import { TextLabel } from "./TextLabel"
import './FilterDropdown.css'

export const FilterDropdown = (props) => {
    const { options, attribute, onSelect } = props;

    return (
        <div className="filter">
            <label htmlFor={`${attribute}`}><TextLabel text={attribute}/>:
            </label>
            <select name={`${attribute}`} id={`${attribute}`} onChange={(e) => onSelect(attribute, e.target.value)}>
                <option value="---">---</option>
                {options.map((option) => {
                    // Comprueba si la opción es un objeto que contiene id y value
                    const isOptionObject = typeof option === 'object' && option !== null && 'id' in option && 'value' in option;
                    const key = isOptionObject ? option.id : option;
                    const value = isOptionObject ? option.value : option;

                    return <option key={key} value={key}>{value}</option>;
                })}
            </select>
        </div>
    );
}
