// Import data types
import { QuizzesSection, RawQuizzes } from "../../types"

// Declare hash-map of quizzes based on slug key
const quizzes: RawQuizzes = {
  "what-is-ethereum": {
    title: "what-is-ethereum",
    questions: ["a001", "a002", "a003", "a004", "a005"],
  },
  "what-is-ether": {
    title: "page-what-is-ethereum-what-is-ether",
    questions: ["b001", "b002", "b003", "b004"],
  },
  web3: {
    title: "web3-title",
    questions: ["c001", "c002", "c003", "c004", "c005"],
  },
  wallets: {
    title: "wallets",
    questions: ["d001", "d002", "d003", "d004"],
  },
  security: {
    title: "security",
    questions: ["e001", "e002", "e003", "e004", "d003"],
  },
  nfts: {
    title: "nfts",
    questions: ["f001", "f002", "f003", "f004", "f005"],
  },
  "layer-2": {
    title: "layer-2",
    questions: ["g001", "g002", "g003", "g004"],
  },
  merge: {
    title: "page-assets-merge",
    questions: ["h001", "h002", "h003", "h004", "h005"],
  },
}

export const ethereumBasicsQuizzes: QuizzesSection[] = [
  {
    id: "what-is-ethereum",
    title: "What is Ethereum?",
    level: "beginner",
    next: "what-is-ether",
  },
  {
    id: "what-is-ether",
    title: "What is ether?",
    level: "beginner",
    next: "wallets",
  },
  {
    id: "wallets",
    title: "What is a wallet?",
    level: "beginner",
    next: "web3",
  },
  {
    id: "web3",
    title: "What is Web3?",
    level: "beginner",
    next: "security",
  },
  {
    id: "security",
    title: "Security and scams",
    level: "beginner",
    next: "merge",
  },
  {
    id: "merge",
    title: "What is The Merge?",
    level: "intermediate",
  },
]

export const usingEthereumQuizzes: QuizzesSection[] = [
  {
    id: "nfts",
    title: "What are NFTs?",
    level: "beginner",
    next: "layer-2",
  },
  {
    id: "layer-2",
    title: "Using layer 2",
    level: "intermediate",
  },
]

export default quizzes
