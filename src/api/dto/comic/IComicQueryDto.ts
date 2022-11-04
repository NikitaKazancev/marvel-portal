import { IComicDto } from './IComicDto';

export interface IComicQueryDto {
	data: {
		results: IComicDto[];
	};
}
