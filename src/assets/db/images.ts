const artistsImageModules = import.meta.glob("../images/artists/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

const coversImageModules = import.meta.glob("../images/playlists/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

const chartsImageModules = import.meta.glob("../images/charts/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

export const artistsImages: string[] = Object.values(
  artistsImageModules,
) as string[];
export const coversImages: string[] = Object.values(
  coversImageModules,
) as string[];

export const chartsImages: string[] = Object.values(
  chartsImageModules,
) as string[];
