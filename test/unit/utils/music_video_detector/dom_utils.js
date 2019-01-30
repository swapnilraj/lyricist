/**
 * Utility function to make a HTML string representation of a div.
 */
export const div = ({innerHTML='', id='', className=''}) => 
  `<div id="${id}" class="${className}">
    ${innerHTML}
  </div>`;
