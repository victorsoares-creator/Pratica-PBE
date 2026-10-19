// Servidor Express - Projeto #32: Observatório Astronômico & Telescópios
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3032;

app.get('/api/observatorio/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 32,
        sistema: "Observatório Astronômico & Telescópios",
        categoria: "Ciência & Aeroespacial",
        tabela_conectada: process.env.TABELA_ALVO || "registros_celestes",
        parametro_ambiente: process.env.CUPULA_TELESCOPIO || "ORION_DEEP_SPACE_32",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #32] Observatório Astronômico & Telescópios rodando em http://localhost:${PORT}/api/observatorio/status`);
});