import React from "react";
import "./menuSection.css";
import { Button} from '@horizin/design-system';
const MenuSection = props => {
  const { element, index, children } = props;
  return (
    <div className={'top'}>
      <Button s mt={35}  variant='purple'>{element}</Button>
      {children}
    </div>
  );
};
export default MenuSection;
