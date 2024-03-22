import './Data.css'

export const Data = (props) => {
    const {title, content} = props
    return(
        <div className="data-card">
            <h4>{title}</h4>
            <p>{content ? content : '-'}</p>
        </div>
    )
}