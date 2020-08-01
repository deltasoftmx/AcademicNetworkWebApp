export interface Student {
  name: string,
  surnames: string,
  email: string,
  password: string,
  password2: string,
  career: string,
  description: string
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