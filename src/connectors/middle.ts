import { inAscOrder, withId } from '../utils';
import { nodeCount } from '../utils/units';
import { withType } from '../utils/family';
import { Connector, Family, FamilyType } from '../types';

export const middle = (families: Family[]): Connector[] => {
  const connectors: Connector[] = [];

  families.filter(withType(FamilyType.root)).forEach(family => {
    // between parents
    family.parents.forEach(pUnit => {
      const pX = family.X + pUnit.pos + 1;
      const pY = family.Y + 1;

      if (nodeCount(pUnit) === 2) {
        connectors.push({
          points: [pX, pY, pX + 2, pY],
        });
      }
      else if (nodeCount(pUnit) === 1 && pUnit.nodes[0].spouses.length) {
        // TODO
        families
          .filter(rFamily => rFamily.id !== family.id)
          .forEach(rFamily => {
            rFamily.parents.forEach(unit => {
              if (unit.nodes.findIndex(withId(pUnit.nodes[0].spouses[0].id)) !== -1) {
                const xX = [pX, rFamily.X + unit.pos + 1].sort(inAscOrder);
                connectors.push({
                  points: [xX[0], pY, xX[1], pY],
                });
              }
            });
          });
      }
    });
  });

  return connectors;
};
