import dotenv from 'dotenv';
import app from "./app";

dotenv.config();

// Inicializa o servidor Express para ouvir em uma porta específica
app.listen(process.env.PRODUCT_PORT, () => {
    console.clear();
    console.log(`Server running at url ${process.env.SERVER_HOST || "127.0.0.1:"}${process.env.PRODUCT_PORT || 8001}`)
});