/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Test1Facet, Test1FacetInterface } from "../Test1Facet";

const _abi = [
  {
    inputs: [],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060ee8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063722713f714602d575b600080fd5b60336045565b60405190815260200160405180910390f35b600019604f816052565b90565b609481604051602401606691815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f5b1bba960e01b1790526097565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fea26469706673582212206fdba25d5c7d8b2d77022806b39c20310f2e5165fcb925128a8048ef90e01e0164736f6c63430008040033";

type Test1FacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Test1FacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Test1Facet__factory extends ContractFactory {
  constructor(...args: Test1FacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Test1Facet> {
    return super.deploy(overrides || {}) as Promise<Test1Facet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Test1Facet {
    return super.attach(address) as Test1Facet;
  }
  connect(signer: Signer): Test1Facet__factory {
    return super.connect(signer) as Test1Facet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Test1FacetInterface {
    return new utils.Interface(_abi) as Test1FacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Test1Facet {
    return new Contract(address, _abi, signerOrProvider) as Test1Facet;
  }
}
