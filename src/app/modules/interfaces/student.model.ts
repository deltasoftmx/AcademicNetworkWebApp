export interface Student {
  firstname: string,
  lastname: string,
  email: string,
  passwd: string,
  password2: string,
  description: string,
  user_type_id: number,
  major_id: number
}

export interface Career {
  id: number;
  name: string;
}

export interface TextFormat {
  text: string;
  style: string;
}

export interface ElementCard {
  icon: string;
  text: TextFormat[];
}