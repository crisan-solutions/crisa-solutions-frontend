import { useEffect } from "react";
import {
  Typography,
} from "@mui/material";
import { useTheme } from "styled-components";



export const Dashboard = () => {
  const theme = useTheme();


  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Saludo */}
      <Typography
        className="!mb-4"
        fontFamily={theme.typography.fontFamily}
        fontSize="2rem"
      >
        Hola,{" Usuario "}
      </Typography>      
    </div>
  );
};
