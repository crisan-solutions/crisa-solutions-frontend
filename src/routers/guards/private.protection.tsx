import { FC, PropsWithChildren } from "react"

export const PrivateProtection: FC<PropsWithChildren> = ({ children }) => {
  // const { token } = useAuth();
  // if (!token) {
  //   return <Navigate to={`/${HOME_ROUTE}`} replace/>
  // }
  return children

}
