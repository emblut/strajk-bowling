import PageHeader from '../PageHeader/PageHeader';
import './Loader.css';

function Loader() {
  return (
    <div className='loader page'>
      <PageHeader classModifier={'bigger'} heading={'STRAJK'} />
      <h2 className='loader__sub-heading'>BOWLING</h2>
    </div>
  );
}

export default Loader;
