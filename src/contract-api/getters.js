import {SNAKE_PREFIX, ONCHAIN_CONTENT_PREFIX, KEY_LEN, KEY_VAL} from "../contracts/config";
import { Address, Cell } from "ton";
import { votingContract } from "./address";


export async function getFrozenAddresses(client) {
  
  let res = await client.callGetMethod(votingContract, "frozen_addresses");
  let boc = Buffer.from(res.stack[0][1].bytes, 'base64').toString('hex');
  let cell = Cell.fromBoc(boc)[0]

  let contentSlice = cell.beginParse();
  let frozenAddresses = []
  while (true) {

    while (contentSlice.remaining) {
      let s = contentSlice.readAddress();
      frozenAddresses.push(s.toFriendly())
    }

    if (!(contentSlice.remainingRefs)) break;
    contentSlice = contentSlice.readRef();
  }

  return frozenAddresses
}

export async function getSnapshotTime(client, clientV4) {
  const res = await client.callGetMethod(
    votingContract,
    "proposal_snapshot_time"
  );
  const snapshotTime = Number(res.stack[0][1]);

  const mcSnapshotBlock = await getBlockFromTime(clientV4, snapshotTime);

  return {snapshotTime, mcSnapshotBlock};
}

export async function getStartTime(client) {
  const res = await client.callGetMethod(votingContract, "proposal_start_time");
  return Number(res.stack[0][1]);
}

export async function getEndTime(client) {
  const res = await client.callGetMethod(votingContract, "proposal_end_time");
  return Number(res.stack[0][1]);
}

async function getBlockFromTime(clientV4, utime) {

  let mcSnapshotBlock = null;

  let res = (await clientV4.getBlockByUtime(utime)).shards;

  for (let i = 0; i < res.length; i++) {
    if (res[i].workchain == -1) return res[i].seqno;  
  }

  throw Error(`could not find materchain seqno at time ${utime}`);

} 