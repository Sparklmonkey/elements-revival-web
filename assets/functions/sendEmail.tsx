﻿import axios from "axios";
import {setAccessToken, setAuthenticated} from "@/assets/store/pageReducer";

export async function sendEmail(props: EmailProps) {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    try {
        const {data} = await axios.post(
            'https://elementstherevival.com/api/send-feedback',
            {
                senderEmail: props.senderEmail,
                username: props.username,
                firstName: props.firstName,
                playerId: props.playerId,
                message: props.message
            },
            {headers: headers});
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export type EmailProps = {
    senderEmail: string
    username: string
    firstName: string
    playerId: string
    message: string
}