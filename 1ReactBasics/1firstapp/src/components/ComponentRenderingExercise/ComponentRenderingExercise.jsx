import {useState} from "react";
import HomePage from "./HomePage";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import VideoExample from "../DisplayMedia/VideoExample";
import AudioExample from "../DisplayMedia/AudioExample";

function ComponentRenderingExercise() {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    return (
        <>
            {loggedIn ? (
                <div>
                    <HomePage />
                    <VideoExample/>
                    <LogoutButton logout={logout} />
                </div>
            ) : (
                <div>
                    <AudioExample/>
                    <LoginButton login={login} />
                </div>
            )}
        </>
    );
}

export default ComponentRenderingExercise;