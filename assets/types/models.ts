export interface UnityLoginResponse {
    username: string,
    playerId: string,
    sessionToken: string,
    idToken: string,
}

export interface UserProfile {
    email: string;
    username: string;
    playerId: string;
    dateJoined: string;
}