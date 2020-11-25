import React from "react";
import {
  DialogContent,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { CustomSelect } from "../components/Custom-select";

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
      <CustomSelect 
        value={data.profil}
        handleChange={handleChange}
        label="Profile"
        options={[{ id: 1, name: "Administrateur" },{ id: 2, name: "User" }]}
        field="profil"
        getOptionLabel={option => option.name}
      />
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
