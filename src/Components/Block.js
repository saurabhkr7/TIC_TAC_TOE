import '../App.css';
export var Block = ({ position, mark = "", onClick }) => {
    return (
        <div className={`block mark${mark}`} onClick={() => onClick(position)}></div >
    )
};  