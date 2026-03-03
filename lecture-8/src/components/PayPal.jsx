import { use, useContext } from "react"
import { AmountContext, CurrencyContext } from "../App"
import { CURRENCIES } from "../utils/CurrencyUtil"

const PayPal = () => {
const {currency} = useContext(CurrencyContext)
const {amount} = useContext(AmountContext)



return (

  <div>{`You have ${amount} ${currency}. Converted to Dinar: ${amount * CURRENCIES[currency]}`}</div>
)

}

export default PayPal
