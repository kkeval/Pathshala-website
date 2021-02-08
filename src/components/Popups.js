import './Popup.css'
function Popups(props) {
    return (props.trigger) ? (
        <div className="popup container">
            <div className="popup-inner">
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>

    ): '';
}

export default Popups;