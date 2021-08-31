import NavBar from '../NavBar/NavBar';
import { GoogleLogin } from 'react-google-login';
import './Login.module.css';
const Web3 = require('web3');


function Login() {

  const responseGoogle = (resp) => {
    console.log(resp)
    if (resp.ya) {
      alert(`Bienvenido ${resp.Ws.Qe}`)
    }

    if (resp.details === "Cookies are not enabled in current environment.") {
      alert("Por favor, necesitamos que ingreses a configuración de tu Browser y actives las cookies de terceros")
    }
    /*     if(){
    
        } */
  }

  const connect = async function () {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const web3 = new Web3(window.ethereum);
      let accounts = await web3.eth.getAccounts();
      console.log(accounts[0])

    } else {
      alert(" Please Install Metamask")
      window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", '_blank');
      /* window.location.href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"; */
    }
  }

  const send = function (e) {
    e.preventDefault();
    console.log("Envio dinero")
  }

  // Tomar el value de ambos inputs 
  // Validar que el valor del dinero no sea negativo
  // isAddress para ver que sea una wallet de Ethereum
  // sendTransaction from to value gas price
  // from = me
  // to = recipient 
  // value = amount

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">

        <h1>
          LOGIN
        </h1>
      <div className="LoginDiv">
        <h3>Login with google or MetaMask acount</h3>
        <button id="connect" onClick={connect}>
          MetaMask
        </button>
        <GoogleLogin
          clientId="358006183934-fiu6bc9vqf0rcpgoksmd8mqfo9m8h9u8.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>


        <div id="content">
          <span id="account">
          </span>
          <form id="send" onSubmit={send}>
            <label>Address</label>
            <input id="recipient" type="text" placeholder="Recipient" />

            <label>Cantidad</label>
            <input id="amount" type="number" placeholder="Amount" />
            <button id="send">
              Enviar
            </button>
          </form>
        </div>

      </header>
    </div>
  );
}

export default Login;
