import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional() // 데코레이터가 없는 속성은 거름
  @IsString({ each: true })
  readonly genres: string[];
}
