// 1. Define the shared set of questions used by all chapters
const COMMON_QUESTIONS = {
  "q1": { "type": "mcq", "question": "Have you watched the lectures?", "options": ["Yes", "No"] },
  "q2": { "type": "mcq", "question": "Have you completed the reading through Schweser Textbook?", "options": ["Yes", "No"] },
  "q3": { "type": "mcq", "question": "Have you completed practice with Question Banks provided?", "options": ["Yes", "No"] },
  "q4": { "type": "mcq", "question": "Have u completed the revision ?", "options": ["Yes", "No"] },
  "q5": { "type": "mcq", "question": "Have you taken the Chapterwise test ?", "options": ["Yes", "No"] }
};

// 2. Helper function to apply these questions to an array of chapter titles
const createSubject = (chapters) => {
  return chapters.reduce((acc, title) => {
    acc[title] = { ...COMMON_QUESTIONS };
    return acc;
  }, {});
};

// 3. Define the main data structure by listing only the chapter names
const QUESTION_DATA = {
  
"Quants": createSubject([
  "1. Returns of Financial Assets and Instruments",
  "2. Types of Financial Returns",
  "3. Benchmarking Returns",
  "4. The Time Value of Money in Finance",
  "5. Statistical Characteristics of Asset Returns",
  "6. Statistical Distributions for Financial Asset Prices and Returns",
  "7. Estimation and Hypothesis Testing",
  "8. The Return and Risk of a Financial Portfolio",
  "9. Simulation of Financial Asset Prices and Returns",
  "10. Applications of Simple Linear Regression in Finance",
  "11. Introduction to Financial Data Science"
]),

"ECO": createSubject([
  "12. The Firm & Market Structures",
  "13. Understanding Business Cycles",
  "14. Fiscal Policy",
  "15. Monetary Policy",
  "16. Introduction to Geopolitics",
  "17. International Trade",
  "18. Capital Flows and the FX Market",
  "19. Exchange Rate Calculations"
]),

"CI": createSubject([
  "20. Organizational Forms, Corporate Issuer Features, and Ownership",
  "21. Investors and Other Stakeholders",
  "22. Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
  "23. Working Capital and Liquidity",
  "24. Capital Investments and Capital Allocation",
  "25. Capital Structure",
  "26. Business Models"
]),

"FSA": createSubject([
  "27. Introduction to Financial Statement Analysis",
  "28. Analyzing Income Statements",
  "29. Analyzing Balance Sheets",
  "30. Analyzing Statements of Cash Flows I",
  "31. Analyzing Statements of Cash Flows II",
  "32. Analysis of Inventories",
  "33. Analysis of Long-Term Assets",
  "34. Topics in Long-Term Liabilities and Equity",
  "35. Analysis of Income Taxes",
  "36. Financial Reporting Quality",
  "37. Financial Analysis Techniques",
  "38. Introduction to Financial Statement Modeling"
]),

"Equity": createSubject([
  "39. Equity Instrument Features",
  "40. Equity Jurisdictions, Classes, and the Voting Process",
  "41. Equity Issuance and Trading",
  "42. Sources of Equity Returns",
  "43. Introduction to Equity Valuation",
  "44. Discounted Cash Flow and Growth Models",
  "45. Relative Value Equity Valuation Approaches",
  "46. Financial Statement Forecasting in Equity Valuation",
  "47. Industry and Competitive Analysis",
  "48. Company Analysis: Past, Present, and Future",
  "49. Equity Analyst Research Reports",
  "50. The Capital Asset Pricing Model, Market Model, and Other Factor-Based Equity Models"
]),

"FI": createSubject([
  "51. Fixed-Income Instrument Features",
  "52. Fixed-Income Cash Flows and Types",
  "53. Fixed-Income Issuance and Trading",
  "54. Fixed-Income Markets for Corporate Issuers",
  "55. Fixed-Income Markets for Government Issuers",
  "56. Fixed-Income Bond Valuation: Prices and Yields",
  "57. Yield and Yield Spread Measures for Fixed-Rate Bonds",
  "58. Yield and Yield Spread Measures for Floating-Rate Instruments",
  "59. The Term Structure of Interest Rates: Spot, Par, and Forward Curves",
  "60. Interest Rate Risk and Return",
  "61. Yield-Based Bond Duration Measures and Properties",
  "62. Yield-Based Bond Convexity and Portfolio Properties",
  "63. Curve-Based and Empirical Fixed-Income Risk Measures",
  "64. Credit Risk",
  "65. Credit Analysis for Government Issuers",
  "66. Credit Analysis for Corporate Issuers",
  "67. Fixed-Income Securitization",
  "68. Asset-Backed Security (ABS) Instrument and Market Features",
  "69. Mortgage-Backed Security (MBS) Instrument and Market Features"
]),

"DI": createSubject([
  "70. Derivative Instrument and Derivative Market Features",
  "71. Forward Commitment and Contingent Claim Features and Instruments",
  "72. Derivative Benefits, Risks, and Issuer and Investor Uses",
  "73. Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
  "74. Pricing and Valuation of",
  "75. Pricing and Valuation of Futures Contracts",
  "76. Pricing and Valuation of Interest Rate and Other Swaps",
  "77. Pricing and Valuation of Options",
  "78. Option Replication Using Put-Call Parity",
  "79. Valuing a Derivative Using a One-Period Binomial Model"
]),

"AI": createSubject([
  "80. Alternative Investment Features, Methods, and Structures",
  "81. Alternative Investment Performance and Returns",
  "82. Investments in Private Capital: Equity and Debt",
  "83. Real Estate and Infrastructure",
  "84. Natural Resources",
  "85. Hedge Funds",
  "86. Introduction to Digital Assets"
]),

"PM": createSubject([
  "87. Portfolio Risk & Return: Part I",
  "88. Portfolio Risk & Return: Part II",
  "89. Portfolio Management: An Overview",
  "90. Basics of Portfolio Planning & Construction",
  "91. The Behavioral Biases of Individuals",
  "92. Introduction to Risk Management"
]),

"Ethics": createSubject([
  "93. Ethics and Trust in the Investment Profession",
  "94. Code of Ethics and Standards of Professional Conduct",
  "95. Guidance for Standard I: Professionalism",
  "96. Guidance for Standard II: Integrity of Capital Markets",
  "97. Guidance for Standard III: Duties to Clients",
  "98. Guidance for Standard IV: Duties to Employers",
  "99. Guidance for Standard V: Investment Analysis, Recommendations, and Actions",
  "100. Guidance for Standard VI: Conflicts of Interest",
  "101. Guidance for Standard VII: Responsibilities as a CFA Institute Member or CFA Candidate",
  "102. Ethics Application of the Code and Standards: Level I"
])
};

export default QUESTION_DATA;