import { Home, } from "@mui/icons-material";
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {  CLIENTS_ROUTE, DASHBOARD_ROUTE, PLANIFICATION_ROUTE, SERVICES_ROUTE, USER_ROUTE } from "@pages/dashboard";

export const pathList = [
    {
        to: DASHBOARD_ROUTE,
        text: 'Inicio',
        icon: <Home />
    },
    {
        to: PLANIFICATION_ROUTE,
        text: 'Planificaión',
        icon: <HistoryIcon />
    },
    {
        to: SERVICES_ROUTE,
        text: 'Servicios',
        icon: <AssignmentIcon />
    },
    {
        to: USER_ROUTE,
        text: 'Configuración',
        icon: <SettingsIcon />
    },
    // {
    //     to: CLIENTS_ROUTE,
    //     text: 'Clientes',
    //     icon: <PersonIcon />
    // },
]