/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from './base.dto';

/**
 * A ProductDTO object.
 */
export class ProductDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiProperty({ description: 'name field' })
  name: string;

  @ApiProperty({ description: 'description field', required: false })
  description: string;

  @ApiProperty({ description: 'price field', required: false })
  price: number;

  @ApiProperty({ description: 'category field', required: false })
  category: string;

  // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
