import React, { Component } from "react";
import axios from "axios";
import bcoin from "../Bitcoin.svg.png";
import erium from "../ether.png";
import dashh from "../dashsss.png";
import litee from "../litee.png";
import cash from "../zcashh.png";
import ripp from "../ripp.jpg";
import aug from "../aug.jpg";
import mon from "../mon.png";
import "./Currency.css";
import { Bar, Pie } from "react-chartjs-2";

class Currency extends Component {
  constructor(props) {
    super(props);
    this.getCurrency();
    this.state = {
      bitcoin: "",
      ethereum: "",
      dash: "",
      litecoin: "",
      zcash: "",
      ripple: "",
      monero: "",
      augur: "",
      pieChart: {
        type: "pie",
        data: {
          labels: [
            "Bitcoin",
            "Etherum",
            "Dash",
            "LiteCoin",
            "ZCash",
            "Ripple",
            "Monero",
            "Augur"
          ],
          datasets: [
            {
              label: "Price (USD)",
              backgroundColor: [],
              data: []
            }
          ]
        }
      },
      chartData: {
        type: "bar",
        data: {
          labels: [
            "Bitcoin",
            "Etherum",
            "Dash",
            "LiteCoin",
            "ZCash",
            "Ripple",
            "Monero",
            "Augur"
          ],
          datasets: [
            {
              labels: [
                "Bitcoin",
                "Etherum",
                "Dash",
                "LiteCoin",
                "Zcash",
                "Ripple",
                "Monero",
                "Augur"
              ],
              data: [],
              backgroundColor: [],
              borderColor: [],
              borderWidth: 1
            }
          ]
        }
      }
    };
  }
  componentDidMount() {
    this.getCurrency();
    this.update();
  }

  getCurrency = () => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,LTC,ZEC,XRP,XMR,REP&tsyms=USD"
      )
      .then(res => {
        const bit = res.data.BTC.USD;
        const eth = res.data.ETH.USD;
        const dsh = res.data.DASH.USD;
        const lte = res.data.LTC.USD;
        const zc = res.data.ZEC.USD;
        const rip = res.data.XRP.USD;
        const mon = res.data.XMR.USD;
        const aug = res.data.REP.USD;
        this.setState({ augur: aug });
        this.setState({ monero: mon });
        this.setState({ ripple: rip });
        this.setState({ zcash: zc });
        this.setState({ litecoin: lte });
        this.setState({ bitcoin: bit });
        this.setState({ ethereum: eth });
        this.setState({ dash: dsh });
        this.setState({
          pieChart: {
            data: {
              datasets: [
                {
                  data: [bit, eth, dsh, lte, zc, rip, mon, aug],
                  backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(136, 255, 0, 1)",
                    "rgba(22, 64, 252, 1)"
                  ]
                }
              ]
            }
          }
        });
        this.setState({
          chartData: {
            data: {
              datasets: [
                {
                  label: "Price of Cryptocurrency",
                  data: [bit, eth, dsh, lte, zc, rip, mon, aug],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(136, 255, 0, 0.2)",
                    "rgba(22, 64, 252, 0.2)"
                  ],
                  borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "green",
                    "blue"
                  ],
                  borderWidth: 1
                }
              ]
            }
          }
        });
      });
  };

  update = () =>
    setInterval(() => {
      this.getCurrency();
    }, 1000);

  render() {
    return (
      <div id="wrapper">
        <div id="chart">
          <Bar
            data={this.state.chartData.data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
            }}
          />
          <div id="chart2">
            <Pie
              data={this.state.pieChart.data}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
        <div id="coin">
          <img src={bcoin} className="App-logo" alt="logo" />
          <span />
          <h1 className="coin_info">Bitcoin: ${this.state.bitcoin}</h1>
        </div>
        <div id="coin">
          <img src={erium} className="App-logo" alt="logo" />
          <span />
          <h1 className="coin_info">Etherum: ${this.state.ethereum}</h1>
        </div>
        <div id="coin">
          <img src={dashh} className="App-logo" alt="logo" />
          <span />
          <h1 className="coin_info">Dash: ${this.state.dash}</h1>
        </div>
        <div id="coin">
          <img src={litee} className="App-logo" alt="logo" />
          <span />
          <h1 className="coin_info">LiteCoin: ${this.state.litecoin}</h1>
        </div>
        <div id="coin">
          <img src={cash} className="App-logo" alt="logo" />
          <span />
          <h1 className="coin_info">ZCash: ${this.state.zcash}</h1>
        </div>
        <div id="coin">
          <img src={ripp} className="App-logo" alt="logo" />
          <span />
          <h1 className="coin_info">Ripple: ${this.state.ripple}</h1>
        </div>
        <div id="coin">
          <img src={mon} className="App-logo" alt="logo" />
          <span />
          <h1 className="coin_info">Monero: ${this.state.monero}</h1>
        </div>
        <div id="coin">
          <img src={aug} className="App-logo" alt="logo" />
          <span />
          <h1 className="coin_info">Augur: ${this.state.augur}</h1>
        </div>
      </div>
    );
  }
}

export default Currency;
