import { TextLabel } from "./TextLabel"
import './FilterDropdown.css'

export const FilterDropdown = (props) => {
    const { options, attribute, onSelect } = props

    return (
        <div className="filter">
            <label htmlFor={`${attribute}`}><TextLabel text={attribute}/>:</label>
            <select name={`${attribute}`} id={`${attribute}`} onChange={(e) => onSelect(attribute, e.target.value)}>
                <option value="---">---</option>
                {options.map(option => <option key={option} value={`${option}`}>{option}</option>)}
            </select>
        </ div>
    )
}