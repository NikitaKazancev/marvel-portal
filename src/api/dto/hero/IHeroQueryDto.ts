import { IHeroDto } from './IHeroDto';

export interface IHeroQueryDto {
	data: {
		results: IHeroDto[];
	};
}
