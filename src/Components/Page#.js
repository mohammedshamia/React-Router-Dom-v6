import { Link } from "react-router-dom";
import { useLocation } from "react-router";


function useSearchQuery(search) {
    return new URLSearchParams(search);
}

function Page3() {
    const arr=["username","name", "color"]
    const location=useLocation()
    const query=useSearchQuery(location.search)

    // to get just an element
    console.log(query.get("name"))

    // to get all elements
    arr.map(name=>console.log(query.get(name)))

return (
    <div>
        <Link to={"/page-2/10"}>
            Go to page 2
        </Link>
    </div>
);
}

export default Page3;