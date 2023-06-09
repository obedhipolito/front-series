import './../styles/App.css'
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Login'
import Textdavinci003 from './text-davinci-003';
import CreateImage from './create-image';
import { useTranslation } from "react-i18next";
import MoreService from './moreService';
import Question from './questions';
import CorreccionTexto from '../components/gramatic';
import Translate from './translate';


function App() {
  const { t } = useTranslation();
  return (
    <div className="center w85">
      <Header />
      {t("hello_welcome_to_my_APP")}
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/text-davinci" element={<Textdavinci003/>} />
          <Route path="/create-image" element={<CreateImage/>} />
          <Route path="/more-service" element={<MoreService/>} />
          <Route path="/question" element={<Question/>} />
          <Route path="/gramatic" element={<CorreccionTexto/>} />
          <Route path="/translate" element={<Translate/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
