const Token = artifacts.require("Token");

contract('Token', (accounts) => {
  it('success: initialization', async () => {
    const token = await Token.deployed();
    const balance = await token.balanceOf.call(accounts[0]);

    // Check minted balance
    assert.equal(balance.toString(), web3.utils.toWei("100000000"));

    // Check name, symbol and precision
    assert(await token.name.call(), "APYSwap");
    assert(await token.symbol.call(), "APYSwap");
    assert(await token.decimals.call(), 18);
  });
});
