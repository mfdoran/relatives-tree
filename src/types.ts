import Family from './models/family';
import Unit from './models/unit';

type Id = string;

export type Gender = 'male' | 'female';
export type RelationType = 'blood' | 'married' | 'divorced' | 'adopted' | 'half';
export type FamilyType = 'root' | 'child' | 'parent';

export { Family, Unit };

export interface ICanvasSize {
  width: number;
  height: number;
}

export interface IRelation {
  id: Id;
  type: RelationType;
}

export interface IFamilyNode {
  id: Id;
  gender: Gender;
  parents: ReadonlyArray<IRelation>;
  children: ReadonlyArray<IRelation>;
  siblings: ReadonlyArray<IRelation>;
  spouses: ReadonlyArray<IRelation>;
  placeholder?: boolean;
}

export interface IFamilyExtNode extends IFamilyNode {
  top: number;
  left: number;
  hasSubTree: boolean;
}

export interface IConnector {
  points: [number, number, number, number];
}

export interface IFamilyData {
  canvas: ICanvasSize;
  families: ReadonlyArray<Family>;
  nodes: ReadonlyArray<IFamilyExtNode>;
  connectors: ReadonlyArray<IConnector>;
}

export interface IOptions {
  rootId: Id;
  placeholders?: boolean;
}
