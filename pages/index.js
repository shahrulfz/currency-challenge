import Head from 'next/head'
import { useEffect, useState } from 'react';

const currencyURL = "https://api.apilayer.com/currency_data/"
var myHeaders = new Headers();
myHeaders.append("apikey", "g7UeYngpQ1AfUc9A5CYg5pphtDf8eJn3");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export default function Home() {

  // I am not sure which currency to display, so I just set on my Own
  const chosenSourceCurrency = "SGD";
  const chosenDisplayCurrency = ["USD", "CAD", "HKD", "PHP", "HUF", "AUD", "JPY", "CNY", "MXN", "MYR", "KRW", "NZD"];

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [displayCurrency, setDisplayCurrency] = useState();

  function formatDate(date) {
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  }

  const updateCurrencyData = (currencyData) => {
    currencyData = JSON.parse(currencyData);
    const storeData = [];
    for (const currency of chosenDisplayCurrency) {
      storeData.push(
        {
          currencyName: currency,
          quote: currencyData.quotes[chosenSourceCurrency + currency]
        }
      )
    }

    setDisplayCurrency(storeData)
  }

  const getCurrencyData = () => {
    fetch(currencyURL + `live?source=${chosenSourceCurrency}`, requestOptions)
      .then(response => response.text())
      .then(currencyData => {
        updateCurrencyData(currencyData)
      })
      .catch(error => console.log('error', error));
  }

  const getCurrencyDataByDate = (date) => {
    setSelectedDate(new Date(date))
    fetch(currencyURL + `live?source=${chosenSourceCurrency}&date=${date}`, requestOptions)
      .then(response => response.text())
      .then(currencyData => {
        updateCurrencyData(currencyData)
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getCurrencyData()
  }, [])

  return (
    <div className="py-12">
      <Head>
        <title>SHAHRUL CURRENCY FOREX</title>
        <meta name="description" content="SHAHRUL CURRENCY FOREX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-20">
        <p className="px-8 bg-black text-white">SGD Currency Data</p>
        <div className="px-8 py-4 flex justify-between">
          <div className="font-bold">Rates as {formatDate(selectedDate)}</div>
          <input className="border rounded-lg text-center p-2" type="date" onChange={e => getCurrencyDataByDate(e.target.value)} />
        </div>

        <div className="px-8 grid grid-cols-4 gap-y-8 gap-x-12">
          {
            displayCurrency ?
              displayCurrency.map((currency, index) => {
                return <div key={index} className="border rounded-lg text-center">
                  <div className="w-full">
                    <p className="py-4 bg-slate-200">{currency.currencyName}</p>
                    <p className="py-4">{currency.quote}</p>
                  </div>
                </div>
              })
              :
              "Loading"
          }
        </div>
      </div>
    </div>
  )
}
