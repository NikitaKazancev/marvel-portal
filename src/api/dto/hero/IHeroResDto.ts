export interface IHeroResDto {
	id: string;
	name: string;
	description: string;
	thumbnail: string;
	homepage: string;
	wiki: string;
	comics: { id: string; name: string }[];
}
