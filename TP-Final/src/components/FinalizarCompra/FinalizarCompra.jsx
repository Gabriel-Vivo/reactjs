import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";

import { db } from "../../firebase/FirebaseConfig";

import swal from "sweetalert";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

import "./FinalizarCompra.css";
import { ItemCart } from "../ItemCart/ItemCart";


const inicial = {
  name: "",
  apellido: "",
  ciudad: "",
};

export const FinalizarCompra = () => {
  const [cart, addItem, clearCart, cantidadItems, cartTotal, removeItem] =
    useContext(CartContext);

  const [values, setValues] = useState(inicial); // inizializo el values con el objeto inicial
  const [disabled, setDisabled] = useState(false); //inizializo el disabled en false para luego implementarlo en los imputs
  const [id, setId] = useState(""); //inizializo el id para luego mostrarlo en pantalla
  const [val, setVal] = useState({ cart }); //paso el carrito a firebase
  const [disable, setDisable] = useState(true);

  const hoy = new Date(); //le paso la fecha

  //funcion que toma lo que ingreso en los imputs
  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setValues({ ...values, [name]: value });

    if (values.name !== "" && values.apellido !== "" && values.ciudad !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  //funcion que manda lo ingresado en los imputs a la base de dato luego de darle click al boton finalizar compra
  const onSubmit = async (e) => {
    e.preventDefault();
    //le paso el carrito a la constante data para cargarlo en la bse de datos
    const docRef = await addDoc(collection(db, "Compras"), {
      values,
      val,
    });
    setId(docRef.id); //le paso al estado id de arriba el docRef.id  que obtenemos de la base de datos que se genera automaticamente

    swal(
      `Gracias Por Tu Compra!"  ${values.name}`,
      "Tu numero de gestion es: " + docRef.id,
      "success"
    );
    //hago un condicional para que los imputs se bloqueen
    if (disabled) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    setValues(inicial); //le paso al estado values el inicial para que se borren los imputs
  };

  return (
    <div>
      {/* hago un map del carrito para mostrar los prdoductos que elegio para la compra  */}
      {cart.map((element) => (
        <ItemCart key={element.id} producto={element} />
      ))}

      {id === "" ? (
        <h3>Registrate antes de finalizar tu Compra! </h3>
      ) : (
        <h3>Gracias por tu compra </h3>
      )}

      {/* aqui dejo el formulario con los imputs  */}

      <div className="contenedor">
        <form onSubmit={onSubmit}>
          {" "}
          {/* paso la funcion onSubmit al formulario  */}
          <div className="input-group mb-5">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Nombre
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={values.name}
              onChange={handleOnChange} //paso la funcion handleOnChange  para guardar los datos ingresados por el ususario en el estado values
              name="name"
              placeholder="Escribre tu nombre"
              required
              disabled={disabled} //le paso el estado disabled que esta en false y al momento de hacer clicck pasa a true y se bloquean los imputs
            />
          </div>
          <div className="input-group mb-5">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Apellido
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={values.apellido}
              onChange={handleOnChange}
              name="apellido"
              placeholder="Escribre tu Apellido"
              required
              disabled={disabled}
            />
          </div>
          <div className="input-group mb-5">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Ciudad
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={values.ciudad}
              onChange={handleOnChange}
              name="ciudad"
              placeholder="Escribre tu Ciudad"
              required
              disabled={disabled}
            />
          </div>
          <div className="contenedor_svg">
            <div>
              <svg
                className="svgg"
                xmlns="http://www.w3.org/2000/svg"
                
                width="80"
                viewBox="-150 -249.37925 1300 1496.2755"
              >
                <path
                  d="M0 0h997.517v538.49l-49.375 77.147 49.375 68.661v313.219H0v-507.63l30.859-35.488L0 420.454z"
                  fill="#016fd0"
                />
                <path
                  d="M193.64 695.099v-156.61h165.82l17.791 23.193 18.38-23.193h601.886V684.3s-15.74 10.643-33.945 10.8H630.295l-20.058-24.688V695.1h-65.73v-42.142s-8.979 5.882-28.39 5.882h-22.373v36.26h-99.52l-17.766-23.69-18.038 23.69zM0 420.454l37.393-87.177h64.668l21.22 48.833v-48.833h80.388l12.633 35.295 12.247-35.295h360.858v17.744s18.97-17.744 50.146-17.744l117.085.41 20.854 48.193v-48.603h67.273l18.515 27.683v-27.683h67.89v156.61h-67.89l-17.744-27.774v27.773h-98.838l-9.94-24.687h-26.57l-9.779 24.687h-67.028c-26.826 0-43.974-17.381-43.974-17.381v17.381H488.343L468.285 465.2v24.687H92.481L82.548 465.2H56.06l-9.86 24.686H0z"
                  fill="#fff"
                />
                <path
                  d="M50.628 352.584L.193 469.848h32.836l9.306-23.482h54.1l9.257 23.482h33.56L88.863 352.584zm18.66 27.29l16.49 41.034H52.75zm73.435 89.954V352.564l46.661.173 27.14 75.605 26.49-75.778h46.289v117.264h-29.316v-86.405l-31.076 86.405h-25.71l-31.162-86.405v86.405zm166.638 0V352.564h95.663v26.23h-66.038v20.058h64.495v24.688h-64.495v20.83h66.038v25.458zm112.636-117.244v117.264h29.316v-41.66h12.343l35.15 41.66h35.826l-38.574-43.203c15.831-1.336 32.161-14.923 32.161-36.018 0-24.676-19.368-38.043-40.984-38.043zm29.316 26.23h33.51c8.04 0 13.887 6.288 13.887 12.343 0 7.79-7.577 12.344-13.452 12.344h-33.945zm118.807 91.014h-29.933V352.564h29.933zm70.975 0h-6.46c-31.262 0-50.243-24.63-50.243-58.15 0-34.349 18.768-59.114 58.246-59.114h32.402v27.773h-33.586c-16.026 0-27.36 12.507-27.36 31.63 0 22.71 12.96 32.248 31.63 32.248h7.715zm63.792-117.244l-50.435 117.264h32.836l9.305-23.482h54.1l9.258 23.482h33.559l-50.387-117.264zm18.66 27.29l16.49 41.034h-33.029zm73.386 89.954V352.564h37.272l47.59 73.676v-73.676h29.317v117.264h-36.067l-48.796-75.604v75.604zM213.699 675.04V557.776h95.662v26.23h-66.038v20.059h64.495v24.687h-64.495v20.83h66.038v25.458zm468.748 0V557.776h95.662v26.23h-66.038v20.059h64.187v24.687H712.07v20.83h66.038v25.458zm-369.373 0l46.578-57.908-47.687-59.356H348.9l28.4 36.693 28.497-36.693h35.488l-47.06 58.632 46.663 58.632H403.96l-27.576-36.114-26.905 36.114zM444.37 557.796V675.06h30.087v-37.03h30.859c26.111 0 45.903-13.853 45.903-40.792 0-22.317-15.523-39.442-42.094-39.442zm30.087 26.52h32.498c8.436 0 14.465 5.17 14.465 13.5 0 7.826-5.999 13.501-14.561 13.501h-32.402zm89.491-26.54V675.04h29.316v-41.66h12.344l35.15 41.66h35.825l-38.573-43.202c15.83-1.336 32.16-14.924 32.16-36.019 0-24.676-19.368-38.043-40.984-38.043zm29.316 26.23h33.511c8.039 0 13.887 6.288 13.887 12.344 0 7.79-7.577 12.343-13.453 12.343h-33.945zm198.423 91.034v-25.458h58.671c8.681 0 12.44-4.692 12.44-9.837 0-4.93-3.747-9.913-12.44-9.913h-26.513c-23.045 0-35.88-14.04-35.88-35.121 0-18.803 11.753-36.935 46-36.935h57.088l-12.343 26.385h-49.375c-9.438 0-12.343 4.952-12.343 9.682 0 4.86 3.59 10.222 10.8 10.222h27.773c25.69 0 36.838 14.572 36.838 33.655 0 20.517-12.422 37.32-38.236 37.32zm107.597 0v-25.458h58.67c8.682 0 12.44-4.692 12.44-9.837 0-4.93-3.746-9.913-12.44-9.913h-26.512c-23.046 0-35.88-14.04-35.88-35.121 0-18.803 11.753-36.935 45.999-36.935h57.089l-12.344 26.385h-49.374c-9.438 0-12.344 4.952-12.344 9.682 0 4.86 3.59 10.222 10.801 10.222h27.773c25.69 0 36.838 14.572 36.838 33.655 0 20.517-12.422 37.32-38.236 37.32z"
                  fill="#016fd0"
                />
              </svg>
            </div>
            <div>
              <svg
                className="svgg"
                xmlns="http://www.w3.org/2000/svg"
                
                width="80"
                id="svg895"
                version="1.1"
                viewBox="-96 -98.908 832 593.448"
              >
                <defs id="defs879"></defs>
                <path
                  id="rect887"
                  display="inline"
                  fill="#ff5f00"
                  stroke-width="5.494"
                  d="M224.833 42.298h190.416v311.005H224.833z"
                />
                <path
                  id="path889"
                  d="M244.446 197.828a197.448 197.448 0 0175.54-155.475 197.777 197.777 0 100 311.004 197.448 197.448 0 01-75.54-155.53z"
                  fill="#eb001b"
                  stroke-width="5.494"
                />
                <path
                  id="path891"
                  d="M621.101 320.394v-6.372h2.747v-1.319h-6.537v1.319h2.582v6.373zm12.691 0v-7.69h-1.978l-2.307 5.493-2.308-5.494h-1.977v7.691h1.428v-5.823l2.143 5h1.483l2.143-5v5.823z"
                  class="e"
                  fill="#f79e1b"
                  stroke-width="5.494"
                />
                <path
                  id="path893"
                  d="M640 197.828a197.777 197.777 0 01-320.015 155.474 197.777 197.777 0 000-311.004A197.777 197.777 0 01640 197.773z"
                  class="e"
                  fill="#f79e1b"
                  stroke-width="5.494"
                />
              </svg>
            </div>
            <div>
              <svg
                className="svgg"
                xmlns="http://www.w3.org/2000/svg"
               
                width="80"
                viewBox="-74.7 -40.204 647.4 241.224"
              >
                <defs>
                  <linearGradient
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="scale(89.72793 -89.72793) rotate(-20.218 .966 -.457)"
                    spreadMethod="pad"
                    id="b"
                  >
                    <stop offset="0" stop-color="#222357" />
                    <stop offset="1" stop-color="#254aa5" />
                  </linearGradient>
                  <clipPath clipPathUnits="userSpaceOnUse" id="a">
                    <path d="M413.742 90.435c-.057-4.494 4.005-7.002 7.065-8.493 3.144-1.53 4.2-2.511 4.188-3.879-.024-2.094-2.508-3.018-4.833-3.054-4.056-.063-6.414 1.095-8.289 1.971l-1.461-6.837c1.881-.867 5.364-1.623 8.976-1.656 8.478 0 14.025 4.185 14.055 10.674.033 8.235-11.391 8.691-11.313 12.372.027 1.116 1.092 2.307 3.426 2.61 1.155.153 4.344.27 7.959-1.395l1.419 6.615c-1.944.708-4.443 1.386-7.554 1.386-7.98 0-13.593-4.242-13.638-10.314m34.827 9.744c-1.548 0-2.853-.903-3.435-2.289l-12.111-28.917h8.472l1.686 4.659h10.353l.978-4.659h7.467l-6.516 31.206h-6.894m1.185-8.43l2.445-11.718h-6.696l4.251 11.718m-46.284 8.43l-6.678-31.206h8.073l6.675 31.206h-8.07m-11.943 0l-8.403-21.24-3.399 18.06c-.399 2.016-1.974 3.18-3.723 3.18h-13.737l-.192-.906c2.82-.612 6.024-1.599 7.965-2.655 1.188-.645 1.527-1.209 1.917-2.742l6.438-24.903h8.532l13.08 31.206h-8.478" />
                  </clipPath>
                </defs>
                <g
                  clip-path="url(#a)"
                  transform="matrix(4.98469 0 0 -4.98469 -1804.82 502.202)"
                >
                  <path
                    d="M0 0l98.437 36.252 22.394-60.809-98.436-36.252"
                    fill="url(#b)"
                    transform="translate(351.611 96.896)"
                  />
                </g>
              </svg>
            </div>
          </div>
          {/* utilizo un operador ternario para mostrar el boton de finalizar y ademas le paso la funcion del context de borrar carrito para vaciarlo  */}
          {disabled === false ? (
            <button
              onClick={clearCart}
              className="btn btn-outline-secondary"
              disabled={disable}
            >
              enviar compra
            </button>
          ) : null}
          {/* utilizo otro opeador ternario para mostrar el estado ID y que se vea el id generado automaticamente por firebase */}
          {disabled === true ? (
            <h3>
              tu id de compra es : <span className="color"> {id} </span>
            </h3>
          ) : null}
          {disabled === true ? (
            <h3>
              Fecha de compra :{" "}
              <span className="color"> {hoy.toDateString()} </span>
            </h3>
          ) : null}
        </form>
      </div>

      {/* utilizo operador ternario para mostrar el boton de volver al inicio  */}
      {disabled === true ? (
        <Link to="/">
          <button type="button" className="btn btn-outline-secondary">
            volver al Inicio
          </button>
        </Link>
      ) : null}
    </div>
  );
};
