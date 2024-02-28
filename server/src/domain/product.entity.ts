/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

/**
 * A Product.
 */
@Entity('product')
export class Product extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ type: 'decimal', name: 'price', precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({ name: 'category', nullable: true })
  category: string;

  // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
