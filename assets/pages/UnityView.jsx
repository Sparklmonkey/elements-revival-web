import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const loaderUrl ='https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.loader.js?alt=media';
const dataUrl = 'https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.data?alt=media';
const frameworkUrl = 'https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.framework.js?alt=media';
const codeUrl = 'https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.wasm?alt=media';
export function UnityView() {

    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: loaderUrl,
        dataUrl: dataUrl,
        frameworkUrl: frameworkUrl,
        codeUrl: codeUrl,
    });

    return (
        <Fragment>
            <Unity unityProvider={unityProvider} />
        </Fragment>
    );
}