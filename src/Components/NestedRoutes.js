import {Route, Outlet} from "react-router";

function NestedRoutes() {
    return (
        <Route path="/invoices" element={<Outlet/>}
        >
            {/** index to define the main path*/}
            <Route index element={<div>4604</div>} />
            <Route path="invoiceId" element={<div>15646523</div>} />
            <Route path="sent" element={<div>ads asd </div>} />
            <Route path=":id" element={<div>ads id </div>} />
        </Route>
    );
}

export default NestedRoutes;