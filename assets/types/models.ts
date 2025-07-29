import {PlayerDataLegacy, UserData} from "@/assets/types/account";

export interface UnityLoginResponse {
    isLegacyUser: boolean,
    playerData: PlayerDataLegacy,
    userData: UserData,
}