// Login_up.jsx
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import './AuthLayout.css'

const AuthLayout = ({ children }) => {

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>

      <div className="layout-wrapper">
        {isMobile && (
          <div className="mobile-header">
            <h1>Education</h1>
            <Link to={'/'}>
              <button className="close-btn">
                <X />
              </button>
            </Link>
          </div>
        )}

        <div className="content-area">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;