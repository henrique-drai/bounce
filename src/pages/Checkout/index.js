import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaymentInformation from './PaymentInformation'
import PersonalDetails from './PersonalDetails'
import Header from './Header'
import Total from './Total'
import './index.scss'

export const storageAt = "Cody's Cookie Store"
export const bagCost = 590
export const minBags = 1
export const maxBags = 2
const submitDelay = 2 * 1000
const routeSuccess = "/checkout/successful"

const initialForm = {
  name: "",
  email: "",
  card: "",
}

const canStepForward = (step, form) => {
  switch (step) {
    case 0: return true
    case 1: return Boolean(form.name && form.email)
    case 2: return Boolean(form.name && form.email && form.card)
    default: return false
  }
}

function Checkout() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initialForm)
  const [totalBags, setTotalBags] = useState(minBags)
  const [submitting, setSubmitting] = useState(false)
  const [retrying, setRetrying] = useState(false)

  const nextStep = () => {
    if (step === 2) {
      submit()
      return
    }
    setStep(prev => prev + 1)
  }

  const submit = () => {
    setSubmitting(true)
    setTimeout(() => {
      // a very dumb way to verify a credit card number
      if (form.card.trim() === "4242 4242 4242 4242") {
        navigate(routeSuccess)
      } else {
        setSubmitting(false)
        setRetrying(true)
      }
    }, submitDelay)
  }

  return (
    <div className="Checkout">
      <Header
        totalBags={totalBags}
        setTotalBags={setTotalBags}
      />
      
      <div className="content">
        {step > 0 && (
          <PersonalDetails
            form={form}
            setForm={setForm}
          />
        )}
        {step > 1 && (
          <PaymentInformation
            card={form.card}
            setForm={setForm}
          />
        )}
      </div>

      <div className="footer">
        <Total totalBags={totalBags} />
        <button
          className={retrying ? "error" : ""}
          type="button"
          onClick={nextStep}
          disabled={!canStepForward(step, form)}
        >
          {retrying
            ? "Retry"
            : step === 2
              ? "Book"
              : "Next"}
        </button>
      </div>

      {submitting && (
        <div className="submitting">
          Placing<br />
          Booking<br />
          ...
        </div>
      )}
    </div>
  )
}

export default Checkout