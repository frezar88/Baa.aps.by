import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE, ALL_STATISTIC_ROUTE,
    BODY_ROUTE, EDIT_CARS,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE, SET_STATISTIC_ROUTE,
    SHOW_STATISTIC_ROUTE, STATISTIC_MENU, SUCCESS, SUCCESS_SEND_FEEDBACK, SUCCESS_SEND_STATISTIC,
} from "./utils/consts";
import Body from "./pages/Body";
import Auth from "./pages/Auth";
import ShowDataStatistic from "./pages/ShowDataStatistic";
import SuccessfulRegistration from "./pages/SuccessfulRegistration";
import StatisticMenu from "./pages/StatisticMenu";
import EditCarsForStatistic from "./pages/EditCarsForStatistic";
import ShowAllStatistic from "./pages/ShowAllStatistic";
import SetStatistic from "./pages/SetStatistic";
import SuccessfulSendStatistic from "./pages/SuccessfulSendStatistic";
import SuccessfulFeedBack from "./pages/SuccessfulFeedBack";

export const authRoutes =[
    {
        path:ADMIN_ROUTE,
        component: Admin
    },
    {
        path:SHOW_STATISTIC_ROUTE,
        component: ShowDataStatistic
    },
    {
        path:ALL_STATISTIC_ROUTE,
        component: ShowAllStatistic
    },
    {
        path:STATISTIC_MENU,
        component: StatisticMenu
    },
    {
        path:SET_STATISTIC_ROUTE,
        component: SetStatistic
    },
    {
        path:EDIT_CARS,
        component: EditCarsForStatistic
    },
    {
        path:SUCCESS_SEND_STATISTIC,
        component: SuccessfulSendStatistic
    },
    {
        path:SUCCESS_SEND_FEEDBACK,
        component: SuccessfulFeedBack
    },


]

export const publicRoutes =[



    {
        path:REGISTRATION_ROUTE,
        component: Auth
    },
    {
        path:LOGIN_ROUTE,
        component: Auth
    },
    {
        path:BODY_ROUTE,
        component: Body
    },
    {
        path:SUCCESS,
        component: SuccessfulRegistration
    },
]