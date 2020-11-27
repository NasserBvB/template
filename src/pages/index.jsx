import React, { useState } from "react";
import { DialogUpdate } from "../components/Dialog";
import DataTable from "../components/Table";
import { Formulaire } from "./Formulaire";
import { validateField } from "../helpers";
import { useTranslation } from "react-i18next";
import { Chip, Switch } from "@material-ui/core";
import { LanguageRounded } from "@material-ui/icons";
const columns = [
  { field: "id", headerName: "Id", type: "number", width: 60 },
  { field: "nom", headerName: "Nom", width: 110 },
  { field: "prenom", headerName: "Prenom", width: 130 },
  { field: "login", headerName: "Login", width: 130 },
  { field: "password", headerName: "Password", type: "password", width: 130 },
  { field: "mail", headerName: "Email", width: 130 },
  { field: "tel", headerName: "Téléphone", width: 130 },
  {
    field: "profil",
    headerName: "Profile",
    width: 160,
    valueGetter: (params) => `${params.getValue("profil").name || ""}`,
  },
];

const rows = [
  {
    id: 1,
    nom: "Snow",
    prenom: "Jon",
    login: "nasser",
    password: "password",
    mail: "Email@gmail.com",
    tel: "0633333333",
    profil: { id: 1, name: "admin" },
  },
  {
    id: 2,
    nom: "Snow",
    prenom: "Jon",
    login: "nasser",
    password: "password",
    mail: "Email@gmail.com",
    tel: "0633333333",
    profil: { id: 1, name: "admin" },
  },
  {
    id: 3,
    nom: "Snow",
    prenom: "Jon",
    login: "nasser",
    password: "password",
    mail: "Email@gmail.com",
    tel: "0633333333",
    profil: { id: 1, name: "admin" },
  },
  {
    id: 4,
    nom: "Snow",
    prenom: "Jon",
    login: "nasser",
    password: "password",
    mail: "Email@gmail.com",
    tel: "0633333333",
    profil: { id: 1, name: "admin" },
  },
];
export default function FirstComponent() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: null,
    nom: "",
    prenom: "",
    login: "",
    password: "",
    mail: "",
    tel: "",
    profil: { id: null, name: "" },
  });
  const handleChangeRow = ({ data }) => {
    setOpen(true);
    setSelectedItem(data);
    console.log(data);
  };
  const [showErrors, setShowErrors] = useState(false);
  const [Errors, setErrors] = useState([]);
  const handleSelectedChange = (data) => {
    console.log(data);
  };
  const handlePageSizeChange = (data) => {
    console.log(data);
  };
  const handleChange = (e, type) => {
    let value;
    switch (type) {
      case "profil":
        value = e;
        break;

      default:
        value = e.currentTarget.value;
        break;
    }
    setSelectedItem({ ...selectedItem, [type]: value });
  };
  const handleUpdate = () => {
    const errors = [];
    Object.keys(selectedItem).forEach((item) => {
      const error = validateField(item, selectedItem[item], "Utilisateur");
      error !== "" && errors.push({ [item]: error });
    });
    console.log(errors);
    if (errors.length > 0) {
      setErrors(errors);
      setShowErrors(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseError = (e) => {
    setTimeout(() => {
      setShowErrors(false);
    }, 6000);
  };

  const { i18n } = useTranslation();

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.languages[0] === "de" ? "en" : "de");
  };
  return (
    <>
      <Switch
        variant="outlined"
        color="primary"
        onClick={handleChangeLanguage}
      ></Switch>
      <Chip icon={<LanguageRounded  />} label={`${i18n.languages[0].toUpperCase()}` } color="secondary" variant="outlined" />
      <DataTable
        columns={columns}
        rows={rows}
        handleClickRow={handleChangeRow}
        handleSelectedChange={handleSelectedChange}
        handlePageSizeChange={handlePageSizeChange}
      />
      <DialogUpdate
        handleChange={handleChange}
        Formulaire={Formulaire}
        open={open}
        handleUpdate={handleUpdate}
        showErrors={showErrors}
        handleCloseErrors={handleCloseError}
        handleClose={handleClose}
        data={selectedItem}
        module="Utilisateur"
        errors={Errors}
      />{" "}
    </>
  );
}
