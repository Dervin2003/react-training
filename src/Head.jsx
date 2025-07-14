const myStyle={
    display:"flex",
    color: "black",
    gap:30,
    justifyContent:"end",
    listStyle:"none"
}
function Head(){
    return(
        <ul style={myStyle}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
        </ul>
    )
}

export default Head;