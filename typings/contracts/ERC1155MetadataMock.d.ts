/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class ERC1155MetadataMock extends Contract {
  functions: {
    uri(_id: number | string | BigNumber): Promise<string>;

    setBaseMetadataURI(
      _newBaseMetadataURI: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    logURIsMock(
      _tokenIDs: (number | string | BigNumber)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    logURIsMock2(
      _tokenIDs: (number | string | BigNumber)[],
      _URIs: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };
  filters: {
    URI(_uri: null, _id: number | string | BigNumber | null): EventFilter;
  };
}