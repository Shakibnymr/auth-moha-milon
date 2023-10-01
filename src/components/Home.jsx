import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const Home = () => {
    const d = useContext(AuthContext)
    console.log(d)
    return (
        <div>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;