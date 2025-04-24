import { CONFIRM_ROUTE } from "@pages/dashboard/ConfirmTransferPage";
import { RESULT_ROUTE } from "@pages/dashboard/ResultTransferPage";
import { CREATE_ROUTE, EDIT_ROUTE } from "@pages/index";
import { RouteObject } from "react-router-dom";

export const dashBoardRouting: RouteObject[] = [
    {
        path: "/dashboard",
        children: [
            {
                path: "",
                lazy: async () => {
                    const { DashboardPage } = await import("../pages/dashboard")
                    return { Component: DashboardPage }
                }
            }
        ]
    },
    {
        path: "/planification",
        children: [
            {
                path: "",
                lazy: async () => {
                    const { PlanificationPage } = await import("../pages/dashboard")
                    return { Component: PlanificationPage }
                }
            }
        ]
    },
    {
        path: "/usuario",
        children: [
            {
                path:"",
                lazy: async () => {
                    const { ConfigPage } = await import("../pages/dashboard")
                    return { Component: ConfigPage }
                }
            }
        ]
    },
    {
        path: "/services",
        children: [
            {
                path:"",
                lazy: async () => {
                    const { ContactsPage } = await import("../pages/dashboard")
                    return { Component: ContactsPage }
                }
            },
            {
                path:`/services${CREATE_ROUTE}`,
                lazy: async () => {
                    const { CreateContactPage } = await import("../pages/dashboard")
                    return { Component: CreateContactPage }
                }
            },
            {
                path:`/services${EDIT_ROUTE}`,
                lazy: async () => {
                    const { EditContactPage } = await import("../pages/dashboard")
                    return { Component: EditContactPage }
                }
            }
        ]
    },
    {
        path: "/clients",
        children: [
            {
                path:"",
                lazy: async () => {
                    const { TransferPage } = await import("../pages/dashboard")
                    return { Component: TransferPage }
                }
            },
            {
                path:`/clients/${CONFIRM_ROUTE}`,
                lazy: async () => {
                    const { ConfirmTransferPage } = await import("../pages/dashboard")
                    return { Component: ConfirmTransferPage }
                }
            },
            {
                path:`/clients/${RESULT_ROUTE}`,
                lazy: async () => {
                    const { ResultTransferPage } = await import("../pages/dashboard")
                    return { Component: ResultTransferPage }
                }
            }
        ]
    }
]