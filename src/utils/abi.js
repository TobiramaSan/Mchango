export const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_premiumFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_exclusiveFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_participant',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'fundsReleased',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_description',
        type: 'string',
      },
    ],
    name: 'hasCreatedGroup',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_participant',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'hasDonated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'enum Mchango.Tier',
        name: '_subscriptionPlan',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_subscriptionAmount',
        type: 'uint256',
      },
    ],
    name: 'hasSubscribed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_participant',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_groupName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_time',
        type: 'uint256',
      },
    ],
    name: 'joinedGroup',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_memberAddress',
        type: 'address',
      },
    ],
    name: 'memberKicked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: '_isBanned',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_participant',
        type: 'address',
      },
    ],
    name: 'participantVerdicit',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_memberAddress',
        type: 'address',
      },
    ],
    name: 'AddGroupMembers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'addressToSubscriber',
    outputs: [
      {
        internalType: 'address',
        name: 'subscriberAddress',
        type: 'address',
      },
      {
        internalType: 'enum Mchango.Tier',
        name: 'subscriptionTier',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'timeStamp',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'adminToGroup',
    outputs: [
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'contributionValue',
        type: 'uint256',
      },
      {
        internalType: 'enum Mchango.State',
        name: 'currentState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'admins',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allGroups',
    outputs: [
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'contributionValue',
        type: 'uint256',
      },
      {
        internalType: 'enum Mchango.State',
        name: 'currentState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_groupDescription',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_contributionValue',
        type: 'uint256',
      },
    ],
    name: 'createGroup',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_adminAddress',
        type: 'address',
      },
    ],
    name: 'donate',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_groupAdmin',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'donate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'endCollection',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exclusiveFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isExclusive',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isPremium',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_groupMemberAddress',
        type: 'address',
      },
    ],
    name: 'kickGroupMember',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_groupAdmin',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_participant',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_verdict',
        type: 'bool',
      },
    ],
    name: 'moderateParticipant',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'premiumFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'releaseCollection',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'resetEligibility',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'setContributionValue',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'startCollection',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'subscribeExclusive',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'subscribePremium',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];
