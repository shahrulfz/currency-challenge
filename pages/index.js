import Head from 'next/head'
import { useState } from 'react';

const currencyData = {
  "success": true,
  "timestamp": 1668777843,
  "source": "SGD",
  "quotes": {
    "SGDAED": 2.677288,
    "SGDAFN": 64.584803,
    "SGDALL": 82.301699,
    "SGDAMD": 288.051696,
    "SGDANG": 1.312615,
    "SGDAOA": 368.983995,
    "SGDARS": 118.899332,
    "SGDAUD": 1.083805,
    "SGDAWG": 1.313876,
    "SGDAZN": 1.238813,
    "SGDBAM": 1.374165,
    "SGDBBD": 1.470569,
    "SGDBDT": 75.056436,
    "SGDBGN": 1.374042,
    "SGDBHD": 0.274773,
    "SGDBIF": 1507.223228,
    "SGDBMD": 0.728919,
    "SGDBND": 0.999898,
    "SGDBOB": 5.032816,
    "SGDBRL": 3.899743,
    "SGDBSD": 0.728336,
    "SGDBTC": 4.3433117e-05,
    "SGDBTN": 59.4868,
    "SGDBWP": 9.434612,
    "SGDBYN": 1.839475,
    "SGDBYR": 14286.807664,
    "SGDBZD": 1.46811,
    "SGDCAD": 0.972603,
    "SGDCDF": 1492.096884,
    "SGDCHF": 0.694408,
    "SGDCLF": 0.024386,
    "SGDCLP": 672.317989,
    "SGDCNY": 5.188806,
    "SGDCOP": 3625.758531,
    "SGDCRC": 444.669671,
    "SGDCUC": 0.728919,
    "SGDCUP": 19.316347,
    "SGDCVE": 77.472121,
    "SGDCZK": 17.103714,
    "SGDDJF": 129.657691,
    "SGDDKK": 5.224649,
    "SGDDOP": 39.731356,
    "SGDDZD": 101.040511,
    "SGDEGP": 17.863901,
    "SGDERN": 10.933781,
    "SGDETB": 38.902787,
    "SGDEUR": 0.702357,
    "SGDFJD": 1.61984,
    "SGDFKP": 0.617337,
    "SGDGBP": 0.611359,
    "SGDGEL": 1.982675,
    "SGDGGP": 0.617337,
    "SGDGHS": 10.560771,
    "SGDGIP": 0.617337,
    "SGDGMD": 44.864844,
    "SGDGNF": 6276.03927,
    "SGDGTQ": 5.686851,
    "SGDGYD": 152.379755,
    "SGDHKD": 5.702441,
    "SGDHNL": 17.999538,
    "SGDHRK": 5.303102,
    "SGDHTG": 100.51159,
    "SGDHUF": 285.834543,
    "SGDIDR": 11410.202676,
    "SGDILS": 2.52738,
    "SGDIMP": 0.617337,
    "SGDINR": 59.543369,
    "SGDIQD": 1063.032285,
    "SGDIRR": 30869.709224,
    "SGDISK": 104.585331,
    "SGDJEP": 0.617337,
    "SGDJMD": 111.978936,
    "SGDJOD": 0.516791,
    "SGDJPY": 101.917252,
    "SGDKES": 88.854342,
    "SGDKGS": 61.552307,
    "SGDKHR": 3015.333651,
    "SGDKMF": 346.965362,
    "SGDKPW": 656.041078,
    "SGDKRW": 975.643186,
    "SGDKWD": 0.224347,
    "SGDKYD": 0.606926,
    "SGDKZT": 336.460794,
    "SGDLAK": 12638.952696,
    "SGDLBP": 1101.275507,
    "SGDLKR": 267.669887,
    "SGDLRD": 112.253445,
    "SGDLSL": 12.661561,
    "SGDLTL": 2.152307,
    "SGDLVL": 0.440916,
    "SGDLYD": 3.563233,
    "SGDMAD": 7.797069,
    "SGDMDL": 13.96591,
    "SGDMGA": 3149.03724,
    "SGDMKD": 43.290661,
    "SGDMMK": 1529.541749,
    "SGDMNT": 2490.13243,
    "SGDMOP": 5.868168,
    "SGDMRO": 260.223871,
    "SGDMUR": 31.856543,
    "SGDMVR": 11.236278,
    "SGDMWK": 747.560125,
    "SGDMXN": 14.175604,
    "SGDMYR": 3.319351,
    "SGDMZN": 46.527261,
    "SGDNAD": 12.66113,
    "SGDNGN": 322.437237,
    "SGDNIO": 26.216091,
    "SGDNOK": 7.366941,
    "SGDNPR": 95.180134,
    "SGDNZD": 1.17599,
    "SGDOMR": 0.280661,
    "SGDPAB": 0.728329,
    "SGDPEN": 2.77597,
    "SGDPGK": 2.566364,
    "SGDPHP": 41.745389,
    "SGDPKR": 163.242179,
    "SGDPLN": 3.300435,
    "SGDPYG": 5222.662433,
    "SGDQAR": 2.653627,
    "SGDRON": 3.469883,
    "SGDRSD": 82.386067,
    "SGDRUB": 44.044895,
    "SGDRWF": 786.848078,
    "SGDSAR": 2.739555,
    "SGDSBD": 5.999433,
    "SGDSCR": 9.396816,
    "SGDSDG": 414.393991,
    "SGDSEK": 7.705677,
    "SGDSHP": 1.004011,
    "SGDSLE": 13.87869,
    "SGDSLL": 13138.760802,
    "SGDSOS": 414.389728,
    "SGDSRD": 22.207233,
    "SGDSTD": 15087.146617,
    "SGDSVC": 6.372576,
    "SGDSYP": 1831.436682,
    "SGDSZL": 12.598421,
    "SGDTHB": 26.033699,
    "SGDTJS": 7.434204,
    "SGDTMT": 2.558505,
    "SGDTND": 2.306662,
    "SGDTOP": 1.72925,
    "SGDTRY": 13.572591,
    "SGDTTD": 4.943725,
    "SGDTWD": 22.686067,
    "SGDTZS": 1700.567584,
    "SGDUAH": 26.899125,
    "SGDUGX": 2720.3243,
    "SGDUSD": 0.728919,
    "SGDUYU": 28.980257,
    "SGDUZS": 8165.757603,
    "SGDVEF": 695307.193476,
    "SGDVES": 6.864775,
    "SGDVND": 18082.652098,
    "SGDVUV": 86.722274,
    "SGDWST": 2.004033,
    "SGDXAF": 460.886091,
    "SGDXAG": 0.034407,
    "SGDXAU": 0.000413,
    "SGDXCD": 1.96994,
    "SGDXDR": 0.55577,
    "SGDXOF": 460.874985,
    "SGDXPF": 84.299623,
    "SGDYER": 182.430121,
    "SGDZAR": 12.579024,
    "SGDZMK": 6561.142721,
    "SGDZMW": 12.138025,
    "SGDZWL": 234.711543
  }
}


export default function Home() {
  const chosenCurrency = ["USD", "CAD", "HKD", "PHP", "HUF", "AUD", "JPY", "CNY", "MXN", "MYR", "KRW", "NZD"];
  const today = new Date();
  // const date = today.getFullYear() + '-' + today.getDate() + '-' + (today.getMonth() + 1);
  const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  const [selectedDate, setSelectedDate] = useState(date)
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
          <div>Rates as {selectedDate}</div>
          <div>{selectedDate}</div>
        </div>

        <div className="px-8 grid grid-cols-4 gap-y-8 gap-x-12">
          {
            chosenCurrency.map((currency, index) => {
              return <div key={index} className="border rounded-lg text-center">
                <div className="w-full">
                  <p className="py-4 bg-slate-200">{currency}</p>
                  <p className="py-4">1.22</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
