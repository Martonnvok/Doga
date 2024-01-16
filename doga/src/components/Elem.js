import "./Elem.css";
function Elem(props) {

    function kattintas() {
        console.log("Szia")
        props.kattintas("JELZÉS: x-re kattintottál")
    }

    return (<div className="elem" onClick={kattintas}>
        {props.ertek}
    </div>)

}
export default Elem;


