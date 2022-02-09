import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    ALL_STATISTIC_ROUTE,
    BODY_ROUTE,
    EDIT_CARS,
    EDIT_PASSWORD,
    EDIT_PROFILE,
    LOGIN_ROUTE,
    PROFILE,
    REGISTRATION_ROUTE,
    SET_STATISTIC_ROUTE,
    SHOW_STATISTIC_ROUTE,
    STATISTIC_MENU,
    SUCCESS,
    SUCCESS_SEND_FEEDBACK,
    SUCCESS_SEND_NEW_PASSWORD, SUCCESS_SEND_PERSONAL_DATA,
    SUCCESS_SEND_STATISTIC,
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
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import EditPassword from "./pages/EditPassword";
import SuccessfulSendPassword from "./pages/SuccessfulSendPassword";
import SuccessfulSendPersonalData from "./pages/SuccessfulSendPersonalData";

export const authRoutes =[
    {
        path:ADMIN_ROUTE,
        component: Admin
    },
    {
        path:PROFILE,
        component: Profile
    },
    {
        path:EDIT_PROFILE,
        component: EditProfile
    },
    {
        path:EDIT_PASSWORD,
        component: EditPassword
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
        path:SUCCESS_SEND_NEW_PASSWORD,
        component: SuccessfulSendPassword
    },
    {
        path:SUCCESS_SEND_PERSONAL_DATA,
        component: SuccessfulSendPersonalData
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
        component: Auth
    },
    {
        path:SUCCESS,
        component: SuccessfulRegistration
    },
]