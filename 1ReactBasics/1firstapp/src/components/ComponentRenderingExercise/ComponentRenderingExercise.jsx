import {useState} from "react";
import HomePage from "./HomePage";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function ComponentRenderingExercise() {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    return (
        <>
            {loggedIn ? (
                <div>
                    <HomePage />
                    <LogoutButton logout={logout} />
                </div>
            ) : (
                <LoginButton login={login} />
            )}
        </>
    );
}

export default ComponentRenderingExercise;