import { Web3Dependencies  } from "@_types/hooks";
import { hookFactory as createAccountHook, UseAccountHook } from "./userAccount";
import { hookFactory as createNetworkHook, UseNetworkHook } from "./userNetwork";
import { hookFactory as createListedNftsHook, UseListedNftsHook } from "./useListedNfts";
import { hookFactory as createOwnNftsHook, UseOwnNftsHook } from "./useOwnNfts";


export type Web3Hooks = {
    useAccount: UseAccountHook
    useNetwork: UseNetworkHook
    useListedNfts: UseListedNftsHook
    useOwnedNft: UseOwnNftsHook
}

export type SetupHooks = {
    (d: Web3Dependencies): Web3Hooks
}

export const setupHooks: SetupHooks = (deps) => {
    return {
        useAccount: createAccountHook(deps),
        useNetwork: createNetworkHook(deps),
        useListedNfts: createListedNftsHook(deps),
        useOwnedNft: createOwnNftsHook(deps)
    }
}