import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";


const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">{t('Api-Series')}</div>
        </Link>           
        <Link to="/" className="ml1 no-underline black">
          {t('series')}
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/search"
          className="ml1 no-underline black">
          {t('search')}
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/create"
              className="ml1 no-underline black">
              {t('create')}
            </Link>
            <div className="ml1">|</div>
            <Link
              to="/text-davinci"
              className="ml1 no-underline black">
              {t('text-davinci-003')}
            </Link>
            <div className="ml1">|</div>
            <Link
              to="/create-image"
              className="ml1 no-underline black">
              {t('image generator')}
            </Link>
            <div className="ml1">|</div>
            <Link
              to="/more-service"
              className="ml1 no-underline black">
              {t('more service')}
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        <div className="ml1 pointer black">
          {t('select_language')}
        </div>
      <div className="ml1 pointer black"> : </div>
      <div>     
        <LanguageSelect className="ml1 pointer black"/>
      </div>
     </div>

      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            {t('logout')}
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black">
            {t('login')}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;