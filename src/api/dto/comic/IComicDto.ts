export interface IComicDto {
	id: string;
	title: string;
	description?: string;
	pageCount: string;
	textObjects: [
		{
			language?: string;
		}
	];
	prices: [
		{
			price: string;
		}
	];
	thumbnail: { path: string; extension: string };
}
