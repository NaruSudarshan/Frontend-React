# Currency Converter - Learning Notes 📚

## 🎯 What I Learned

### **Custom Hooks**
- **Create reusable logic** with custom hooks
- **API data fetching** in custom hooks
- **Return data** for components to use
- **Hook naming convention**: start with "use"

### **API Integration**
- **Fetch data** from external APIs
- **Handle async operations** with useEffect
- **Process JSON responses**
- **Real-time exchange rates**

### **Advanced Form Handling**
- **Multiple state variables** working together
- **Controlled components** with props
- **Form submission** with preventDefault
- **Dynamic form updates**

## 🔧 Key Code Patterns

### **Custom Hook for API**
```javascript
// useCurrencyInfo.js
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res => res.json())
        .then(res => setData(res[currency]))
    }, [currency])  // Re-fetch when currency changes
    
    return data  // Return exchange rates object
}
```

### **Reusable Input Component**
```javascript
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()  // Unique ID for accessibility
    
    return (
        <div className={`bg-white p-3 rounded-lg ${className}`}>
            <input
                id={amountInputId}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                disabled={amountDisable}
            />
            <select
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    )
}
```

## 📝 State Management

### **Multiple Related States**
```javascript
const [amount, setAmount] = useState(0)
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")
const [convertedAmount, setConvertedAmount] = useState(0)
```

### **Derived State from API**
```javascript
const currencyInfo = useCurrencyInfo(from)        // Custom hook call
const options = Object.keys(currencyInfo)         // Extract currency list
```

### **Currency Conversion Logic**
```javascript
const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
}

const swap = () => {
    setFrom(to)                    // Swap currencies
    setTo(from)
    setConvertedAmount(amount)     // Swap amounts
    setAmount(convertedAmount)
}
```

## 🧠 Advanced Concepts

### **useId Hook**
```javascript
const amountInputId = useId()  // Generates unique ID

<label htmlFor={amountInputId}>Amount</label>
<input id={amountInputId} />   // Links label and input for accessibility
```

### **Conditional Function Calls**
```javascript
onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//               ^^^^^^^^^^^^^^^ Check if function exists before calling
```

### **Form Submission Handling**
```javascript
<form onSubmit={(e) => {
    e.preventDefault()  // Prevent page reload
    convert()          // Custom conversion logic
}}>
```

## 🎨 Component Architecture

### **Props Pattern**
```javascript
// Parent passes functions and data to child
<InputBox
    label="From"
    amount={amount}
    currencyOptions={options}
    onCurrencyChange={(currency) => setFrom(currency)}
    onAmountChange={(amount) => setAmount(amount)}
    selectCurrency={from}
/>
```

### **Component Reusability**
- **Same InputBox** used for both "From" and "To"
- **Different props** create different behaviors
- **amountDisable={true}** for result field

### **Default Parameters**
```javascript
function InputBox({
    currencyOptions = [],      // Default empty array
    selectCurrency = "usd",    // Default currency
    amountDisable = false,     // Default enabled
    className = "",            // Default empty string
}) {
    // Component logic
}
```

## 🔄 Data Flow

### **API → Custom Hook → Component**
```
API Response → useCurrencyInfo → currencyInfo object → conversion calculation
```

### **User Input → State → UI Update**
```
User types amount → setAmount → re-render → updated display
```

## 🐛 Error Handling Patterns

### **Safe Function Calls**
```javascript
onAmountChange && onAmountChange(Number(e.target.value))
// Only call if function is provided
```

### **Default Props**
```javascript
currencyOptions = []  // Prevents map() errors if undefined
```

## 🚀 Performance Optimizations

### **Custom Hook Benefits**
- **Reusable API logic**
- **Automatic re-fetching** on dependency change
- **Separation of concerns**

### **useId for Accessibility**
- **Unique IDs** prevent conflicts
- **Better screen reader support**
- **React-generated IDs**

## 🚀 Quick Tips
- **Custom hooks** start with "use"
- **Extract currency options** with Object.keys()
- **useId** for accessible form elements
- **Conditional function calls** prevent errors
- **Default parameters** make components flexible

**Tech Stack**: React + Custom Hooks + API + Forms + useId
