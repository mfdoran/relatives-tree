import { SIZE } from '../constants';
import { prop } from './index';
import { Node, Unit } from '../types';

export const newUnit = (
  fid: number,
  nodes: readonly Node[],
  isChild = false,
): Unit => ({
  fid,
  child: isChild,
  nodes: [...nodes],
  pos: 0,
});

export const nodeIds = (unit: Unit): readonly string[] => unit.nodes.map(prop('id'));
export const nodeCount = (unit: Unit): number => unit.nodes.length;
export const rightSide = (unit: Unit): number => unit.pos + nodeCount(unit) * SIZE;
export const sameAs = (target: Unit) => (unit: Unit) => nodeIds(target).join('') === nodeIds(unit).join('');
