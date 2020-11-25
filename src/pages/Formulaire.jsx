import React from "react";
import {
  DialogContent,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

export const Formulaire = ({ handleChange, data }) => {
  return (
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        label="Nom"
        type="text"
        fullWidth
        value={data.nom}
        onChange={e => handleChange(e, "nom")}
      />
      <TextField
        margin="dense"
        label="Prenom"
        type="text"
        fullWidth
        value={data.prenom}
        onChange={e => handleChange(e, "prenom")}
      />
      <TextField
        margin="dense"
        label="Login"
        type="text"
        fullWidth
        value={data.login}
        onChange={e => handleChange(e, "login")}
      />
      <TextField
        margin="dense"
        label="Password"
        type="password"
        fullWidth
        value={data.password}
        onChange={e => handleChange(e, "password")}
      />
      <InputLabel id="demo-simple-select-label">
        Selectionner un profile
      </InputLabel>
      <Select
        margin="dense"
        label="Profile"
        fullWidth
        value={data.profile}
        onChange={e => handleChange(e, "profil")}
        labelId="demo-simple-select-label"
      >
        <MenuItem value={{ id: 1, name: "Administrateur" }} key={0}>
          Administrateur
        </MenuItem>
        <MenuItem value={{ id: 2, name: "User" }} key={1}>
          User
        </MenuItem>
      </Select>
      <TextField
        margin="dense"
        label="Email"
        type="text"
        fullWidth
        value={data.mail}
        onChange={e => handleChange(e, "mail")}
      />
      <TextField
        margin="dense"
        label="Telephone"
        type="number"
        fullWidth
        value={data.tel}
        onChange={e => handleChange(e, "tel")}
      />
    </DialogContent>
  );
};
