import { type PageHeaderProps } from '../../interfaces';
import Logo from '../Logo/Logo';
import './PageHeader.css';

function PageHeader({ classModifier = '', heading }: PageHeaderProps) {
  return (
    <div className='page-header'>
      <Logo classModifier={classModifier} />
      <h1
        className={`page-header__heading${
          classModifier ? ` page-header__heading--${classModifier}` : ''
        }`}
      >
        {heading}
      </h1>
    </div>
  );
}

export default PageHeader;
