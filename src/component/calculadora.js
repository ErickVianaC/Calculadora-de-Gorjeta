import {
  Box,
  Grid,
  Select,
  TextField,
  Typography,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

const Calculadora = () => {
  const [valor, setValor] = useState();
  const [pessoas, setPessoas] = useState();
  const [gorjeta, setGorjeta] = useState(0);
  const [desconto, setDesconto] = useState(0);
  let porcentagem = (gorjeta / 100) * valor;
  let total = (valor + porcentagem - desconto) / pessoas;

  const handleChange = (e) => {
  const inputValue = parseInt(e.target.value);
  if (isNaN(inputValue)) {
    setDesconto(0);
  } else {
    setDesconto(inputValue);
  }
}

   return (
    <Box
      sx={{
        m: "auto",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        p: 8,
        backgroundImage: "radial-gradient(circle at 20.12% 114.09%, #ffffff 0, #ffffff 12.5%, #ffffff 25%, #f7fff5 37.5%, #e4f5e5 50%, #d0e8d6 62.5%, #bfddcb 75%, #b1d6c4 87.5%, #a7d1c1 100%)",
        my: "auto",
      }}
    >
      <Grid
        sx={{
          alignItems: "center",
          width: "70%",
          boxShadow: 8,
          borderRadius: "16px",
          p: 8,
          backgroundImage: "radial-gradient(circle at 41.91% 27.78%, #ffffff 0, #ffffff 12.5%, #ffffff 25%, #f7fff5 37.5%, #e4f5e5 50%, #d0e8d6 62.5%, #bfddcb 75%, #b1d6c4 87.5%, #a7d1c1 100%)",
        }}
        container
        spacing={2}
        rowSpacing={4}
        rowGap={2}
        direction="column"
      >
        <Typography variant="h3">Conta</Typography>

        <TextField
          label="Qual o valor da conta ?"
          color="primary"
          fullWidth
          // focused
          type="number"
          value={valor}
          onChange={(e) => setValor(parseInt(e.target.value))}
          // onChange={(e) => setValor((e.target.value))}
        />

        <TextField
          label="Quantidade de pessoas"
          fullWidth
          color="primary"
          type="number"
          value={pessoas}
          onChange={(e) => setPessoas(parseInt(e.target.value))}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <InputLabel
            sx={{
              width: "100%",
            }}
            variant="standard"
            htmlFor="uncontrolled-native"
          >
            Gorjeta
          </InputLabel>
          <Select
            fullWidth
            // label="Gorjeta"
            name="gorjeta"
            color="primary"
            value={gorjeta}
            onChange={(e) => setGorjeta(e.target.value)}
          >
            <MenuItem value={0}>Sem Gorjeta</MenuItem>
            <MenuItem value={10}>10%</MenuItem>
            <MenuItem value={15}>15%</MenuItem>
            <MenuItem value={20}>20%</MenuItem>
          </Select>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <InputLabel
            sx={{
              width: "100%",
            }}
            variant="standard"
            htmlFor="uncontrolled-native"
          >
            Desconto
          </InputLabel>

          <TextField
            color="primary"
            fullWidth
            type="number"
            value={desconto === 0 ? '' : desconto}
            onClick={() => {
              if (desconto === 0) {
                setDesconto('');
              }
            }}
            onChange={handleChange}
            />
        </Box>

        <Typography border={1} boxShadow={5} sx={{ mt: 2 }} variant="h4">
          TOTAL : {total > 0 ? total.toFixed(2) : 0}
        </Typography>
      </Grid>
    </Box>
  );
};

export default Calculadora;
