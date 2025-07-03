App.jsx
↓ state define
↓ useCurrencyInfo("usd") → API call
↓ currencyInfo = {inr: 83}
↓ render InputBox FROM
↓ onAmountChange = setAmount
↓ render InputBox TO
↓ Convert button clicked
↓ convert() = amount \* rate → convertAmount
↓ Swap clicked
↓ from ↔ to, amount ↔ convertAmount
↓ useCurrencyInfo(from) re-runs
