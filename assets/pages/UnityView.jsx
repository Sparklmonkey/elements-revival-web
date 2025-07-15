import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export function UnityView() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "Unity.loader.js",
        dataUrl: "Unity.data",
        frameworkUrl: "Unity.framework.js",
        codeUrl: "Unity.wasm",
    });

    function handleClickSpawnEnemies() {
        sendMessage("GameController", "SpawnEnemies", 100);
    }

    return (
        <Fragment>
            <Unity unityProvider={unityProvider} />
            <button onClick={handleClickSpawnEnemies}>Spawn Enemies</button>
        </Fragment>
    );
}