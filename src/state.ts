import {TxData,VotingPower, Votes, ProposalResults, ProposalInfo} from "./types";
import * as Logger from './logger';

export class State {

    private txData: TxData = {tx: [], toLt: undefined};
    private votingPower: VotingPower = {};
    private votes: Votes = {};
    private proposalResults: ProposalResults | undefined;
    private proposalInfo: ProposalInfo | undefined;
    private updateTime: Number | undefined;

    getState() {

        return {
            votes: this.votes,
            proposalResults: this.proposalResults,
            votingPower: this.votingPower,
            maxLt: this.txData.toLt
        }
    }

    getFullState() {

        return {
            txData: this.txData,
            votingPower: this.votingPower,
            votes: this.votes,
            proposalResults: this.proposalResults,
            proposalInfo: this.proposalInfo,
            updateTime: this.updateTime
        }
    }

    getStateUpdateTime() {
        return this.updateTime;
    }

    getProposalResults() {
        return this.proposalResults;
    }

    getProposalInfo() {
        return this.proposalInfo;
    }

    getMaxLt() {
        return this.txData.toLt;
    }
    
    setProposalInfo(proposalInfo: ProposalInfo) {
        this.proposalInfo = proposalInfo;
    }

    setState(txData: TxData, votingPower: VotingPower, votes: Votes, proposalResults: ProposalResults) {
        Logger.log(`updating state ...`);
        
        this.txData = txData;
        this.votingPower = votingPower;
        this.votes = votes;
        this.proposalResults = proposalResults;
        this.updateTime = Date.now();
    }
}