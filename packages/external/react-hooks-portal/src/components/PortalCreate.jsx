import { createPortal } from 'react-dom';
import usePortal from '../portalContext';

const Portal = ({ id, children }) => {
  const target = usePortal(id);
  console.log(target, 'target')
  return createPortal(
    children,
    target,
  );
};

export default Portal