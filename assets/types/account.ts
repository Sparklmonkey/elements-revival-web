
type PlayerDataLegacy = {
    "arenaLosses": number,
    "arenaT50Deck": string,
    "arenaT50Mark": number,
    "arenaWins": number,
    "id": number,
    "nextFalseGod": string,
    "inventoryCards": string,
    "currentDeck": string,
    "markElement": number,
    "savedDecks": string[],
    "petCount": number,
    "petName": string,
    "electrum": number,
    "gamesLost": number,
    "gamesWon": number,
    "playerScore": number,
    "lastOracleDay": number,
    "playedOracleToday": boolean,
    "oracleLastPlayed": string,
    "completedQuests": string,
    "currentQuestIndex": number,
    "removedCardFromDeck": boolean,
    "hasBoughtCardBazaar": boolean,
    "hasDefeatedLevel0": boolean,
    "hasDefeatedLevel1": boolean,
    "hasDefeatedLevel2": boolean,
    "hasSoldCardBazaar": boolean,
    "email": string,
    "username": string
}

type TopFiftyData = {
    "arenaLosses": number,
    "arenaT50Deck": string,
    "arenaT50Mark": number,
    "arenaWins": number
}

type CardData = {
    "savedPresets": DeckPreset[],
    "currentDeck": string,
    "cardInventory": string,
    "markElement": number
}

type DeckPreset = {
    deck: string
}

type PlayerData = {
    "seasonalScore": number,
    "overallScore": number,
    "gamesLost": number,
    "gamesWon": number,
    "electrum": number,
    "canPlayOracle": boolean,
    "petCount": number,
    "petName": string,
    "playedOracleToday": boolean
}

type Quests = {
    "currentQuestIndex": number,
    "hasBoughtCardBazaar": boolean,
    "hasDefeatedLevel0": boolean,
    "hasDefeatedLevel1": boolean,
    "hasDefeatedLevel2": boolean,
    "hasSoldCardBazaar": boolean,
    "removedCardFromDeck": boolean
}

type UserData = {
    "username": string,
    "email": string,
    "playerId": string
}

export {UserData, PlayerData, PlayerDataLegacy, TopFiftyData, CardData, DeckPreset, Quests }