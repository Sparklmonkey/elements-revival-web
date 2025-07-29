import {PlayerDataLegacy} from "@/assets/types/account";
import axios from "axios";
import {UnityLoginResponse} from "@/assets/types/models";

export async function loginUnityUser(username: string, password: string) {
    const loginResponse = await axios.post(
        `/api/accountManagementServices/login`,
        { username, password },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
    ).then(response => {
        const loginResponse: UnityLoginResponse = response.data
        return loginResponse
    }).catch(error => {
        console.log(error)
    })
}

export async function migrateOldUnityToNew(playerData: PlayerDataLegacy) {

}





