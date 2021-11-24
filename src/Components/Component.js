
import {useLocation, useNavigate} from "react-router";

function RouteComponent(props) {
    const location=useLocation()
    const navigation=useNavigate()

    const history={
        push: path=>navigation(path)
    }
    const Child=props.component

    return (
             <div>
                 <Child l={10} history={history} location={location} />
             </div>
    );
}

export default RouteComponent;