// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    uint256 constant private TOTAL_SUPPLY = 100000000 ether;

    constructor() public ERC20("APYSwap", "APYS") {
        _mint(_msgSender(), TOTAL_SUPPLY);
    }
}