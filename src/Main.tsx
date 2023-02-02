import { Route, Routes } from "react-router-dom";
import Edit from "./component/Edit";

const Main = () => {
    return (
        <Routes>
            <Route path='./component/Edit' element={<Edit/>}/>
        </Routes>
    );
}

export default Main;