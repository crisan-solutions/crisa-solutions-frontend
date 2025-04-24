import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "styled-components";
import v14 from '@assets/v14.svg'



export const Dashboard = () => {
  const theme = useTheme();

  const [errorMessage] = useState<string>("");

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

      {/* Sección de cuentas */}
      <Typography
        className="!mb-4 !font-bold !text-lg"
        fontFamily={theme.typography.fontFamily}
      >
        Mis Cuentas
      </Typography>

      {errorMessage ? (
        <Typography className="!text-red-500">{errorMessage}</Typography>
      ) : (
        <Card
          className="!w-2/3 !rounded-lg !shadow-md !flex !items-center !px-6"
          style={{ backgroundColor: "#F9F9F9" }}
        >
          <CardContent className="!flex !flex-row !w-full !justify-between">
            {/* Información de cuenta */}
            <div className="flex items-center">
              <div className="mr-4">
                {/* Ícono */}
                <img src={v14} />
              </div>
              <div>
                <Typography className="!font-bold">Cuenta Bancaria</Typography>
                <Typography className="!text-[#053436] !text-sm">
                  15
                </Typography>
              </div>
            </div>
            {/* Saldo */}
            <div className="flex flex-col items-end">
              <Typography className="!text-[#053436] !text-sm">
                Saldo Disponible
              </Typography>
              <Typography className="!text-[#053436] !font-bold !text-lg">
                80
              </Typography>
            </div>
          </CardContent>
          {/* Opciones */}
          <CardActions>
            <Button>
              <MoreVertIcon className="!text-[#053436]" />
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};
