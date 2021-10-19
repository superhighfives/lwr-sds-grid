import { LightningElement, api } from 'lwc';

export default class AXDSGrid extends LightningElement {
  @api axis;
  @api flow;
  @api gap;
  @api rowGap;
  @api flex;
  @api alignItems;
  @api align;
  @api bump;
  @api size;
}
