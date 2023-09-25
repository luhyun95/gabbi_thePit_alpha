type CharacterDto = {
  [key in CharacterParts]?: number[] | number;
};

interface UserDto {
  username?: string;
  character?: CharacterDto;
  membership?: string;
}

type CharacterParts = "body" | "eyes" | "cloth" | "head" | "face";

type HouseDto = {
  name: string;
  location?: {
    lat: number;
    lng: number;
  };
  members?: string[];
  description?: string;
  properties?: { key: string; value: string }[];
  photos?: string[];
  keywords?: string[];
  video?: string;
};
