import React, { Component } from "react";
import axios from "axios";
import logo from "../logo.svg";
import "./Currency.css";

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
      augur:""
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
        const aug=res.data.REP.USD;
        this.setState({augur: aug});
        this.setState({ monero: mon });
        this.setState({ ripple: rip });
        this.setState({ zcash: zc });
        this.setState({ litecoin: lte });
        this.setState({ bitcoin: bit });
        this.setState({ ethereum: eth });
        this.setState({ dash: dsh });
      });
  };

  update = () =>
    setInterval(() => {
      this.getCurrency();
    }, 3);

  render() {
    return (
      <div id="wrapper">
        <div id="coin">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bitcoin: ${this.state.bitcoin}</h1>
        </div>
        <div id="coin">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ethereum: ${this.state.ethereum}</h1>
        </div>
        <div id="coin">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dash: ${this.state.dash}</h1>
        </div>
        <div id="coin">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Augur: ${this.state.augur}</h1>
        </div>
        <h1><br/></h1>
        <div id="coin">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">LiteCoin: ${this.state.litecoin}</h1>
        </div>
        <div id="coin">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ZCash: ${this.state.zcash}</h1>
        </div>
        <div id="coin">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ripple: ${this.state.ripple}</h1>
        </div>
        <div id="coin">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Monero: ${this.state.monero}</h1>
        </div>
      </div>
    );
  }
}

export default Currency;
