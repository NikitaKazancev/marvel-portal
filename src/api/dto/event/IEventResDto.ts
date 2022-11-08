export interface IEventResDto {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	detailUrl?: string;
	start?: string;
	end?: string;
	previous?: {
		id: string;
		name: string;
	};
	next?: {
		id: string;
		name: string;
	};
	comics?: {
		id: string;
		name: string;
	}[];
}
