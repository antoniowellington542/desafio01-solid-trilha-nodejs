import { v4 as uuidV4 } from "uuid";

// Modelo do usuario
class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    // Se não existir Id, ele é criado.
    if (!this.id) this.id = uuidV4();
    if (!this.created_at) this.created_at = new Date();
    this.updated_at = new Date();
    this.admin = false;
  }
}

export { User };
