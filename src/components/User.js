const User = ({name, location}) => {
    return(
        <div className="user-card">
            <h2>{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:</h4>
        </div>
    )
}
export default User