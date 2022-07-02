import { v4 as uuidV4 } from "uuid";

// Modelo do usuario
class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  update_at: Date;

  constructor() {
    // Se não existir Id, ele é criado.
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
