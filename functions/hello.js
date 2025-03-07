exports.handler = async (event) => {
    const { message } = JSON.parse(event.body);
    console.log('Mensaje recibido:', message);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: '¡Hola de vuelta desde Netlify!' })
    };
  };