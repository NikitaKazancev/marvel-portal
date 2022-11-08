import { IEventDto } from './IEventDto';

export interface IEventQueryDto {
	data: {
		results: IEventDto[];
	};
}
