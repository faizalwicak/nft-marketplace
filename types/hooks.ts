import { MetaMaskInpageProvider } from "@metamask/providers"
import { Contract, providers } from "ethers"
import { SWRResponse } from "swr"
import { NftMarketContract } from "./nftMarketContract"

export type Web3Dependencies = {
  provider: providers.Web3Provider
  contract: NftMarketContract
  ethereum: MetaMaskInpageProvider
  isLoading: boolean
}

// export type CryptoHookFactory = {
//   (d: Partial<Web3Dependencies>): CryptoHandlerHook
// }

// export type CryptoHandlerHook = (params: any) => CryptoSWRResponse

// export type CryptoSWRResponse = SWRResponse


export type CryptoHookFactory<D = any, R=any, P = any> = {
  (d: Partial<Web3Dependencies>): (params?: P) => SWRResponse<D> & R
}
