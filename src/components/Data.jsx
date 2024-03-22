import './Data.css'
import { TextLabel } from './TextLabel'

export const Data = (props) => {
    const {title, content} = props
    return(
        <div className="data-card">
            <h4><TextLabel text={title} /></h4>
            <p>{content ? content : '-'}</p>
        </div>
    )
}