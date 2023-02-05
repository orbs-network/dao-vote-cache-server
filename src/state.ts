import {TxData,VotingPower, Votes, ProposalResults, ProposalInfo} from "./types";

export class State {

    private txData: TxData = {tx: [], toLt: undefined};
    private votingPower: VotingPower = {};
    private votes: Votes = {};
    private proposalResults: ProposalResults | undefined;
    private proposalInfo: ProposalInfo | undefined;
    private lastUpdateTime: Number | undefined;

    getState() {

        return {
            txData: this.txData,
            votingPower: this.votingPower,
            votes: this.votes,
            proposalResults: this.proposalResults,
            proposalInfo: this.proposalInfo,
            lastStateUpdate: this.lastUpdateTime
        }
    }

    getProposalResults() {
        return this.proposalResults;
    }

    getProposalInfo() {
        return this.proposalInfo;
    }

    setState(txData: TxData, votingPower: VotingPower, votes: Votes, proposalResults: ProposalResults) {
        console.log(`updating state ...`);
        
        this.txData = txData;
        this.votingPower = votingPower;
        this.votes = votes;
        this.proposalResults = proposalResults;
        this.lastUpdateTime = Date.now();
    }

    setProposalInfo(proposalInfo: ProposalInfo) {
        this.proposalInfo = proposalInfo;
    }
}