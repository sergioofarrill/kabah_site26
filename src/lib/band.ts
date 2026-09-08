export const band = {
  name: "Kabah",
  city: "Mexico City",
  formed: 1992,
  current: 2026,
  tagline: "Hacemos Pop. ",
  bio: "Icónico grupo mexicano de música pop — Un grupo que transforma la energía de una generación en melodías inolvidables, donde cada canción sigue brillando como un recuerdo compartido.",
  emails: {
    booking: "ventas@kabahoficial.com",
    press: "press@kabahoficial.com",
    management: "mgmt@kabahoficial.com",
  },
  agent: {
    name: "Kabah",
    company: "Kabah",
    phone: "**********",
    territory: "Worldwide",
  },
  members: [
    { name: "Sergio O'Farrill", role: "Vocales" },
    { name: "Daniela Magun", role: "Vocales" },
    { name: "Rene Ortiz", role: "Vocales" },
    { name: "Apio Quijano", role: "Vocales" },
    { name: "Federica Quijano", role: "Vocales" },
  ],
  album: {
    title: "La Calle de Las Sirenas",
    year: 1996,
    note: "30 Years of Dreams",
    tracks: [
      "La Calle De Las Sirenas",
      "Amor Por Amor",
      "Vivir",
      "Siempre Hay Una Solucion",
      "Vive",
      "Sin Ti Yo No",
      "Juntos",
      "Fuego De Gloria",
      "Estare",
      "Amor, Paz Y Entendimiento",
      "Tu Risa Genial",
      "Amor De Estudiante",
    ],
  },
  socials: [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/kabah_oficial",
    },
    {
      id: "tiktok",
      label: "TikTok",
      href: "https://www.tiktok.com/@kbh.oficial",
    },
    {
      id: "spotify",
      label: "Spotify",
      href: "https://open.spotify.com/artist/61hAcjvvUS6EXMpeeHwaDi",
    },
    {
      id: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCRZbx5hov_8yyIsZHpJMzbg",
    },
    {
      id: "x",
      label: "X",
      href: "https://x.com/kabah_oficial",
    },
  ],
} as const;

export const navItems = [
  { href: "#band", label: "Band" },
  { href: "#music", label: "Music" },
  { href: "#booking", label: "Booking" },
  { href: "#connect", label: "Connect" },
] as const;

export const showTypes = ["Club", "Festival", "Private", "Other"] as const;

export type ShowType = (typeof showTypes)[number];
