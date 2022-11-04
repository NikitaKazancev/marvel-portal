export interface IHeroDto {
	id: string;
	name: string;
	description: string;
	thumbnail: { path: string; extension: string };
	urls: {
		type: string;
		url: string;
	}[];
	comics: {
		items: {
			resourceURI: string;
			name: string;
		}[];
	};
}
