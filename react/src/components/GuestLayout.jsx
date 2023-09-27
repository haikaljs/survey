import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const GuestLayout = () => {
    const { currentUser, userToken } = useStateContext();

    if (userToken) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <Outlet />
        </div>
    );
};

export default GuestLayout;
