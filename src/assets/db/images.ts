const imageModules = import.meta.glob("../images/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

export const images: string[] = Object.values(imageModules) as string[];
