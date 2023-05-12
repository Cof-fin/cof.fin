import type { Chain } from "@wagmi/core";

export const taiko = {
  id: 167002,
  name: "Taiko",
  network: "askja",
  nativeCurrency: {
    name: "Taiko Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://rpc.a2.taiko.xyz"],
    },
    default: {
      http: ["https://rpc.a2.taiko.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "L2 Explorer",
      url: "https://l2explorer.hackathon.taiko.xyz",
    },
  },
  testnet: true,
} as const satisfies Chain;

export const gnosis = {
  id: 100,
  name: "Gnosis",
  network: "gnosis",
  nativeCurrency: {
    name: "XDAI",
    symbol: "XDAI",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://rpc.gnosischain.com/"],
    },
    default: {
      http: ["https://rpc.gnosischain.com/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Gnosis Explorer",
      url: "https://gnosisscan.io",
    },
  },
  testnet: true,
} as const satisfies Chain;

export const gnosis_testnet = {
  id: 100,
  name: "Gnosis (Chaido)",
  network: "gnosis_testnet",
  nativeCurrency: {
    name: "XDAI",
    symbol: "XDAI",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://rpc.chiadochain.net/"],
    },
    default: {
      http: ["https://rpc.chiadochain.net/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Gnosis Explorer",
      url: "https://blockscout.chiadochain.net",
    },
  },
  testnet: true,
} as const satisfies Chain;

export const linea_testnet = {
  id: 59140,
  name: "Linea (Goerli)",
  network: "linea_testnet",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://rpc.goerli.linea.build/"],
    },
    default: {
      http: ["https://rpc.goerli.linea.build/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Linea (Goerli) Explorer",
      url: "https://explorer.goerli.linea.build/",
    },
  },
  testnet: true,
} as const satisfies Chain;

export const thundercore_testnet = {
  id: 18,
  name: "ThunderCore (Testnet)",
  network: "thundercore_testnet",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://testnet-rpc.thundercore.com"],
    },
    default: {
      http: ["https://testnet-rpc.thundercore.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Thundercore (Testnet) Explorer",
      url: "https://explorer-testnet.thundercore.com/",
    },
  },
  testnet: true,
} as const satisfies Chain;

export const scroll_testnet = {
  id: 534353,
  name: "Scroll Testnet",
  network: "scroll_testnet",
  nativeCurrency: {
    name: "Scroll Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://alpha-rpc.scroll.io/l2"],
    },
    default: {
      http: ["https://alpha-rpc.scroll.io/l2"],
    },
  },
  blockExplorers: {
    default: {
      name: "Scroll Explorer",
      url: "https://blockscout.scroll.io",
    },
  },
  testnet: true,
} as const satisfies Chain;

export const mumbai = {
  id: 80001,
  name: "Mumbai",
  network: "mumbai",
  nativeCurrency: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://matic-mumbai.chainstacklabs.com"],
    },
    default: {
      http: ["https://matic-mumbai.chainstacklabs.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Polygon Scan",
      url: "https://mumbai.polygonscan.com/",
    },
  },
  testnet: true,
} as const satisfies Chain;
