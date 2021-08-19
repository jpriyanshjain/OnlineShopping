import "./Button.css"

function Button({children,clicked , inNav}) {
    return (
        <div className ="button">
            <button onClick={clicked} className={`button__btn ${inNav ? "button__nav" : " "} `}>{children}</button>
        </div>
    )
}

export default Button
