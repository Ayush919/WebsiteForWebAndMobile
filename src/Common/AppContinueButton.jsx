const AppContinueButton = ({className, disableBtn, onClick, title}) => {
    return (
        <button
            className={className}
            type="button"
            disabled={disableBtn}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default AppContinueButton
