export const TextLabel = (props) => {
    let { text } = props

    if (text.includes('_')){
        const splittedText = text.split('_')
        text = ''
        splittedText.forEach(portion => text = text + ' ' + portion);
    }

    return <>{text}</>
}