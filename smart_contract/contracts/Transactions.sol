// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionsCount;

    event Transfer(
        address from,
        address to,
        uint amount,
        uint timestamp,
        string message,
        string keyword
    );

    struct TransferInfo {
        address sender;
        address reciever;
        uint amount;
        uint256 timestamp;
        string message;
        string keyword;
    }

    TransferInfo[] transactions;

    // Function to make transfer
    function makeTransfer(
        address payable reciever,
        uint amount,
        string memory message,
        string memory keyword
    ) public {
        transactionsCount += 1; // Increment the number of transactions
        transactions.push(
            TransferInfo(
                msg.sender,
                reciever,
                amount,
                block.timestamp,
                message,
                keyword
            )
        ); // Add the transaction to the array

        emit Transfer(
            msg.sender,
            reciever,
            amount,
            block.timestamp,
            message,
            keyword
        );
    }

    function fetchAllTransactions()
        public
        view
        returns (TransferInfo[] memory)
    {
        // Gets all Transactions
        return transactions;
    }

    function fetchTransactionCount() public view returns (uint256) {
        // Gets the Transaction count
        return transactionsCount;
    }
}
