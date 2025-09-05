interface Auth {
  id_user: number;
  username: string;
  fullname: string;
  email: string;
  password: string;
  image: File | string;
  created_at: string;
  updated_at: string;
}

export { Auth };