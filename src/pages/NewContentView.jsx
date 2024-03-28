import { useEffect, useState } from "react";
import "./NewContentView.css";
import { FilterDropdown } from "../components/FilterDropdown";
import {
  getCountries,
  getBuyerProfiles,
  getContentManagers,
  getPlanningStatus,
  apiURL
} from "../data/getData";

export const NewContentView = () => {
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("---");
  const [buyerProfiles, setBuyerProfiles] = useState([]);
  const [buyerProfile, setBuyerProfile] = useState("---");
  const [contentType, setContentType] = useState("---");
  const [planningStatus, setPlanningStatus] = useState([]);
  const [owner, setOwner] = useState("---");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [cluster, setCluster] = useState("");
  const [contentManagers, setContentManager] = useState([]);
  const [editorNotes, setEditorNotes] = useState("");

  let areas = ["Banking", "Investment"];
  let contentTypes = [
    "Bests",
    "Comparative",
    "Current news",
    "Display in home",
    "Display in menu",
    "Evergreen",
    "Interview",
    "Pillar",
  ];

  const selectOption = (attribute, option) => {
    console.log(option);
    switch (attribute) {
      case "Area":
        setArea(option);
        break;
      case "Buyer profile":
        setBuyerProfile(option);
        break;
      case "Content type":
        setContentType(option);
        break;
      case "Country":
        setCountry(option);
        break;
      case "Owner":
        setOwner(option);
        break;

    }
  };

  const fetchData = async () => {
    try {
      const countries = await getCountries();
      const buyerProfiles = await getBuyerProfiles();
      const contentManagers = await getContentManagers();
      const planningStatus = await getPlanningStatus();

      const optionsContentManager = contentManagers.map((manager) => ({
        id: manager.id.toString(), // Convertimos el id a string por consistencia, aunque no es estrictamente necesario
        value: manager.name,
      }));
      setCountries(countries);
      setPlanningStatus(planningStatus)
      setBuyerProfiles(buyerProfiles);
      setContentManager(optionsContentManager);
    } catch (error) {
      console.error("Error al obtener los datos", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Recopila los datos de tu estado aquí
    const postData = {
      title,
      area: area === "---" ? null : area,
      country_code: country === "---" ? null : country,
      cluster,
      owner_id: owner === "---" ? null : parseInt(owner),
      buyerProfile,
      contentType,
      editorNotes
    };
    console.log(postData)
    console.log(JSON.stringify(postData))

    try {
      const response = await fetch(apiURL+"/contents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      // Maneja la respuesta. Por ejemplo, podrías redirigir al usuario o mostrar un mensaje de éxito
      console.log("Item creado exitosamente:", data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="new-content-view-body">
      <h2>Plan a content</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <FilterDropdown
          attribute="Area"
          options={areas}
          onSelect={selectOption}
        />
        <FilterDropdown
          attribute="Buyer profile"
          options={buyerProfiles}
          onSelect={selectOption}
        />
        <FilterDropdown
          attribute="Content type"
          options={contentTypes}
          onSelect={selectOption}
        />

        <FilterDropdown
          attribute="Country"
          options={countries}
          onSelect={selectOption}
        />

        <FilterDropdown
          attribute="Planning Status"
          options={planningStatus}
          onSelect={selectOption}
        />

        <label>
          Cluster:
          <input
            placeholder="ETFs"
            onChange={(e) => setCluster(e.target.value)}
            value={cluster}
          />
        </label>

        <label>
          Due Date:
          <input type="date" />
        </label>

        <FilterDropdown
          attribute="Owner"
          options={contentManagers}
          onSelect={selectOption}
        />
        <label>
          Notes to editor:
          <textarea
        id="editorNotes"
        name="editorNotes"
        rows="10"
        value={editorNotes}
        onChange={e => setEditorNotes(e.target.value)}
        placeholder="Form, style... "
      />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
