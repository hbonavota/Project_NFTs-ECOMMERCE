import NavBar from '../NavBar/NavBar';
import './Login.module.css';
import { useDispatch } from 'react-redux';
import IsAutorize from '../../actions/IsAutorize'
const Web3 = require('web3');


export default function Login() {


  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(IsAutorize())
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
          <button onClick={handleClick}>
            Ingresar con Google
          </button>
          <a href="http://localhost:8001/auth/google">go google</a>
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

