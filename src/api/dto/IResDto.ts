import { IHeroDto } from './IHeroDto';

export interface IResDto {
	data: {
		results: IHeroDto[];
	};
}
