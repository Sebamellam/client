Proyecto 5 Aplicación de Comercio Electrónico

## Demo

Puedes ver el demo [dando click en este enlace.](https://sebamellam.github.io/)

## Instalación

Para realizar la instalación de este proyecto, es necesario realizar `clone` o `fork` de este repositorio.

`Terminal 1 Client`
```shell
$ cd client
$ npm install
$ npm run start
```

`Terminal 2 Server-ok`
```shell
$ cd server
$ npm install
$ npm run dev
```
Una vez hecho esto en cada uno, deberás crear las variables de entorno en cada carpeta.

`./client/.env`

```
REACT_APP_BACKEND_URL="https://server-ok.onrender.com"
REACT_APP_MERCADO_PAGO_PUBLIC_KEY='TU-NÚMERO-DE-MERCADOPAGO-PARA-ACTIVAR-PAGOS'
```


`./server/.env`

```
PORT=3005
MONGODB_URI='mongodb+srv://mongo:mongo@cluster0.ftm9cmq.mongodb.net/?retryWrites=true&w=majority'
SECRET_JWT='PALABRASECRETADEBESCAMBIARLA'
PROD_ACCESS_TOKEN='TEST-8283691311611373-111111-6e0891837d7ee10afe79266843d56e31-1545626684'
```

