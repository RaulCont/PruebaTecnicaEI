import { Route, Routes } from "react-router-dom";
import { MainForm } from "../src/components";

// Uso de react router para escalabilidad de la app

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <MainForm />}/>
    </Routes>
    
  )
}
