function InputBox({
    label,
    amount,
    onAmonutChange,
    allCurrencies = [],
    defaultCurrency,
    onCurrencyChange,
    amountDisable = false,
    currenyDisable = false
}) {
    return(
        <>
            <label>
                {label} <br/>
                <input
                    className="border-2"
                    value={amount}
                    type="number"
                    onChange={(e) => {onAmonutChange && onAmonutChange(e.target.value)}}
                    disabled={amountDisable}

                />
            </label>
            <select
                value={defaultCurrency}
                onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
                disabled={currenyDisable}
            >
                {allCurrencies.map((curreny) => (
                    <option key={curreny} value={curreny}>
                        {curreny}
                    </option>
                ))}
            </select>
        </>
    )
}
 
export default InputBox