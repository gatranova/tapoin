/* =======================
   AUTHENTICATION ROUTES
   ======================= */
export const FORGOT_PASSWORD = "/forgot-password";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const RESET_PASSWORD = (token: string) => `/reset-password/${token}`;
export const AUTH_PAGES: string[] = [REGISTER, LOGIN, FORGOT_PASSWORD];

/* =======================
   API ROUTES
   ======================= */
export const API_FORGOT_PASSWORD = "/api/auth/forgot-password";
export const API_LOGIN = "/api/auth/login";
export const API_LOGOUT = "/api/auth/logout";
export const API_PROFILE = "/api/auth/profile";
export const API_RESET_PASSWORD = "/api/auth/reset-password";
export const API_REGISTER = "/api/auth/register";

export const API_CHAT = "/api/chat";
export const API_FAVORITE = "/api/favorit";
export const API_RESTAURANT_DETAIL = (id: string) => `/api/restaurant/${id}`;

/* =======================
   GENERAL ROUTES
   ======================= */
export const FAVORITES = "/favorite";
export const HISTORY = "/history";
export const HOME = "/";
export const PROFILE = (name: string) => `/${name}`;
export const RESTAURANT = "/restaurant";
export const RESTAURANT_DETAIL = (id: string) => `/restaurant/${id}`;
export const SETTINGS = "/settings";