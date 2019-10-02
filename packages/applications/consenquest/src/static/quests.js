
export default [
  {
    "alias": "11",
    "properties": {
      "name": "View Your Account",
      "tagline": "Use a block explorer to see your Ethereum account's activity",
      "description": "Block explorers take all of the information included on the Ethereum blockchain and present it in a human-friendly format. Etherscan is a prime example of a block explorer. Before you get started on your journey, take a look at your account in Etherscan. If you are using a new Ethereum account, you will not have any transactional activity - but don't worry! As you progress through our quests, you will begin to build-out your account with plenty of on-chain actions!",
      "quote": "Ethereum was the first time I felt secure in the digital world - as in, I knew exactly what was happening when I was interacting with things, and could provably verify that my actions had executed exactly as they were supposed to.",
      "completionCriteria": "Autocomplete",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 0,
      "group": "Beginner",
      "transaction": "no"
    }
  },
  {
    "alias": "12",
    "properties": {
      "name": "Obtain ETH",
      "tagline": "Using a faucet, obtain some Rinkeby ETH",
      "description": "Ether is the gas of the Ethereum ecosystem - it is required for performing any action which causes a state-change to the Ethereum network. If we view Ethereum as the 'world computer', we can say that Ether is the means by which you pay to use the world computer. This is necessary to combat spam and abuse. Before you move forward with completing the rest of the quests, you'll need to obtain some Ether. Luckily, simple and easy-to-use tools have been built around distributing small amounts of Ether, called faucets. Because you'll be initially operating on the Rinkeby testnet (to prevent the loss of any real money), you can obtain some Rinkeby ETH here: https://faucet.rinkeby.io/. With respect to the quests you'll be performing, Rinkeby operates in exactly the same manner as the Ethereum Mainnet - the only difference is that ETH on Mainnet is worth actual dollars, where as Rinkeby ETH is free!",
      "quote": "Ethereum is the foundation for building an alternative Internet-based financial system. This financial system has the capacity to be completely open and trustless. This new financial system needs a native money to operate. Financial applications in this new landscape need a trustless form of collateral for their operation, and the only truly trustless asset on Ethereum is Ether. As a result of this demand,Ether has become an economic-trifecta; a “triple-point” asset, satisfying all the requirements that a new economy needs, all at once. As a result of this, Ether has become the best model for money that the world has come up with.",
      "completionCriteria": "Incoming transaction from faucet",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Beginner",
      "transaction": "yes"
    }
  },
  {
    "alias": "13",
    "properties": {
      "name": "Create a New Ethereum Account",
      "tagline": "Creating a new account is simple and easy",
      "description": "In the world of Ethereum, you can easily create as many new accounts as you'd like. A standard Ethereum account is simply a private key and its associated public address, which is derived from its public key. Since you've already installed Metamask, you already have an account; however, in this quest, you'll be creating a new account, just to help demonstrate what an account actually is. Since you'll be the only one with the private key, you'll be the only one in control of this account, and consequently, in control of whatever digital assets are owned by that account! No more banks, middlemen, or other custodians of your wealth and digital identity!",
      "quote": "Your blockchain-based identity is pseudonymous; it is only as known as you make it, through the actions you take with it. It allows me to feel free from the prying eyes of institutions.",
      "completionCriteria": "Autocomplete",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 0,
      "group": "Beginner",
      "transaction": "no"
    }
  },
  {
    "alias": "14",
    "properties": {
      "name": "Transfer ETH",
      "tagline": "Transferring value has never been easier",
      "description": "The concept of digital scarcity, introduced by blockchain technology, means that for the first time, we can have digital assets which cannot be copied. This allows these digital assets to have more resilient monetary value. Because of this, blockchains are the foundation of the next evolution of money - money that is digital, censorship resistant, transparent, and borderless. To show off the power of having a scarce digital asset, in this quest, you'll be transferring ETH to your newly-created account with the click of a button, in a matter of seconds. There is no limit to the amount of ETH you can send, no middleman extracting exorbitant fees, no restrictions on who you can send the ETH to. And, if this ETH were on mainnet, it would be worth real $.",
      "quote": "Every time I send a transaction on Ethereum I get a fuzzy feeling inside - it's like, wow, I just transferred an obscene amount of money with one click, and it cost me $0.02. It's scary and amazing, but nonetheless revolutionary.",
      "completionCriteria": "Transfer to burner wallet",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Beginner",
      "transaction": "yes"
    }
  },
  {
    "alias": "15",
    "properties": {
      "name": "Revisit Etherscan",
      "tagline": "View your token transfer on Etherscan",
      "description": "As previously mentioned, Etherscan is a block explorer - meaning it displays all of the data of the Ethereum blockchain in a human-friendly format. Since you just transferred some ETH, take a look at Etherscan to see proof that your transaction has actually occurred!",
      "quote": "Etherscan is my second Google. Sometimes I actually accidentally paste eth addresses into the Google search bar thinking it's Etherscan.",
      "completionCriteria": "1. User views transaction in Etherscan.",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 0,
      "group": "Beginner",
      "transaction": "no"
    }
  },
  {
    "alias": "21",
    "properties": {
      "name": "Create an ERC-20 Token",
      "tagline": "Create your own ERC-20 Token",
      "description": "Now that you've seen the power of scarce digital assets, let's have you create your own scarce digital asset! Ethereum makes it extremely easy to do incredibly powerful things. Prior to Bitcoin, no provably-scare digital assets could exist. Prior to Ethereum, no new provably-scare assets could be created without the establishment of an entirely new blockchain. Now, in a matter of seconds, we will help you create your own provably-scare digital resource - an ERC-20 token on Ethereum.",
      "quote": "The ability to create your own money? That's better than any money we've ever seen? That's never been possible. There have never been ways to create ANYTHING that was provably scarce! Even gold isn't provably scarce - like, we could find an asteroid tomorrow with a bunch of gold on it.",
      "completionCriteria": "User deploys token contract",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Intermediate",
      "transaction": "yes"
    }
  },
  {
    "alias": "22",
    "properties": {
      "name": "Add Your Token to Metamask",
      "tagline": "Track your token in Metamask",
      "description": "Now that you've deployed your own token to Ethereum, anyone can interact with it - including you! Metamask makes this process extremely simple and easy. To complete this quest, add your token to Metamask so that you can easily track your balance, transfer tokens directly to others, and view your transactional history.",
      "quote": "I'm not sure where Ethereum would be without Metamask.",
      "completionCriteria": "Autocomplete",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 0,
      "group": "Intermediate",
      "transaction": "no"
    }
  },
  {
    "alias": "23",
    "properties": {
      "name": "Transfer Your Tokens",
      "tagline": "Send some of your new tokens directly to another user",
      "description": "Now that you've created your token, and have some initial balance of that token, you can send those tokens to other users, or to other smart contracts on Ethereum! To do this, simply enter any ethereum address and click the transfer button below. This transfer button simply provides a user-interface for calling the 'transfer' function on your token contract - as such, any other user-interface which supports ERC-20 tokens can be used to interact with your token as well - such as Metamask! If you don't have any of your friends' addresses yet, don't worry! You can transfer your tokens directly to Joe Lubin via this address:",
      "completionCriteria": "1. Mesh directly transferred to a user",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Intermediate",
      "transaction": "yes"
    }
  },
  {
    "alias": "24",
    "properties": {
      "name": "Revisit Etherscan",
      "tagline": "View your token transfer on Etherscan",
      "description": "Since you just transferred some tokens, take a look at Etherscan to see proof that your transaction has actually occurred! You should get into the habit of checking Etherscan or another block explorer after every major activity you perform, to ensure the transaction respective to the action went through.",
      "quote": "Etherscan is my second Google. Sometimes I actually accidentally paste eth addresses into the Google search bar thinking it's Etherscan.",
      "completionCriteria": "1. User views transaction in Etherscan.",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 0,
      "group": "Intermediate",
      "transaction": "no"
    }
  },
  {
    "alias": "25",
    "properties": {
      "name": "Intro to Composability - Token Deposit",
      "tagline": "Have your token contract interact with another smart contract by 'depositing' tokens in the Lockbox",
      "description": "One of the most powerful components of Ethereum is composability - that is, everything deployed to Ethereum can interact with everything else on Ethereum. This means that every new application built has the potential to open up a whole new world of opportunity for every other application! To give you an example, we've deployed a 'Lockbox' contract, where you can 'deposit' your newly-created tokens. 'Deposit' is in quotes because you are not truly 'depositing' your tokens - they stay in your account - you are just approving the Lockbox to move some of them on your behalf! Through this, the Lockbox can perform some advanced functionality for you - such as allowing tokens to be sent to others if specific conditions are met. Don't worry about how this is done for now - we will walk you through that process later. In this quest, you'll just be approving the Lockbox to move some of your tokens, to demonstrate how one contract (your token contract) can interact with another contract (our lockbox contract).",
      "quote": "VITALIK - The killerness of the ecosystem is not the nodes, it's the links - it's the fact that, you know, you have Uniswap, and now anyone can just go ahead and build an application that lets people pay in one currency and automatically send another currency to whoever needs to be paid because Uniswap is just always there in the middle, and you can just trust it and build on top of it. Now because you have DAI, anyone can just take DAI and shove it into a DeFi thing, and now you have a DeFi thing that you can use to earn interest on DAI. Now you have Augur and anyone can build an application that just automatically plugs into one of those systems and uses it as a mechanism for gathering information about the outside world. Every single application that gets built is not just an application in its own right, it's also a component that every future thing in the Ethereum ecosystem can benefit from.",
      "completionCriteria": "User deposits tokens into the Lockbox",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Intermediate",
      "transaction": "yes"
    }
  },
  {
    "alias": "25",
    "properties": {
      "name": "Composability Continued - Token Withdrawal",
      "tagline": "Withdraw RAPID tokens from the Lockbox",
      "description": "Now that you've seen how your contract can interact with another contract, we'll demonstrate how multiple contracts can interact with the same contract, and how you can interact with any contract deployed to the Ethereum network! We've deposited some RAPID token, another ERC-20 contract, into the Lockbox. By issuing you an off-chain certificate (technology developed by the RAPID team), we'll grant you the ability to withdraw a certain amount of RAPID tokens from the lockbox. This certificate redemption process is also how you will obtain your on-chain rewards for completing the quests on this platform!",
      "quote": "JOE - The killer characteristic of the Ethereum ecosystem is composability - the fact that you can glue or compose a bunch of different protocols or products together into a more complex product, or that they can easily build upon one another, permissionlessly, is a breakthrough. It was described that the internet was architected in a way that if it saw censorship, it would route around that censorship and treat it as damage to the system. The decentralized world wide web will see silos as damage, and route around those.",
      "completionCriteria": "User withdraws tokens from the Lockbox",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Intermediate",
      "transaction": "yes"
    }
  },
  {
    "alias": "26",
    "properties": {
      "name": "Rinkeby Etherscan - Final Visit",
      "tagline": "View your token transfer on Etherscan",
      "description": "Token transfer events and contract deployments are not the only things tracked on the blockchain - your interactions with contracts are blockchain events as well! As such, revisit Etherscan to ensure that you successfully deposited and withdrew tokens from the Lockbox.",
      "quote": "Etherscan is my second Google. Sometimes I actually accidentally paste eth addresses into the Google search bar thinking it's Etherscan.",
      "completionCriteria": "1. User views transaction in Etherscan.",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 0,
      "group": "Intermediate",
      "transaction": "no"
    }
  },
  {
    "alias": "31",
    "properties": {
      "name": "Mainnet Introduction",
      "tagline": "Transition over to utilizing the Ethereum Mainnet",
      "description": "The quests you've been completing up to this point have been on the Rinkeby Testnet - a public test network which offers a low-risk way to get familiar with Ethereum and to test your smart contract code, prior to moving over to Ethereum Mainnet - where ETH has ACTUAL monetary value. There are many public Ethereum testnets, each testing their own protocol-layer code - however, at the surface, all testnets operate in nearly the same way - and all operate in nearly the same way as the Ethereum Mainnet. This means that your testnet code is directly transferrable to the Ethereum Mainnet. For this quest, view your same Ethereum Account, but on the Etherscan instance that is connected to the Ethereum Mainnet. Unless you've previously performed some mainnet activity, you transaction history should be blank.",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Advanced",
      "transaction": "no"
    }
  },
  {
    "alias": "32",
    "properties": {
      "name": "Obtain a Non-Fungible Token through Gitcoin Quests",
      "tagline": "An intro to Gitcoin Quests, non-fungible tokens, and unique digital assets",
      "description": "Up to this point, you've been dealing with ERC-20 (fungible) tokens. However, there is another powerful and widely-used token standard for non-fungible tokens - ERC-721. You can think of fungible, ERC-20 tokens like money - there are lots of $20 bills in existence, and every $20 bill is exchangeable for any other $20 bill. You can think of non-fungible, ERC-721 tokens like a pet - even though there may be millions of dogs in existence, you would never trade your dog for another dog of the same breed - each dog is unique! In this quest, you'll be obtaining your first ERC-721 token - a Gitcoin Kudos. The Kudos you'll be obtaining is a unique digital trophy that is rewarded for the completion of a specific task - in this case, the XXX Quest on the Gitcoin Quests platform! Once you complete the Gitcoin Quest, you will claim the ERC-721 on the Ethereum Mainnet - your first Mainnet asset! Don't worry about obtaining Ether just yet - Gitcoin will pay the transaction fees for sending you this non-fungible token.",
      "quote": "ANDY - Everything we move around the Internet is a copy - emails, photos, PDFs - you are never seeing the original of anything. Blockchain, for the first time, enables you to create and transfer truly one-of-a-kind digital assets. Once you think about how many things in this world are unique, you will realize the magnitude of the impact.",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 0,
      "group": "Advanced",
      "transaction": "yes"
    }
  },
  {
    "alias": "33",
    "properties": {
      "name": "View your Gitcoin Kudos in 3Box",
      "tagline": "An introduction to your Decentralized Identity",
      "description": "Now that you've obtained a mainnet asset, you can view that asset on any platform that reads ERC-721's from the Ethereum mainnet. As such, you may view the token and transaction on Etherscan; or, to view a graphical representation of your asset, head on over to 3Box! When you logged into our questing portal, a 3Box account was automatically created for you. 3Box is a platform for decentralized, user centric data storage amd identity. 3Box will not only show you all of your historical transactions and currently-owned unique digital assets, but it will also allow you to manage your own data and identity without giving any institution, including 3Box, access to your data! That is, 3Box never stores your data for you - 3Box merely acts as an orchestration layer to facilitate the decentralized storage of your data, and provides an easy-to-use interface to allow you to interact with your data!",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Advanced",
      "transaction": "no"
    }
  },
  {
    "alias": "34",
    "properties": {
      "name": "View your Token Certificates",
      "tagline": "See the rewards you've gotten for completing quests!",
      "description": "Now that you've been introduced to 3Box, you can understand how our application stores data without any database! As you've progressed through the questing flow, for completing quests, you've been obtaining Token and Emblem certificates - each of which are redeemable for Tokens and Emblems. In our effort to make this application as decentralized as possible, we've utilized 3Box to store your token certificates! Head on over to your Web3Land Space to view the certificates you've obtained. Then, head back to the profile page of this website to see how we pull these certificates into our front-end in a user-friendly format!",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Advanced",
      "transaction": "no"
    }
  },
  {
    "alias": "35",
    "properties": {
      "name": "Mainnet Onboarding - Acquire ETH & Redeem Certificates",
      "tagline": "Welcome to the party",
      "description": "Now that you've got a grasp of what's going on and are more familiar with Ethereum in general, grab your first mainnet ETH so that you can redeem your Certificates! You can obtain small amounts from mainnet faucets, or head to an exchange like Coinbase.com to buy some! If you do use an exchange, once you've purchased your ETH, merely withdraw it to your local Ethereum account - so that you can use it to perform actions on the Ethereum network, and also so that you maintain sovereignty over your own money! Not only will you need mainnet ETH to redeem the token and emblem certificates you've been awarded, but since the rest of the quests on our platform involve interacting with production-grade dApps, you will also need mainnet ETH to complete the rest of the quests (and to participate in the Ethereum ecosystem in general)! Don't worry - you don't have to buy a whole ether. Ether is divisible by 18 decimal places, so you can buy as much or as little as you'd like!",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Advanced",
      "transaction": "yes"
    }
  },
  {
    "alias": "36",
    "properties": {
      "name": "Mainnet Etherscan",
      "tagline": "View your mainnet activity on Etherscan.",
      "description": "Now that you've obtained some Ether, redeem some certificates, and obtained some DEV tokens, head on over to Etherscan to view your account, its transactions, and its assets!",
      "prereqs": "N/A",
      "tokenCert": "test",
      "emblemCert": "test",
      "reward": 5,
      "group": "Advanced",
      "transaction": "no"
    }
  }
]