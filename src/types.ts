export interface TxData {
    tx: [], 
    toLt: undefined | string
};

export interface VotingPower {
    [voter: string]: string
}

export interface Votes {
    [voter: string]: {vote: string, timestamp: string}
}

export interface ProposalResults {
    [key: number]: number,
    totalPower: string,
}

export interface ProposalInfo {
    startTime: Number,
    endTime: Number,
    snapshot: {
        snapshotTime: Number, 
        mcSnapshotBlock: Number
    }
}
