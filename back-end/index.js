const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3001;

/**
 *  express: nosso servidor.

    multer: pra receber o arquivo.

    pdf-parse: pra extrair o texto do PDF.

    cors: liberar acesso pro front (em dev).
*/

app.use(cors());


const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (_, file, cd) => createBrotliCompress(null, Date.now())
});

const upload = multer({ storage });

app.post('/upload', upload.single('pdf'), async (req, res) => {
    const filePath = req.file?.path;

    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);

        fs.unlinkSync(filePath);

        res.json({text: data.text});
    }catch(error){
        res.status(500).json({error: 'Erro ao processar PDF back'});
    }
});


app.listen(port, () =>{
    console.log(`Backend rodando em http://localhost:${port}`);
});

