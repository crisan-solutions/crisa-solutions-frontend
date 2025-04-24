import { PropsWithChildren, FC } from "react";


export const PublicProtection: FC<PropsWithChildren> = ({children}) =>{
    // const { token } = useAuth();
    // if (token) {
    //     return <Navigate to={`/${DASHBOARD_ROUTE}`} replace />
    // }
    return children
}