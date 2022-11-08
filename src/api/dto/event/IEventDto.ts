export interface IEventDto {
	id: string;
	title: string;
	description: string;
	thumbnail: { path: string; extension: string };
	urls:
		| []
		| [
				{
					type: string;
					url: string;
				}
		  ];
	start?: string;
	end?: string;
	previous?: {
		resourceURI: string;
		name: string;
	};
	next?: {
		resourceURI: string;
		name: string;
	};
	comics?: {
		items: {
			resourceURI: string;
			name: string;
		}[];
	};
}
