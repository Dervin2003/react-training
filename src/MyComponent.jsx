import ClassComponent from "./ClassComponent";

function MyBtn(){
    return(
        <button>Click</button>
    )
}
function MyComponent(){
    return(
        <div>
            <h1>Functional Component</h1>
            <MyBtn/>
            <ClassComponent name="Dervin" age={22}/>
        </div>
    )
}

export default MyComponent;