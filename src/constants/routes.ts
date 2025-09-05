/* =======================
   AUTHENTICATION ROUTES
   ======================= */
export const LOGIN = "/masuk";
export const REGISTER = "/daftar";
export const FORGOT_PASSWORD = "/lupa-kata-sandi";
export const RESET_PASSWORD = (token: string) => `/reset-kata-sandi/${token}`;
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
export const API_RESTAURANT_DETAIL = (id: string) => `/api/restoran/${id}`;

/* =======================
   GENERAL ROUTES
   ======================= */
export const FAVORITES = "/favorit";
export const HOME = "/beranda";
export const HISTORY = "/riwayat";
export const SETTINGS = "/pengaturan";
export const RESTAURANT = "/restoran";
export const RESTAURANT_DETAIL = (id: string) => `/restoran/${id}`;