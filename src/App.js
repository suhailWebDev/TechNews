import './App.css';
import Search from './Search';
import Pagination from './Pagination';
import Stories from './Stories';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className='container-fluid background'>
    <div className='container text-center fw-bold'>Tech News On The Go</div>
    <Search/>
    <Pagination/>
    <Stories/>
    </div>
    </>
  );
}

export default App;
