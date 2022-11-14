import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import { FormControlLabel, FormLabel } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import estilos from "./Form.module.scss";

function Form() {
  return (
    <Container maxWidth="md">
      <Box
        component="form"
        sx={{
          height: "100vh",
          backgroundColor: "#FFFFFF",
          borderRadius: "15px",
          marginTop: "30px",
          padding: "40px",
          "& > :not(style)": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <label htmlFor="">Nome completo</label>
          <TextField
            id="filled-basic"
            label="Digite seu nome"
            variant="filled"
            sx={{
              backgroundColor: "rgba(176, 186, 195, 0.4)",
              borderRadius: "20px",
            }}
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <TextField
            id="filled-basic"
            label="Digite seu email"
            variant="filled"
            sx={{
              backgroundColor: "rgba(176, 186, 195, 0.4)",
              borderRadius: "20px",
            }}
          />
        </div>

        <div>
          <label htmlFor="">Data de nascimento</label>
        <input type="date" />
        </div>

        <legend>Quais as preferências ?</legend>

        <FormControl>
          <FormLabel id="radio-button-preferencia">Preferencia</FormLabel>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="masculina"
              control={<Radio />}
              label="Moda Masculina"
            ></FormControlLabel>
            <FormControlLabel
              value="Feminina"
              control={<Radio />}
              label="Moda Feminina"
            ></FormControlLabel>
            <FormControlLabel
              value="Infantil"
              control={<Radio />}
              label="Moda Infantil"
            ></FormControlLabel>
            <FormControlLabel
              value="Nenhuma"
              control={<Radio />}
              label="Prefiro não informar!"
            ></FormControlLabel>
          </RadioGroup>
        </FormControl>

        <label htmlFor="">Senha</label>
        <TextField
          id="filled-basic"
          label="Digite sua senha"
          variant="filled"
          sx={{
            backgroundColor: "rgba(176, 186, 195, 0.4)",
            borderRadius: "20px",
          }}
        />

        <label htmlFor="">Confirmação da senha</label>
        <TextField
          id="filled-basic"
          label="Digite sua senha novamente"
          variant="filled"
          sx={{
            backgroundColor: "rgba(176, 186, 195, 0.4)",
            borderRadius: "20px",
          }}
        />

        <Button variant="contained" sx={{ backgroundColor: "#0083FD" }}>
          Cadastrar
        </Button>
      </Box>
    </Container>
  );
}

export default Form;
